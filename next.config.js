/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    remotePatterns : [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
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
