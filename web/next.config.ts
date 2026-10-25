import type { NextConfig } from "next";

/** Adresse publique de production. Les autres alias Vercel y redirigent. */
const PRODUCTION_HOST = "simulation42.vercel.app";
const SECONDARY_HOSTS = ["simulation-gamma-seven.vercel.app"];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/d/synthese", destination: "/synthese", permanent: true },
      ...SECONDARY_HOSTS.map((host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        destination: `https://${PRODUCTION_HOST}/:path*`,
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
