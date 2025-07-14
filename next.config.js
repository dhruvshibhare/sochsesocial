/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Remove for Vercel
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/sochsesocial' : '', // Remove for Vercel
  trailingSlash: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;