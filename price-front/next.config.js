const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NEXT_PUBLIC_MOCK !== "true"
    ? {
        async rewrites() {
          return [
            {
              source: "/api/:path*",
              destination: `${process.env.BACKEND_URL}/api/:path*`, // Proxy to Backend
            },
          ];
        },
      }
    : {}),

  images: {
    domains: ["c.dns-shop.ru"],
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
