/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://backend:5000/api/:path*'
      },
      {
        source: '/socket.io/:path*',
        destination: 'http://backend:5000/socket.io/:path*'
      }
    ]
  }
}

module.exports = nextConfig
