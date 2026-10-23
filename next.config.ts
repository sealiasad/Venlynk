import { LEGACY_SERVICE_URL } from "./src/content/legacy-services";
import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/** Analytics hosts (GA4, Microsoft Clarity, LinkedIn Insight, Meta Pixel). Tags only load once configured. */
const analytics = {
  script: "https://www.googletagmanager.com https://www.clarity.ms https://*.clarity.ms https://snap.licdn.com https://connect.facebook.net",
  connect:
    "https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://*.clarity.ms https://c.bing.com https://px.ads.linkedin.com https://*.linkedin.com https://www.facebook.com https://connect.facebook.net https://www.google.com https://*.doubleclick.net",
  img: "https://*.google-analytics.com https://www.googletagmanager.com https://*.clarity.ms https://c.bing.com https://px.ads.linkedin.com https://*.linkedin.com https://www.facebook.com https://www.google.com https://*.doubleclick.net",
};

/**
 * Content Security Policy without nonces, so every page stays statically
 * rendered. Fonts are self-hosted by next/font; the only third parties are the
 * analytics hosts above and the Clutch widget, which load only when an ID is configured and allowed.
 * 'unsafe-inline' on scripts is needed for Next's inline bootstrap scripts;
 * moving to nonces would force dynamic rendering on every page.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} ${analytics.script} https://widget.clutch.co`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob: ${analytics.img}`,
  "font-src 'self' data:",
  `connect-src 'self' ${analytics.connect}`,
  "media-src 'self'",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  // Clutch rating widget in the footer renders in an iframe.
  "frame-src https://widget.clutch.co",
  "frame-ancestors 'none'",
  "manifest-src 'self'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

export const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), serial=(), bluetooth=(), hid=(), magnetometer=(), gyroscope=(), accelerometer=(), browsing-topics=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Don't advertise the framework in every response.
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Only local images are optimised; no remote hosts can be proxied (SSRF guard).
    remotePatterns: [],
    dangerouslyAllowSVG: false,
  },
  experimental: {
    serverActions: {
      // The contact form is the only server action; its text tops out well under this.
      bodySizeLimit: "64kb",
      allowedOrigins: ["venlynk.com", "www.venlynk.com", "venlynk.vercel.app"],
    },
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      { source: "/approach", destination: "/about", permanent: true },
      // Hire pages were dropped before launch; point any shared links at the matching services.
      { source: "/hire", destination: "/services", permanent: true },
      { source: "/hire/flutter-developers", destination: "/services/mobile-apps/flutter-app-development", permanent: true },
      { source: "/hire/react-native-developers", destination: "/services/mobile-apps/react-native-app-development", permanent: true },
      { source: "/hire/shopify-developers", destination: "/services/shopify/shopify-development", permanent: true },
      { source: "/hire/react-nextjs-developers", destination: "/services/websites/nextjs-development", permanent: true },
      { source: "/hire/:path*", destination: "/services", permanent: true },
      // One address per page: www.venlynk.com moves permanently to venlynk.com.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.venlynk.com" }],
        destination: "https://venlynk.com/:path*",
        permanent: true,
      },
      // Old one-level service pages now live under their category.
      ...Object.entries(LEGACY_SERVICE_URL)
        .filter(([slug]) => slug !== "growth")
        .map(([slug, destination]) => ({ source: `/services/${slug}`, destination, permanent: true })),
      { source: "/services/business-systems", destination: "/services/ai-agents/ai-agent-development", permanent: true },
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
