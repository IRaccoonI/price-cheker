/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NEXT_PUBLIC_MOCK !== "true"
    ? {
        async rewrites() {
          return [
            {
              source: "/api/:path*",
              destination: "http://localhost:8000/:path*", // Proxy to Backend
            },
          ];
        },
      }
    : {}),
};

module.exports = nextConfig;
