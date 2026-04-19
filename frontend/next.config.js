/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/api/:path*',
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
