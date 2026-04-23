/** @type {import('next').NextConfig} */
// BACKEND_URL is read at server-process startup. Defaults to the local dev
// backend so `npm run dev` keeps working untouched. On Render set it to
// the public URL of the FastAPI service (e.g. https://mochi-backend.onrender.com).
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:4000';

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${BACKEND_URL}/api/:path*`,
      },
    ];
  },
  experimental: {
    // 30 min: OCR of dozens of pages plus a session-schema LLM call
    // routinely exceeds 10 min. Next.js proxy returns 502 on timeout.
    proxyTimeout: 1_800_000,
  },
};
module.exports = nextConfig;
