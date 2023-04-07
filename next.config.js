/** @type {import('next').NextConfig} */
// require('dotenv').config();
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
  reactStrictMode: true,
}

module.exports = nextConfig
