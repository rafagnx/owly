import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  serverExternalPackages: ["whatsapp-web.js", "puppeteer", "@prisma/client", "bcryptjs", "jsonwebtoken", "pg"],
};

export default nextConfig;
