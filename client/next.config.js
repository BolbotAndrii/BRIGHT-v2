/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ua', 'en', 'ru'],
    defaultLocale: 'ua',
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: 'http://localhost:5000/api/:slug*'
      },
    ]
  },

}

module.exports = nextConfig
