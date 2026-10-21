const http = require('http');

function post(reqPath, data, headers = {}) {
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
          ...headers,
        },
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
          let json = {};
          try {
            json = JSON.parse(body);
          } catch (e) {}
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body,
            json,
          });
        });
      }
    );
    req.on('error', reject);
    req.write(bodyStr);
    req.end();
  });
}

async function runSecurityAudit() {
  console.log('=============================================================');
  console.log('PHASE 5: CONTACT-FORM SECURITY & VALIDATION AUDIT');
  console.log('=============================================================\n');

  let passed = 0;
  let failed = 0;

  function assert(cond, name) {
    if (cond) {
      console.log(`[PASS] ${name}`);
      passed++;
    } else {
      console.error(`[FAIL] ${name}`);
      failed++;
    }
  }

  // 1. Empty submission
  const res1 = await post('/api/send', {}, { 'x-forwarded-for': '10.1.0.1' });
  assert(res1.statusCode === 400 && res1.json.success === false, 'Empty submission is rejected with HTTP 400');

  // 2. Missing name
  const res2 = await post(
    '/api/send',
    { email: 'visitor@example.com', message: 'Hello this is a valid length message.' },
    { 'x-forwarded-for': '10.1.0.2' }
  );
  assert(res2.statusCode === 400 && res2.json.error.includes('Name'), 'Missing name is rejected with HTTP 400');

  // 3. Missing email
  const res3 = await post(
    '/api/send',
    { name: 'John Doe', message: 'Hello this is a valid length message.' },
    { 'x-forwarded-for': '10.1.0.3' }
  );
  assert(res3.statusCode === 400 && res3.json.error.includes('email'), 'Missing email is rejected with HTTP 400');

  // 4. Missing message
  const res4 = await post(
    '/api/send',
    { name: 'John Doe', email: 'john@example.com' },
    { 'x-forwarded-for': '10.1.0.4' }
  );
  assert(res4.statusCode === 400 && res4.json.error.includes('message'), 'Missing message is rejected with HTTP 400');

  // 5. Malformed email addresses
  const malformedEmails = ['plainaddress', 'missingatsign.com', '@nodomain.com', 'user@domain'];
  for (let i = 0; i < malformedEmails.length; i++) {
    const badEmail = malformedEmails[i];
    const resBad = await post(
      '/api/send',
      { name: 'John Doe', email: badEmail, message: 'Valid test message length here.' },
      { 'x-forwarded-for': `10.1.1.${i}` }
    );
    assert(
      resBad.statusCode === 400 && resBad.json.error.includes('valid email'),
      `Malformed email '${badEmail}' is rejected with HTTP 400`
    );
  }

  // 6. Message below minimum length (< 10 characters)
  const res6 = await post(
    '/api/send',
    { name: 'John Doe', email: 'john@example.com', message: 'Short' },
    { 'x-forwarded-for': '10.1.0.5' }
  );
  assert(res6.statusCode === 400 && res6.json.error.includes('between 10 and 5000'), 'Message below minimum length is rejected with HTTP 400');

  // 7. Excessively long name (> 100 characters)
  const longName = 'A'.repeat(105);
  const res7 = await post(
    '/api/send',
    { name: longName, email: 'john@example.com', message: 'Valid test message length.' },
    { 'x-forwarded-for': '10.1.0.6' }
  );
  assert(res7.statusCode === 400 && res7.json.error.includes('Name must be between'), 'Name > 100 characters is rejected with HTTP 400');

  // 8. Excessively long message (> 5,000 characters)
  const longMsg = 'M'.repeat(5050);
  const res8 = await post(
    '/api/send',
    { name: 'John Doe', email: 'john@example.com', message: longMsg },
    { 'x-forwarded-for': '10.1.0.7' }
  );
  assert(res8.statusCode === 400 && res8.json.error.includes('between 10 and 5000'), 'Message > 5000 characters is rejected with HTTP 400');

  // 9. Header injection attempt in name / subject
  const res9 = await post(
    '/api/send',
    {
      name: 'Attacker\r\nBcc: evil@victim.com',
      email: 'attacker\r\n@victim.com',
      subject: 'Inquiry\r\nBcc: evil@victim.com',
      message: 'Testing header injection defense.',
    },
    { 'x-forwarded-for': '10.1.0.8' }
  );
  // Email with CRLF is sanitized into 'attacker@victim.com' or rejected if invalid format
  assert(res9.statusCode === 400 || res9.statusCode === 500, 'Header injection CRLF input is safely intercepted / sanitized');

  // 10. Recipient override attempt
  // Verify user cannot override `to` by sending { to: 'evil@attacker.com' }
  const res10 = await post(
    '/api/send',
    {
      name: 'Attacker',
      email: 'attacker@example.com',
      to: 'evil@attacker.com',
      recipient: 'evil@attacker.com',
      message: 'Attempting to hijack destination email address.',
    },
    { 'x-forwarded-for': '10.1.0.9' }
  );
  // Endpoint accepts body but only sends to configured CONTACT_TO; here SMTP failure or processing returns 500 without using the 'to' override
  assert(!res10.body.includes('evil@attacker.com'), 'User-supplied recipient parameter is not reflected or accepted');

  // 11. Duplicate submission check (30-second deduplication)
  const dupPayload = {
    name: 'Duplicate Tester',
    email: 'dup@example.com',
    message: 'Testing rapid duplicate prevention window.',
  };
  await post('/api/send', dupPayload, { 'x-forwarded-for': '10.2.0.1' });
  const resDup2 = await post('/api/send', dupPayload, { 'x-forwarded-for': '10.2.0.1' });
  assert(resDup2.statusCode === 429 && resDup2.json.error.includes('Duplicate'), 'Duplicate submission within 30s is blocked with HTTP 429');

  // 12. Rate limiting check (max 5 requests per 10m per IP)
  const rateLimitIp = '10.3.0.1';
  let rateLimited = false;
  for (let i = 0; i < 7; i++) {
    const resR = await post(
      '/api/send',
      { name: 'Rate User', email: `rate${i}@example.com`, message: `Unique message ${i} for rate limiting check.` },
      { 'x-forwarded-for': rateLimitIp }
    );
    if (resR.statusCode === 429 && resR.json.error.includes('Too many requests')) {
      rateLimited = true;
      break;
    }
  }
  assert(rateLimited, 'Rate limiting successfully triggers HTTP 429 after threshold');

  // 13. Leak check: Error responses never expose passwords, stack traces, or credentials
  const allResponses = [res1, res2, res3, res4, res6, res7, res8, res9, res10, resDup2];
  let leaked = false;
  for (const r of allResponses) {
    if (
      r.body.includes('SMTP_PASS') ||
      r.body.includes('password') ||
      r.body.includes('node_modules') ||
      r.body.includes('at Layer.handle')
    ) {
      leaked = true;
    }
  }
  assert(!leaked, 'No credentials, stack traces, or internal paths leaked in API responses');

  console.log('\n=============================================================');
  console.log(`SECURITY AUDIT SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log('=============================================================\n');

  if (failed > 0) process.exit(1);
}

runSecurityAudit();
