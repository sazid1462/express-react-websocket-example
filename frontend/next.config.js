const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5001';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${NEXT_PUBLIC_BACKEND_URL}/api/:path*`
      },
      {
        source: '/socket.io/:path*',
        destination: `${NEXT_PUBLIC_BACKEND_URL}/socket.io/:path*`
      }
    ]
  }
}

module.exports = nextConfig
