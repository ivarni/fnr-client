/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [{
          key: 'Clear-Site-Data',
          value: '"storage"'
        }]
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [{
          type: 'header',
          key: 'Service-Worker',
        }],
        destination: '/kill-sw.js',
        permanent: false,
      }
    ]
  }
}

module.exports = nextConfig
