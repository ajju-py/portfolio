import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import nodemailer from "nodemailer";
import { z } from "zod";

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

function cleanInput(str: string): string {
  if (typeof str !== "string") return "";
  return str.trim();
}

const ContactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters").max(100),
  email: z.string().email("Please provide a valid email address").max(120),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
  subject: z.string().max(200).optional(),
});

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "127.0.0.1";
    if (isRateLimited(ip)) {
      return Response.json(
        { error: "Too many requests. Please wait a few minutes before submitting again." },
        { status: 429 }
      );
    }

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return Response.json(
        { error: "Invalid JSON payload." },
        { status: 400 }
      );
    }
    const parseResult = ContactSchema.safeParse(body);
    if (!parseResult.success) {
      return Response.json(
        { error: parseResult.error.errors[0]?.message || "Invalid payload." },
        { status: 400 }
      );
    }

    const { fullName, email, message, subject } = parseResult.data;
    const sanitizedName = cleanInput(fullName).replace(/[\r\n]/g, " ");
    const sanitizedEmail = cleanInput(email).replace(/[\r\n]/g, "");
    const emailSubject = cleanInput(subject || `Portfolio Inquiry from ${sanitizedName}`).replace(/[\r\n]/g, " ");
    const sanitizedMessage = cleanInput(message);

    const targetRecipient = process.env.CONTACT_TO || config.email || "ajaytandale8983@gmail.com";

    // 1. Check for Resend API Key
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        const { data: resendData, error: resendError } = await resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [targetRecipient],
          replyTo: sanitizedEmail,
          subject: emailSubject,
          react: EmailTemplate({
            fullName: sanitizedName,
            email: sanitizedEmail,
            message: sanitizedMessage,
          }) as React.ReactElement,
        });

        if (resendError) {
          console.error("[CONTACT RESEND ERROR]", resendError);
        } else {
          return Response.json({ success: true, provider: "resend", data: resendData });
        }
      } catch (err) {
        console.error("[CONTACT RESEND EXCEPTION]", err);
      }
    }

    // 2. Check for Gmail SMTP fallback
    const smtpPass = (process.env.SMTP_PASS || "").trim().replace(/\s+/g, "");
    const smtpUser = process.env.SMTP_USER || "ajaytandale8983@gmail.com";
    if (smtpPass) {
      try {
        const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
        const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
        const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;

        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Contact Form" <${smtpUser}>`,
          to: targetRecipient,
          replyTo: sanitizedEmail,
          subject: emailSubject,
          text: `New contact submission from ${sanitizedName} (${sanitizedEmail}):\n\n${sanitizedMessage}\n\nTime: ${new Date().toISOString()}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #1e293b;">
              <h2 style="color: #0f172a; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">New Portfolio Contact Message</h2>
              <p><strong>From:</strong> ${sanitizedName} (&lt;<a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a>&gt;)</p>
              <p><strong>Subject:</strong> ${emailSubject}</p>
              <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 16px; margin: 20px 0; border-radius: 4px;">
                <p style="white-space: pre-wrap; margin: 0; line-height: 1.6;">${sanitizedMessage.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
              </div>
              <p style="font-size: 12px; color: #64748b;">Delivered via Ajay Tandale Portfolio Gateway at ${new Date().toUTCString()}</p>
            </div>
          `,
        });

        return Response.json({ success: true, provider: "smtp" });
      } catch (err) {
        console.error("[CONTACT SMTP EXCEPTION]", err);
      }
    }

    // 3. If neither email credentials exist, return 503 so frontend triggers mailto fallback
    return Response.json(
      {
        error: "Direct email gateway is unconfigured in this environment. Falling back to default mailto client.",
        fallbackMailto: true,
      },
      { status: 503 }
    );
  } catch (error) {
    console.error("[CONTACT HANDLER ERROR]", error);
    return Response.json({ error: "Internal server error occurred." }, { status: 500 });
  }
}
