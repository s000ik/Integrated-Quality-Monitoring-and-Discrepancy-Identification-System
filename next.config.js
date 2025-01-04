/** @type {import('next').NextConfig} */
const nextConfig = {
  // Core config
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  distDir: 'build',
  
  // Production optimizations
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  optimizeFonts: true,
  swcMinify: true,

  // Skip checks during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig