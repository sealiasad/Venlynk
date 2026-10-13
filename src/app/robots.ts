import type { MetadataRoute } from "next";

import { SITE } from "@/content/site";

/**
 * Everything is crawlable. /company-profile stays out of search through its
 * own noindex tag, which crawlers can only read if the page is not blocked here.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
