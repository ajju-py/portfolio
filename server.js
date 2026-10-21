require('dotenv').config({ override: true });
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(cors());
app.use(express.json());

// MIME types for 3D graphics, media, and WASM
const setCustomMimeTypes = (res, filePath) => {
  if (filePath.endsWith('.glb')) res.setHeader('Content-Type', 'model/gltf-binary');
  else if (filePath.endsWith('.gltf')) res.setHeader('Content-Type', 'model/gltf+json');
  else if (filePath.endsWith('.wasm')) res.setHeader('Content-Type', 'application/wasm');
  else if (filePath.endsWith('.hdr')) res.setHeader('Content-Type', 'image/vnd.radiance');
  else if (filePath.endsWith('.mp4')) res.setHeader('Content-Type', 'video/mp4');
  else if (filePath.endsWith('.mp3')) res.setHeader('Content-Type', 'audio/mpeg');
  else if (filePath.endsWith('.enc')) res.setHeader('Content-Type', 'application/octet-stream');
};

const staticOptions = {
  setHeaders: setCustomMimeTypes,
};

const rootDir = __dirname;
const portfoliosDir = fs.existsSync(path.join(rootDir, 'portfolios'))
  ? path.join(rootDir, 'portfolios')
  : path.join(rootDir, 'dist', 'portfolios');

// Active portfolio version metadata (V3 excluded per requirements)
const ACTIVE_VERSIONS = [
  { id: 'v1', name: 'Alien Void 3D Space', framework: 'React 19 + Vite + Tailwind v4', tag: 'Spaceman Canvas' },
  { id: 'v2', name: 'Professional Red Hat Cloud Profile', framework: 'React 18 + Vite + Three.js', tag: 'RHCSA • Cloud Systems' },
  { id: 'v4', name: 'Cyborg Transformation', framework: 'React 18 + Vite + GSAP', tag: 'High-Res Cyborg' },
  { id: 'v5', name: 'Developer Room 2025', framework: 'React 19 + Vite + Tailwind v4', tag: 'Isometric Room' },
  { id: 'v6', name: 'Mechanical Keycaps & Arena', framework: 'Next.js 16 + React 19', tag: '3D Keyboard & Blog' },
  { id: 'v7', name: 'Island Island Flier', framework: 'React 18 + Vite + Three.js', tag: 'Sky Plane & Fox' },
];

const ACTIVE_IDS = ACTIVE_VERSIONS.map((v) => v.id);

// Health and versions API endpoint
app.get('/api/versions', (req, res) => {
  const versionsStatus = ACTIVE_VERSIONS.map((v) => {
    const vPath = path.join(portfoliosDir, v.id, 'index.html');
    return {
      ...v,
      available: fs.existsSync(vPath),
      path: `/portfolios/${v.id}/`,
    };
  });
  res.json({
    status: 'ok',
    total: versionsStatus.length,
    available: versionsStatus.filter((v) => v.available).length,
    versions: versionsStatus,
  });
});

// Basic rate limiting & duplicate prevention map
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

// Contact API route using Gmail SMTP / Nodemailer
app.post(['/api/send', '/portfolios/v6/api/send'], async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';
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
  const rawBody = req.body || {};
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

  // 5. Read SMTP configuration from environment
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT, 10) || 465;
  const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
  const smtpUser = process.env.SMTP_USER || 'ajaytandale8983@gmail.com';
  const rawPass = process.env.SMTP_PASS || '';
  const smtpPass = rawPass.trim().replace(/\s+/g, '');
  const contactTo = process.env.CONTACT_TO || 'work.ajaytandale@gmail.com';

  if (!smtpPass) {
    console.warn('[CONTACT API] SMTP_PASS not set in environment. Returning 503.');
    return res.status(503).json({
      success: false,
      unconfigured: true,
      error: 'Gmail SMTP service is pending local configuration (SMTP_PASS not set).',
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
});

// Explicit redirect for V3 requests (exclude broken V3 from active browsing)
app.use((req, res, next) => {
  if (req.path === '/portfolios/v3' || req.path.startsWith('/portfolios/v3/')) {
    return res.redirect(302, '/portfolios/v2/');
  }
  next();
});

// Referer-aware static resolver for un-prefixed asset paths (e.g. /models/*, /assets/*, /draco/*)
app.use((req, res, next) => {
  const reqPath = req.path;

  // If request is already prefixed with /portfolios/ or /api, proceed normally
  if (reqPath.startsWith('/portfolios/') || reqPath.startsWith('/api') || reqPath === '/' || reqPath === '/favicon.ico') {
    return next();
  }

  const referer = req.headers.referer || '';
  const match = referer.match(/\/portfolios\/(v[1-7])\//);

  if (match) {
    const versionId = match[1];
    // If referer is v3, ignore or map to v2
    const targetVersion = versionId === 'v3' ? 'v2' : versionId;
    const candidatePath = path.join(portfoliosDir, targetVersion, reqPath.replace(/^\//, ''));
    if (fs.existsSync(candidatePath) && fs.statSync(candidatePath).isFile()) {
      setCustomMimeTypes(res, candidatePath);
      return res.sendFile(candidatePath);
    }
  }

  // Fallback: search across all active version folders for the requested file
  for (const vId of ACTIVE_IDS) {
    const candidatePath = path.join(portfoliosDir, vId, reqPath.replace(/^\//, ''));
    if (fs.existsSync(candidatePath) && fs.statSync(candidatePath).isFile()) {
      setCustomMimeTypes(res, candidatePath);
      return res.sendFile(candidatePath);
    }
  }

  next();
});

// Serve static assets for each active portfolio version under /portfolios/vX/
for (const vId of ACTIVE_IDS) {
  const vPath = path.join(portfoliosDir, vId);

  app.use(`/portfolios/${vId}`, express.static(vPath, { ...staticOptions, index: 'index.html' }));

  // Client-side routing fallback for SPA routers (e.g. V7 React Router, V6 Next.js pages)
  app.get(new RegExp(`^/portfolios/${vId}/(.*)`), (req, res) => {
    // Check if a direct file exists first
    const subPath = req.params[0] || '';
    const filePath = path.join(vPath, subPath);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      setCustomMimeTypes(res, filePath);
      return res.sendFile(filePath);
    }
    // Check for V6 static page HTML (e.g. blogs.html, resume.html)
    const htmlPath = path.join(vPath, `${subPath}.html`);
    if (fs.existsSync(htmlPath)) {
      return res.sendFile(htmlPath);
    }
    // Fall back to index.html for client-side routing
    const indexPath = path.join(vPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      return res.sendFile(indexPath);
    }
    res.status(404).send(`Version ${vId.toUpperCase()} not found.`);
  });
}

// Serve public roulette shell files (index.html, roulette.js, roulette.css)
app.use(express.static(rootDir));
if (fs.existsSync(path.join(rootDir, 'dist'))) {
  app.use(express.static(path.join(rootDir, 'dist')));
}

// Fallback to Roulette Shell on root
app.use((req, res) => {
  res.sendFile(path.join(rootDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n=============================================================`);
  console.log(`AJAY TANDALE — UNIFIED PORTFOLIO ROULETTE RUNNING`);
  console.log(`URL: http://localhost:${PORT}`);
  console.log(`Active Portfolios (6): ${ACTIVE_IDS.map((id) => `/portfolios/${id}/`).join(', ')}`);
  console.log(`Roulette Host Shell: http://localhost:${PORT}/`);
  console.log(`=============================================================\n`);
});
