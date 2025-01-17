/** @type {import('next').NextConfig} */
const nextConfig = {
  // Core config
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',

  // Skip checks during build to prevent common errors
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig