/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['flowbite.com'] },

  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },

  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['default', 'en-US', 'fr', 'nl-NL', 'nl-BE'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'default',
    localeDetection: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
