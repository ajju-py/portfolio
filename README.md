# Ajay Tandale — Unified Portfolio Roulette

Welcome to the unified portfolio web application for **Ajay Tandale** ([ajaytandale.in](https://ajaytandale.in)).

This application aggregates 6 distinct, production-grade 3D and interactive portfolio variations into a single roulette experience with a non-repeating randomizer, developer switcher HUD, same-origin viewport mounting, and a centralized Gmail SMTP contact form backend.

---

## Active Portfolio Variants (6)

| Variant | Architecture | Key Visual / Technical Highlight | Route |
| :--- | :--- | :--- | :--- |
| **V1** | React 19 + Vite 6 + Tailwind CSS v4 | Falling Spaceman 3D Canvas, OrbitControls | `/portfolios/v1/` |
| **V2** | React 18 + Vite 5 + Three.js + GSAP | Red Hat Professional Cloud Profile, 3D Character Model, Draco Compression | `/portfolios/v2/` |
| **V4** | React 18 + Vite 5 + GSAP | High-Resolution Interactive Cyborg Transformation | `/portfolios/v4/` |
| **V5** | React 19 + Vite 6 + Tailwind CSS v4 | Isometric 3D Developer Room (2025 Edition) | `/portfolios/v5/` |
| **V6** | Next.js 16 + React 19 App Router | 3D Mechanical Keycaps, Blog & Engineering Arena | `/portfolios/v6/` |
| **V7** | React 18 + Vite 4 + React Router | Sky Island Flight Simulation, 3D Plane & Fox | `/portfolios/v7/` |

> **Note on V3:** Portfolio V3 has been permanently excluded from the roulette rotation and automatically redirects to **V2** via Edge rewrites and HTTP 302 redirects.

---

## Production Deployment & Architecture

- **Host:** Vercel Edge Network (`Server: Vercel`, Anycast CDN)
- **Domain:** `https://ajaytandale.in` / `https://www.ajaytandale.in`
- **Routing Engine:** `vercel.json` edge redirects, referer-aware asset rewrites, and SPA client routing
- **Serverless API:**
  - `POST /api/send` — Nodemailer Gmail SMTP transmission with input sanitization, RFC 5322 validation, and rate limiting
  - `GET /api/versions` — Health check and active version registry
- **Self-Hosting / Local Server:** `server.js` provides a complete standalone Express server for local development or container deployment.

---

## Environment Variables

For contact form functionality, configure the following encrypted environment variables in the hosting provider (or local `.env`):

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=ajaytandale8983@gmail.com
SMTP_PASS=<16-character-google-app-password>
CONTACT_TO=work.ajaytandale@gmail.com
```

---

## Local Development & Testing

```bash
# Install dependencies
npm install

# Start Express server locally
npm start
# -> Runs at http://localhost:3000

# Run automated roulette test suite
npm test
```
