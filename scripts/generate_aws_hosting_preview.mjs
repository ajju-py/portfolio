import puppeteer from 'puppeteer';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TARGET_FILE = 'C:\\Users\\Ajay\\OneDrive\\Desktop\\Main-Portfolio\\public\\assets\\projects-screenshots\\aws-hosting\\landing.png';

async function generate() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 2 });

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
        body {
          width: 1200px;
          height: 800px;
          background: linear-gradient(135deg, #090d16 0%, #030712 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          color: #f3f4f6;
        }
        .card {
          width: 100%;
          height: 100%;
          background: rgba(17, 24, 39, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          padding: 32px 40px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
          position: relative;
          overflow: hidden;
        }
        .card::before {
          content: "";
          position: absolute;
          top: -120px;
          right: -120px;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(255, 153, 0, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .dots {
          display: flex;
          gap: 8px;
        }
        .dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
        }
        .dot.red { background: #ef4444; }
        .dot.yellow { background: #eab308; }
        .dot.green { background: #22c55e; }
        .badge {
          background: rgba(255, 153, 0, 0.15);
          border: 1px solid rgba(255, 153, 0, 0.35);
          color: #ff9900;
          font-size: 13px;
          font-weight: 600;
          padding: 5px 14px;
          border-radius: 9999px;
          letter-spacing: 0.05em;
        }
        .title {
          font-size: 26px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          letter-spacing: -0.02em;
        }
        /* Architecture Diagram Flow */
        .architecture-diagram {
          background: rgba(15, 23, 42, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px 20px;
          margin-bottom: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .diagram-title {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #94a3b8;
          font-weight: 700;
        }
        .nodes-flow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .arch-node {
          background: rgba(30, 41, 59, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 10px 14px;
          text-align: center;
          flex: 1;
        }
        .arch-node.highlight-node {
          border-color: rgba(255, 153, 0, 0.5);
          background: rgba(255, 153, 0, 0.08);
        }
        .arch-node.security-node {
          border-color: rgba(56, 189, 248, 0.5);
          background: rgba(56, 189, 248, 0.08);
        }
        .node-icon {
          font-size: 18px;
          margin-bottom: 4px;
        }
        .node-name {
          font-size: 13px;
          font-weight: 700;
          color: #f8fafc;
        }
        .node-desc {
          font-size: 10px;
          color: #94a3b8;
          margin-top: 2px;
        }
        .arrow-connector {
          color: #64748b;
          font-size: 16px;
          font-weight: bold;
        }
        /* Terminal */
        .terminal {
          flex: 1;
          background: rgba(3, 7, 18, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 18px 22px;
          font-size: 13.5px;
          line-height: 1.6;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          overflow: hidden;
        }
        .line { white-space: pre-wrap; }
        .prompt span { color: #ff9900; font-weight: bold; margin-right: 8px; }
        .prompt { color: #f8fafc; font-weight: 600; }
        .section { color: #94a3b8; font-weight: 600; }
        .ok { color: #4ade80; }
        .ok-text { color: #22c55e; }
        .change { color: #fbbf24; }
        .change-text { color: #f59e0b; }
        .summary { color: #e2e8f0; font-weight: bold; margin-top: 4px; border-top: 1px dashed rgba(255,255,255,0.15); padding-top: 8px; }
        .highlight { color: #38bdf8; text-decoration: underline; }
        .text { color: #cbd5e1; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <div class="dots">
            <div class="dot red"></div>
            <div class="dot yellow"></div>
            <div class="dot green"></div>
          </div>
          <div class="badge">AWS Cloud · Terraform IaC · CloudFront · S3 · OAC</div>
        </div>
        <div class="title">AWS Secure Static Website Hosting using Terraform</div>

        <!-- Visual Architecture -->
        <div class="architecture-diagram">
          <div class="diagram-title">Cloud Architecture Flow & Origin Security Boundary</div>
          <div class="nodes-flow">
            <div class="arch-node">
              <div class="node-icon">🌐</div>
              <div class="node-name">Global Users</div>
              <div class="node-desc">HTTPS / Port 443</div>
            </div>
            <div class="arrow-connector">➔</div>
            <div class="arch-node highlight-node">
              <div class="node-icon">⚡</div>
              <div class="node-name">CloudFront CDN</div>
              <div class="node-desc">TLS 1.3 · Edge Cache</div>
            </div>
            <div class="arrow-connector">➔</div>
            <div class="arch-node security-node">
              <div class="node-icon">🛡️</div>
              <div class="node-name">Origin Access Control</div>
              <div class="node-desc">SigV4 Request Signing</div>
            </div>
            <div class="arrow-connector">➔</div>
            <div class="arch-node highlight-node">
              <div class="node-icon">🪣</div>
              <div class="node-name">Amazon S3 Bucket</div>
              <div class="node-desc">Private · SSE-KMS Encrypted</div>
            </div>
            <div class="arrow-connector">➔</div>
            <div class="arch-node">
              <div class="node-icon">📊</div>
              <div class="node-name">CloudWatch</div>
              <div class="node-desc">Alarms & Edge Metrics</div>
            </div>
          </div>
        </div>

        <!-- Terminal Output -->
        <div class="terminal">
          <div class="line prompt"><span>$</span> terraform init && terraform apply -auto-approve</div>
          <div class="line section">Initializing HashiCorp Terraform AWS Provider v5.40 ...</div>
          <div class="line text">aws_s3_bucket.origin: Creating... [BlockPublicAccess: True, SSE-KMS]</div>
          <div class="line change-text">aws_s3_bucket_policy.oac_policy: Creating... [Principle: cloudfront.amazonaws.com]</div>
          <div class="line ok-text">aws_cloudfront_origin_access_control.oac: Creation complete after 2s</div>
          <div class="line text">aws_cloudfront_distribution.cdn: Creating... [TLSv1.3, IPv6, Custom Error Responses]</div>
          <div class="line ok-text">aws_cloudfront_distribution.cdn: Creation complete after 1m 12s</div>
          <div class="line change">Apply complete! Resources: 7 added, 0 changed, 0 destroyed.</div>
          <div class="line summary">Outputs: edge_cdn = <span class="highlight">https://d2w7f8g4k1s0.cloudfront.net</span> | origin_arn = arn:aws:s3:::secure-origin-prod</div>
        </div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(html, { waitUntil: 'load' });
  await page.screenshot({ path: TARGET_FILE });
  console.log(`Generated AWS Hosting preview -> ${TARGET_FILE}`);

  await browser.close();
}

generate().catch(console.error);

