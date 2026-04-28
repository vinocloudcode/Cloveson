/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // Disable in development
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  output: 'export', // Static export enabled
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = withPWA(nextConfig);