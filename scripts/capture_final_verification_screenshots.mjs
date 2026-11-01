import puppeteer from 'puppeteer';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACT_DIR = 'C:\\Users\\Ajay\\.gemini\\antigravity\\brain\\ef023d68-fb56-4a9e-a2f2-28545f217419';

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--force-prefers-reduced-motion=no-preference'],
  });

  // --- 1. DESKTOP DARK MODE ---
  const darkPage = await browser.newPage();
  await darkPage.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await darkPage.evaluateOnNewDocument(() => {
    localStorage.setItem('theme', 'dark');
    localStorage.setItem('portfolio:motion-pref', 'on');
  });

  console.log('Loading dark page...');
  await darkPage.goto('http://localhost:3006', { waitUntil: 'networkidle2', timeout: 35000 });
  await new Promise((r) => setTimeout(r, 3500));

  // 1. Hero Dark
  const path1 = path.join(ARTIFACT_DIR, 'final_1_hero_dark.png');
  await darkPage.screenshot({ path: path1 });
  console.log(`Captured 1: Hero Dark -> ${path1}`);

  // 3. Tech Stack / Skills Dark
  await darkPage.evaluate(() => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise((r) => setTimeout(r, 2500));
  const path3 = path.join(ARTIFACT_DIR, 'final_3_tech_stack_icons.png');
  await darkPage.screenshot({ path: path3 });
  console.log(`Captured 3: Tech Stack Icons -> ${path3}`);

  // 4. Projects Section Dark
  await darkPage.evaluate(() => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise((r) => setTimeout(r, 2500));
  const path4 = path.join(ARTIFACT_DIR, 'final_4_projects_thumbnails.png');
  await darkPage.screenshot({ path: path4 });
  console.log(`Captured 4: Projects Thumbnails -> ${path4}`);

  // 5. Certifications Section Dark
  await darkPage.evaluate(() => {
    document.getElementById('certifications')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise((r) => setTimeout(r, 2500));
  const path5 = path.join(ARTIFACT_DIR, 'final_5_certifications.png');
  await darkPage.screenshot({ path: path5 });
  console.log(`Captured 5: Certifications -> ${path5}`);

  await darkPage.close();

  // --- 2. DESKTOP LIGHT MODE ---
  const lightPage = await browser.newPage();
  await lightPage.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await lightPage.evaluateOnNewDocument(() => {
    localStorage.setItem('theme', 'light');
    localStorage.setItem('portfolio:motion-pref', 'on');
  });

  console.log('Loading light page...');
  await lightPage.goto('http://localhost:3006', { waitUntil: 'networkidle2', timeout: 35000 });
  await new Promise((r) => setTimeout(r, 3500));

  // 2. Hero Light
  const path2 = path.join(ARTIFACT_DIR, 'final_2_hero_light.png');
  await lightPage.screenshot({ path: path2 });
  console.log(`Captured 2: Hero Light -> ${path2}`);

  await lightPage.close();

  // --- 3. MOBILE HOMEPAGE ---
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await mobilePage.evaluateOnNewDocument(() => {
    localStorage.setItem('theme', 'dark');
    localStorage.setItem('portfolio:motion-pref', 'on');
  });

  console.log('Loading mobile page...');
  await mobilePage.goto('http://localhost:3006', { waitUntil: 'networkidle2', timeout: 35000 });
  await new Promise((r) => setTimeout(r, 3500));

  // 6. Mobile Homepage
  const path6 = path.join(ARTIFACT_DIR, 'final_6_mobile_homepage.png');
  await mobilePage.screenshot({ path: path6 });
  console.log(`Captured 6: Mobile Homepage -> ${path6}`);

  await mobilePage.close();
  await browser.close();
  console.log('All 6 final verification screenshots successfully captured!');
}

capture().catch(console.error);

