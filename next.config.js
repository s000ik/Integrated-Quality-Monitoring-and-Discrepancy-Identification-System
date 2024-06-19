// next.config.js
module.exports = {
  // Other Next.js config options
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  distDir: 'build', // Optional: Custom build output directory
  experimental: {
    appDir: true, // Enable app directory if using it
  }
}
