/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    largePageDataBytes: 128 * 100000000,
  },
};
module.exports = {
  images: {
    domains: ["https://meetup-sandy-ten.vercel.app/"],
  },
},
module.exports = {
  i18n: {
    locales: ["hy", "en", "ru"],
    defaultLocale: "hy",
    localeDetection: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
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
