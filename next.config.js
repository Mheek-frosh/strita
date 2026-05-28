/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com', 'images.pixabay.com', 'firebasestorage.googleapis.com'],
    unoptimized: false,
  },
  swcMinify: true,
};

module.exports = nextConfig;
