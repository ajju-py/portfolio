// Vercel Serverless Function: POST /api/send
// Handles portfolio contact form submissions using Nodemailer Gmail SMTP

const nodemailer = require('nodemailer');

const rateLimitMap = new Map();
const recentSubmissions = new Map();

function cleanInput(str) {
  if (typeof str !== 'string') return '';
  return str.trim();
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

module.exports = async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Only POST requests are accepted.',
    });
  }

  const forwarded = req.headers['x-forwarded-for'];
  const ip = forwarded ? forwarded.split(',')[0].trim() : (req.socket && req.socket.remoteAddress) || '127.0.0.1';
  const now = Date.now();

  // 1. Rate limiting check (max 5 requests per 10 minutes per IP)
  const windowMs = 10 * 60 * 1000;
  const ipRequests = (rateLimitMap.get(ip) || []).filter((time) => now - time < windowMs);
  if (ipRequests.length >= 5) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please wait a few minutes before submitting again.',
    });
  }

  // 2. Extract and sanitize inputs
  let rawBody = req.body;
  if (typeof rawBody === 'string') {
    try {
      rawBody = JSON.parse(rawBody);
    } catch (e) {
      return res.status(400).json({ success: false, error: 'Invalid JSON payload.' });
    }
  }
  rawBody = rawBody || {};

  const rawName = rawBody.name || rawBody.fullName || '';
  const rawEmail = rawBody.email || '';
  const rawSubject = rawBody.subject || 'Portfolio Inquiry';
  const rawMessage = rawBody.message || '';

  // Prevent header injection: strip CR/LF from single-line headers
  const name = cleanInput(rawName).replace(/[\r\n]/g, ' ');
  const email = cleanInput(rawEmail).replace(/[\r\n]/g, '');
  const subject = cleanInput(rawSubject).replace(/[\r\n]/g, ' ');
  const message = cleanInput(rawMessage);

  // 3. Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, and message are required fields.',
    });
  }

  if (name.length < 2 || name.length > 100) {
    return res.status(400).json({
      success: false,
      error: 'Name must be between 2 and 100 characters.',
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.length < 5 || email.length > 120 || !emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.',
    });
  }

  if (subject.length > 200) {
    return res.status(400).json({
      success: false,
      error: 'Subject must not exceed 200 characters.',
    });
  }

  if (message.length < 10 || message.length > 5000) {
    return res.status(400).json({
      success: false,
      error: 'Message must be between 10 and 5000 characters.',
    });
  }

  // 4. Record request for rate limiting and duplicate prevention
  ipRequests.push(now);
  rateLimitMap.set(ip, ipRequests);

  const submissionKey = `${ip}:${email}:${message.slice(0, 50)}`;
  const lastTime = recentSubmissions.get(submissionKey);
  if (lastTime && now - lastTime < 30000) {
    return res.status(429).json({
      success: false,
      error: 'Duplicate submission detected. Please wait before submitting again.',
    });
  }
  recentSubmissions.set(submissionKey, now);

  // 5. Read SMTP configuration from server-side environment variables
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT, 10) || 465;
  const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
  const smtpUser = process.env.SMTP_USER || 'ajaytandale8983@gmail.com';
  const rawPass = process.env.SMTP_PASS || '';
  const smtpPass = rawPass.trim().replace(/\s+/g, '');
  const contactTo = process.env.CONTACT_TO || 'work.ajaytandale@gmail.com';

  if (!smtpPass) {
    console.warn('[CONTACT API] SMTP_PASS not configured in environment. Returning 503.');
    return res.status(503).json({
      success: false,
      unconfigured: true,
      error: 'Gmail SMTP service is pending configuration (SMTP_PASS not set).',
    });
  }

  // 6. Transmit email via Nodemailer
  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const timestamp = new Date().toUTCString();

    const mailOptions = {
      from: `"Portfolio Contact Form" <${smtpUser}>`,
      to: contactTo,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `Portfolio Contact Submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nTimestamp: ${timestamp}\n\nMessage:\n${message}\n`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0284c7; margin-top: 0;">New Portfolio Contact Submission</h2>
          <p style="color: #64748b; font-size: 13px;">Received on ${escapeHtml(timestamp)}</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p><strong>From:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-left: 4px solid #0284c7; border-radius: 4px;">
            <p style="margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #1e293b;">${escapeHtml(message)}</p>
          </div>
          <p style="font-size: 12px; color: #94a3b8; margin-top: 30px;">
            This email was sent via the portfolio contact form. You can reply directly to this email to respond to ${escapeHtml(name)}.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`[CONTACT API] Email delivered successfully to ${contactTo} from ${email}`);
    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully.',
    });
  } catch (err) {
    console.error('[SMTP SEND ERROR]:', err.message);
    return res.status(500).json({
      success: false,
      error: 'Failed to deliver message via Gmail SMTP. Please try again later.',
    });
  }
};
