/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    largePageDataBytes: 128 * 100000000,
  },
};
module.exports = {
  i18n: {
    locales: ["hy", "en", "ru"],
    defaultLocale: "hy",
    localeDetection: false,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/hy",
        locale: false,
        permanent: true,
      },
    ];
  },
};
