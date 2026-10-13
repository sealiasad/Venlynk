import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
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
  async redirects() {
    return [
      { source: "/approach", destination: "/about", permanent: true },
      { source: "/services/ecommerce", destination: "/services/online-stores", permanent: true },
      { source: "/services/business-systems", destination: "/services/ai", permanent: true },
      { source: "/work/:slug(platform|commerce|product|systems|mobile|mobility-apps|hello-my-ticket|global-rescue|helpjuice|grid-global-rescue)", destination: "/work", permanent: true },
      {
        source: "/insights/:slug(clarity-before-craft|systems-that-scale|conversion-with-character)",
        destination: "/insights",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
