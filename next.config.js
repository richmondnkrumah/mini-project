/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      'puppeteer-extra', 
      'puppeteer-extra-plugin-stealth',
    ],
  },
};

module.exports = nextConfig;
