/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    remotePatterns : [
      {
        protocol: 'https',
        hostname: '*.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.luxima.id',
        port: '',
        pathname: '/**',
      }
    ]
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
