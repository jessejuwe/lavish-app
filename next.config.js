/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['flowbite.com', 'localhost'] },
};

module.exports = nextConfig;
