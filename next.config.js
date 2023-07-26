/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  compiler: {
    // 추가
    styledComponents: true, // 추가
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
