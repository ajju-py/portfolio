import puppeteer from 'puppeteer';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACT_DIR = 'C:\\Users\\Ajay\\.gemini\\antigravity\\brain\\ef023d68-fb56-4a9e-a2f2-28545f217419';

async function capture() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--enable-webgl',
      '--use-gl=angle',
      '--use-angle=gl',
      '--ignore-gpu-blocklist',
      '--force-prefers-reduced-motion=no-preference',
    ],
  });

  const page = await browser.newPage();

  // Set explicit motion-pref in localStorage
  await page.evaluateOnNewDocument(() => {
    localStorage.setItem('portfolio:motion-pref', 'on');
  });

  console.log('1. Capturing Desktop Homepage...');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3006', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 4000));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'preview_1_homepage_desktop.png') });

  console.log('2. Capturing 3D Keyboard Interaction / Tech Stack...');
  await page.evaluate(() => {
    const el = document.getElementById('skills');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise((r) => setTimeout(r, 3000));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'preview_2_keyboard_interaction.png') });

  console.log('3. Capturing Projects Section...');
  await page.evaluate(() => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise((r) => setTimeout(r, 3000));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'preview_3_projects_section.png') });

  console.log('4. Capturing Mobile Layout...');
  await page.setViewport({ width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3006', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 4000));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'preview_4_mobile_layout.png') });

  console.log('All screenshots captured successfully.');
  await browser.close();
}

capture().catch((err) => {
  console.error('Error during capture:', err);
  process.exit(1);
});
