// Vercel Serverless Function: GET /api/versions
// Returns active portfolio versions registry (V3 excluded per requirements)

const ACTIVE_VERSIONS = [
  { id: 'v1', name: 'Alien Void 3D Space', framework: 'React 19 + Vite + Tailwind v4', tag: 'Spaceman Canvas', available: true, path: '/portfolios/v1/' },
  { id: 'v2', name: 'Professional Red Hat Cloud Profile', framework: 'React 18 + Vite + Three.js', tag: 'RHCSA • Cloud Systems', available: true, path: '/portfolios/v2/' },
  { id: 'v4', name: 'Cyborg Transformation', framework: 'React 18 + Vite + GSAP', tag: 'High-Res Cyborg', available: true, path: '/portfolios/v4/' },
  { id: 'v5', name: 'Developer Room 2025', framework: 'React 19 + Vite + Tailwind v4', tag: 'Isometric Room', available: true, path: '/portfolios/v5/' },
  { id: 'v6', name: 'Mechanical Keycaps & Arena', framework: 'Next.js 16 + React 19', tag: '3D Keyboard & Blog', available: true, path: '/portfolios/v6/' },
  { id: 'v7', name: 'Island Island Flier', framework: 'React 18 + Vite + Three.js', tag: 'Sky Plane & Fox', available: true, path: '/portfolios/v7/' },
];

module.exports = function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'public, max-age=60');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  res.status(200).json({
    status: 'ok',
    total: ACTIVE_VERSIONS.length,
    available: ACTIVE_VERSIONS.length,
    versions: ACTIVE_VERSIONS,
  });
};
