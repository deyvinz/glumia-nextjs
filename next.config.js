/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',
  
  experimental: {
    optimizePackageImports: ['@heroui/react'],
  },
  outputFileTracingRoot: __dirname,
  
  // Optimize images
  images: {
    unoptimized: true, // For static export compatibility
  },
}

module.exports = nextConfig
