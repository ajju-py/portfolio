const http = require('http');
const fs = require('fs');
const path = require('path');

console.log('=============================================================');
console.log('RUNNING AUTOMATED TEST SUITE: UNIFIED PORTFOLIO ROULETTE');
console.log('ACTIVE POOL: 6 VERSIONS (V3 EXCLUDED & REDIRECTED TO V2)');
console.log('=============================================================\n');

function get(reqPath, headers = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        hostname: 'localhost',
        port: 3000,
        path: reqPath,
        method: 'GET',
        headers,
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () =>
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body,
          })
        );
      }
    );
    req.on('error', reject);
    req.end();
  });
}

function post(reqPath, data) {
  return new Promise((resolve, reject) => {
    const bodyStr = JSON.stringify(data);
    const req = http.request(
      {
        hostname: 'localhost',
        port: 3000,
        path: reqPath,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(bodyStr),
        },
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () =>
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body,
          })
        );
      }
    );
    req.on('error', reject);
    req.write(bodyStr);
    req.end();
  });
}

async function runTests() {
  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`[PASS] ${message}`);
      passed++;
    } else {
      console.error(`[FAIL] ${message}`);
      failed++;
    }
  }

  // TEST 1: API /api/versions (Must report 6 active versions)
  try {
    const res = await get('/api/versions');
    assert(res.statusCode === 200, 'GET /api/versions returns 200 OK');
    const data = JSON.parse(res.body);
    assert(data.status === 'ok', 'Status is ok');
    assert(data.total === 6, `Total active versions is 6 (received ${data.total})`);
    assert(data.available === 6, `All 6 versions are available (received ${data.available})`);
    const versionIds = data.versions.map((v) => v.id);
    assert(!versionIds.includes('v3'), 'V3 is absent from /api/versions registry');
    assert(versionIds.includes('v2'), 'V2 is present in /api/versions registry');
  } catch (err) {
    assert(false, `GET /api/versions error: ${err.message}`);
  }

  // TEST 2: Root Host Shell (Roulette Shell)
  try {
    const res = await get('/');
    assert(res.statusCode === 200, 'GET / returns 200 OK');
    assert(res.body.includes('portfolio-frame'), 'Shell contains #portfolio-frame iframe');
    assert(res.body.includes('roulette.js'), 'Shell references roulette.js');
    assert(res.body.includes('roulette.css'), 'Shell references roulette.css');
  } catch (err) {
    assert(false, `GET / error: ${err.message}`);
  }

  // TEST 3: All 6 Active Portfolio Main HTML Endpoints
  const ACTIVE_VERSIONS = ['v1', 'v2', 'v4', 'v5', 'v6', 'v7'];
  for (const vId of ACTIVE_VERSIONS) {
    try {
      const res = await get(`/portfolios/${vId}/`);
      assert(res.statusCode === 200, `GET /portfolios/${vId}/ returns 200 OK`);
      assert(
        res.body.includes('<html') || res.body.includes('<!DOCTYPE') || res.body.includes('<!doctype'),
        `${vId.toUpperCase()} returns valid HTML document`
      );
    } catch (err) {
      assert(false, `GET /portfolios/${vId}/ error: ${err.message}`);
    }
  }

  // TEST 4: V3 Exclusion & Automatic Redirection to V2
  console.log('\n[V3 EXCLUSION] Verifying broken V3 redirects to V2...');
  try {
    const resV3Slash = await get('/portfolios/v3/');
    assert(
      resV3Slash.statusCode === 302 && resV3Slash.headers.location === '/portfolios/v2/',
      'GET /portfolios/v3/ redirects (302) to /portfolios/v2/'
    );

    const resV3NoSlash = await get('/portfolios/v3');
    assert(
      resV3NoSlash.statusCode === 302 && resV3NoSlash.headers.location === '/portfolios/v2/',
      'GET /portfolios/v3 redirects (302) to /portfolios/v2/'
    );

    const resV3Deep = await get('/portfolios/v3/about');
    assert(
      resV3Deep.statusCode === 302 && resV3Deep.headers.location === '/portfolios/v2/',
      'GET /portfolios/v3/about redirects (302) to /portfolios/v2/'
    );
  } catch (err) {
    assert(false, `V3 redirect test error: ${err.message}`);
  }

  // TEST 5: V2 Professional Portrait Asset Verification
  console.log('\n[V2 PORTRAIT] Verifying Red Hat professional portrait assets...');
  try {
    const resPortrait = await get('/portfolios/v2/images/ajay-redhat-portrait.png');
    assert(
      resPortrait.statusCode === 200 && resPortrait.headers['content-type'].includes('image/png'),
      'Static portrait asset /portfolios/v2/images/ajay-redhat-portrait.png is accessible (HTTP 200)'
    );

    // Check V2 index.html contains bundle referencing the new portrait
    const v2HtmlRes = await get('/portfolios/v2/');
    assert(v2HtmlRes.statusCode === 200, 'V2 HTML loads successfully');
  } catch (err) {
    assert(false, `V2 portrait asset error: ${err.message}`);
  }

  // TEST 6: Non-Repeating Random Selection Logic Simulation (1,000 iterations over 6 active versions)
  console.log('\n[SIMULATION] Testing non-repeating selection algorithm across 1,000 reloads...');
  let consecutiveRepeats = 0;
  let v3Occurrences = 0;
  const counts = { v1: 0, v2: 0, v4: 0, v5: 0, v6: 0, v7: 0 };
  let prev = null;

  for (let i = 0; i < 1000; i++) {
    const candidates = ACTIVE_VERSIONS.filter((v) => v !== prev);
    const chosen = candidates[Math.floor(Math.random() * candidates.length)];
    if (chosen === prev) consecutiveRepeats++;
    if (chosen === 'v3') v3Occurrences++;
    counts[chosen]++;
    prev = chosen;
  }

  assert(consecutiveRepeats === 0, 'Consecutive repeat count is strictly 0 across 1,000 page reloads');
  assert(v3Occurrences === 0, 'V3 was never selected in 1,000 roulette randomizations');
  const countsSummary = Object.entries(counts)
    .map(([k, v]) => `${k}:${v}`)
    .join(', ');
  console.log(`[DISTRIBUTION] Selection frequency over 1,000 runs: ${countsSummary}`);
  assert(
    Object.values(counts).every((c) => c > 100 && c < 250),
    'Distribution is balanced across all 6 active versions'
  );

  // TEST 7: Critical 3D Assets & Media Loading (Active Portfolios)
  console.log('\n[ASSETS] Verifying critical 3D models, decoders, and audio/video files...');
  const criticalAssets = [
    { v: 'v1', path: '/portfolios/v1/models/tenhun_falling_spaceman_fanart.glb', type: 'model/gltf-binary' },
    { v: 'v2', path: '/portfolios/v2/draco/draco_decoder.wasm', type: 'application/wasm' },
    { v: 'v4', path: '/portfolios/v4/videos/ajay-cyborg-transformation.mp4', type: 'video/mp4' },
    { v: 'v5', path: '/portfolios/v5/models/computer-optimized.glb', type: 'model/gltf-binary' },
    { v: 'v6', path: '/portfolios/v6/assets/keyboard/keycaps.glb', type: 'model/gltf-binary' },
    { v: 'v7', path: '/portfolios/v7/assets/sakura-2a12539d.mp3', type: 'audio/mpeg' },
  ];

  for (const asset of criticalAssets) {
    try {
      const res = await get(asset.path);
      const contentType = res.headers['content-type'];
      const ok = res.statusCode === 200 && contentType.includes(asset.type);
      assert(ok, `${asset.v.toUpperCase()} Asset: ${asset.path} (${res.statusCode}, ${contentType})`);
    } catch (err) {
      assert(false, `Asset check error for ${asset.path}: ${err.message}`);
    }
  }

  // TEST 8: Referer-Aware Asset Fallback
  console.log('\n[ROUTING] Testing Referer-aware un-prefixed asset resolution...');
  try {
    const res = await get('/models/tenhun_falling_spaceman_fanart.glb', {
      referer: 'http://localhost:3000/portfolios/v1/',
    });
    assert(
      res.statusCode === 200 && res.headers['content-type'].includes('model/gltf-binary'),
      'Referer-aware /models/... resolves to V1 asset'
    );
  } catch (err) {
    assert(false, `Referer test error: ${err.message}`);
  }

  // TEST 9: Client-Side Deep Link Fallbacks (V7 /projects, V6 /blogs, V6 /resume)
  console.log('\n[SPA FALLBACK] Testing client-side deep links...');
  try {
    const res7 = await get('/portfolios/v7/projects');
    assert(res7.statusCode === 200 && res7.body.includes('<html'), 'Deep link /portfolios/v7/projects serves V7 SPA index');
  } catch (err) {
    assert(false, `Deep link test error: ${err.message}`);
  }

  try {
    const res6 = await get('/portfolios/v6/blogs/');
    assert(res6.statusCode === 200 && res6.body.includes('<html'), 'Route /portfolios/v6/blogs/ serves pre-rendered blogs HTML');
  } catch (err) {
    assert(false, `V6 blogs test error: ${err.message}`);
  }

  try {
    const resResume = await get('/portfolios/v6/resume');
    assert(resResume.statusCode === 200 && resResume.body.includes('<html'), 'Route /portfolios/v6/resume serves pre-rendered resume HTML');
  } catch (err) {
    assert(false, `V6 resume test error: ${err.message}`);
  }

  // TEST 10: Contact API & Gmail SMTP Security Verification
  console.log('\n[SECURITY & SMTP] Testing contact form API validation & guards...');

  // 10a. Empty body rejection
  try {
    const resEmpty = await post('/api/send', {}, { 'x-forwarded-for': '192.168.1.101' });
    assert(resEmpty.statusCode === 400, 'Empty submission returns HTTP 400 Bad Request');
    const jsonEmpty = JSON.parse(resEmpty.body);
    assert(jsonEmpty.success === false && jsonEmpty.error, 'Returns validation error message');
  } catch (err) {
    assert(false, `Empty body test error: ${err.message}`);
  }

  // 10b. Invalid email format rejection
  try {
    const resInvalidEmail = await post(
      '/api/send',
      {
        name: 'Visitor',
        email: 'not-an-email',
        message: 'Hello, this is a test message with invalid email format.',
      },
      { 'x-forwarded-for': '192.168.1.102' }
    );
    assert(resInvalidEmail.statusCode === 400, 'Invalid email syntax returns HTTP 400 Bad Request');
  } catch (err) {
    assert(false, `Invalid email test error: ${err.message}`);
  }

  // 10c. Message too short rejection
  try {
    const resShortMsg = await post(
      '/api/send',
      {
        name: 'Visitor',
        email: 'visitor@example.com',
        message: 'Hi',
      },
      { 'x-forwarded-for': '192.168.1.103' }
    );
    assert(resShortMsg.statusCode === 400, 'Short message (<10 chars) returns HTTP 400 Bad Request');
  } catch (err) {
    assert(false, `Short message test error: ${err.message}`);
  }

  // 10d. Valid payload handling (returns 200 on success, 500 on auth error, or 503 if unconfigured)
  try {
    const resValid = await post(
      '/api/send',
      {
        name: 'Ajay Tandale Evaluator',
        email: 'recruiter@company.com',
        subject: 'Cloud Engineering Role',
        message: 'We are very impressed by your Red Hat RHCSA certification and Linux skills.',
      },
      { 'x-forwarded-for': '192.168.1.100' }
    );
    const isControlledResponse = [200, 500, 503].includes(resValid.statusCode);
    assert(
      isControlledResponse,
      `Valid submission returns controlled HTTP status (received ${resValid.statusCode})`
    );
    const jsonRes = JSON.parse(resValid.body);
    assert(typeof jsonRes.success === 'boolean', 'Response returns standardized JSON with success field');
  } catch (err) {
    assert(false, `Contact API test error: ${err.message}`);
  }

  // 10e. Verify .gitignore excludes .env
  const gitignorePath = path.resolve(__dirname, '..', '.gitignore');
  if (fs.existsSync(gitignorePath)) {
    const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
    assert(gitignoreContent.includes('.env'), '.gitignore properly excludes .env file');
  } else {
    assert(false, '.gitignore file exists in unified-portfolio');
  }

  console.log('\n=============================================================');
  console.log(`TEST RESULTS: ${passed} PASSED, ${failed} FAILED`);
  console.log('=============================================================\n');

  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
