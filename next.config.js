/** @type {import("next").NextConfig} */
module.exports = {
  i18n:{
    defaultLocale: 'en',
    locales: ['fr', 'en', 'nl']
  },
  basePath: '/home',
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}
