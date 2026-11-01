import puppeteer from 'puppeteer';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_DIR = 'C:\\Users\\Ajay\\OneDrive\\Desktop\\Main-Portfolio\\public\\assets\\projects-screenshots';

const projectsData = [
  {
    folder: 'ansible-infra',
    title: 'Enterprise Linux Automation using Ansible',
    badge: 'Ansible · RHEL 9 · Podman · LVM',
    content: `
      <div class="terminal">
        <div class="line prompt"><span>$</span> ansible-playbook -i inventory.ini site.yml --diff</div>
        <div class="line section">PLAY [Configure Enterprise RHEL 9 Nodes] *************************************</div>
        <div class="line ok">TASK [selinux : Ensure SELinux policy is in enforcing mode] ******************</div>
        <div class="line ok-text">ok: [rhel-srv-01]</div>
        <div class="line change">TASK [storage : Allocate LVM logical volumes and persistent mounts] **********</div>
        <div class="line change-text">changed: [rhel-srv-01] => {"changed": true, "msg": "Logical volume lv_app created"}</div>
        <div class="line change">TASK [containers : Deploy rootless Podman Quadlet systemd service] ***********</div>
        <div class="line change-text">changed: [rhel-srv-01] => {"changed": true, "state": "started"}</div>
        <div class="line section">PLAY RECAP *******************************************************************</div>
        <div class="line summary"><span class="highlight">rhel-srv-01</span>: ok=18   changed=5   unreachable=0   failed=0   skipped=1</div>
      </div>
    `,
  },
  {
    folder: 'rhcsa',
    title: 'Linux Server Configuration & Automation (RHCSA Lab)',
    badge: 'RHCSA EX200 · systemd · SELinux · firewalld',
    content: `
      <div class="terminal">
        <div class="line prompt"><span>#</span> systemctl status firewalld httpd --no-pager</div>
        <div class="line ok-text">● firewalld.service - firewalld - dynamic firewall daemon (running)</div>
        <div class="line ok-text">● httpd.service - The Apache HTTP Server (running)</div>
        <div class="line prompt"><span>#</span> semanage fcontext -a -t httpd_sys_content_t "/srv/web(/.*)?" && restorecon -Rv /srv/web</div>
        <div class="line text">Relabeled /srv/web from default_t to httpd_sys_content_t</div>
        <div class="line prompt"><span>#</span> lsblk -f /dev/vdb</div>
        <div class="line code">NAME   FSTYPE FSVER UUID                                 MOUNTPOINT</div>
        <div class="line code">vdb</div>
        <div class="line code">└─vdb1 xfs         3c9e62b1-88f4-41d3-92b0-4df2330ea7c1 /secure-data</div>
      </div>
    `,
  },
  {
    folder: 'linuxops',
    title: 'LinuxOps – Linux Infrastructure Validation and Automation',
    badge: 'DevOps · Python · Shell · CI/CD Validation',
    content: `
      <div class="terminal">
        <div class="line prompt"><span>$</span> python3 -m linuxops.validator --target staging-cluster --strict</div>
        <div class="line section">Initiating Systems Validation Matrix v2.4 ...</div>
        <div class="line ok-text">[✓] Kernel Parameters & sysctl limits: PASS (fs.file-max = 2097152)</div>
        <div class="line ok-text">[✓] Network Interfaces & DNS Resolution: PASS (rtt min/avg/max = 0.4/0.7/1.1 ms)</div>
        <div class="line ok-text">[✓] Firewall Ports & Security Ingress: PASS (80, 443, 6443 verified)</div>
        <div class="line ok-text">[✓] Disk I/O & Storage Health: PASS (root: 24% used, 180GB available)</div>
        <div class="line summary">Validation Summary: <span class="highlight">100% Passed</span> | 0 Warnings | 0 Failures</div>
      </div>
    `,
  },
  {
    folder: 'floci',
    title: 'Floci – Local AWS Cloud Infrastructure Lab',
    badge: 'AWS Emulation · Terraform · Docker · IAM',
    content: `
      <div class="terminal">
        <div class="line prompt"><span>$</span> floci up --services s3,iam,cloudwatch,cloudfront</div>
        <div class="line ok-text">[INFO] Floci Cloud Emulation Engine v1.1.0 started on localhost:4566</div>
        <div class="line prompt"><span>$</span> terraform apply -auto-approve -var="local_mode=true"</div>
        <div class="line text">aws_s3_bucket.portfolio_origin: Creating... [local endpoint: 4566]</div>
        <div class="line text">aws_cloudfront_origin_access_control.oac: Creating...</div>
        <div class="line change-text">Apply complete! Resources: 7 added, 0 changed, 0 destroyed.</div>
        <div class="line summary">Outputs: edge_url = <span class="highlight">http://localhost:4566/dist-oac/index.html</span></div>
      </div>
    `,
  },
  {
    folder: 'energy-meter',
    title: 'Smart Energy Meter with Theft Detection using ESP32',
    badge: 'IoT · ESP32 · Embedded Systems · Real-time Telemetry',
    content: `
      <div class="terminal">
        <div class="line section">--- ESP32 Real-Time Energy Telemetry Node [FW v3.2] ---</div>
        <div class="line code">[00:04:12] Phase 1 Current (Inlet):   4.82 A | Voltage: 231.4 V</div>
        <div class="line code">[00:04:12] Phase 2 Current (Outlet):  4.81 A | Differential: 0.01 A</div>
        <div class="line ok-text">[STATUS] Normal Consumption Pattern: Line Balance OK.</div>
        <div class="line prompt">> Injecting Simulated Bypass Load (+2.4A on unmetered line)...</div>
        <div class="line error">[ALERT] Tamper Detected: Ingress/Egress Differential > 15% Threshold!</div>
        <div class="line summary">Telemetry Dispatched: MQTT -> Cloud Endpoint | Alert Code: <span class="highlight">THEFT_TRIG_01</span></div>
      </div>
    `,
  },
];

async function generate() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 2 });

  for (const item of projectsData) {
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
            padding: 36px 44px;
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
            background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
            pointer-events: none;
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 24px;
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
            background: rgba(59, 130, 246, 0.15);
            border: 1px solid rgba(59, 130, 246, 0.35);
            color: #60a5fa;
            font-size: 14px;
            font-weight: 600;
            padding: 6px 16px;
            border-radius: 9999px;
            letter-spacing: 0.05em;
          }
          .title {
            font-size: 28px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 20px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            letter-spacing: -0.02em;
          }
          .terminal {
            flex: 1;
            background: rgba(3, 7, 18, 0.85);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 12px;
            padding: 24px;
            font-size: 15px;
            line-height: 1.7;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            overflow: hidden;
          }
          .line { white-space: pre-wrap; }
          .prompt span { color: #38bdf8; font-weight: bold; margin-right: 8px; }
          .prompt { color: #f8fafc; font-weight: 600; }
          .section { color: #94a3b8; font-weight: 600; }
          .ok { color: #4ade80; }
          .ok-text { color: #22c55e; }
          .change { color: #fbbf24; }
          .change-text { color: #f59e0b; }
          .error { color: #f87171; font-weight: 700; }
          .summary { color: #e2e8f0; font-weight: bold; margin-top: 8px; border-top: 1px dashed rgba(255,255,255,0.15); padding-top: 10px; }
          .highlight { color: #38bdf8; text-decoration: underline; }
          .text { color: #cbd5e1; }
          .code { color: #94a3b8; }
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
            <div class="badge">${item.badge}</div>
          </div>
          <div class="title">${item.title}</div>
          ${item.content}
        </div>
      </body>
      </html>
    `;

    await page.setContent(html, { waitUntil: 'load' });
    const targetFile = path.join(BASE_DIR, item.folder, 'landing.png');
    await page.screenshot({ path: targetFile });
    console.log(`Generated preview for ${item.folder} -> ${targetFile}`);
  }

  await browser.close();
  console.log('All custom project mockups generated successfully!');
}

generate().catch(console.error);

