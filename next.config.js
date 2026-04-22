/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverComponentsExternalPackages: [
      "whatsapp-web.js", 
      "puppeteer", 
      "@prisma/client",
      "prisma"
    ]
  },
};

module.exports = nextConfig;
