import type { MetadataRoute } from "next";

import { INDUSTRIES } from "@/content/industries";
import { INSIGHTS } from "@/content/insights";
import { PROJECTS } from "@/content/projects";
import { CATEGORIES } from "@/content/catalog";
import { LOCATIONS } from "@/content/locations";
import { SERVICE_PAGES, serviceUrl } from "@/content/service-pages";
import { SITE } from "@/content/site";

/**
 * Only real dates are given as lastModified (articles). Pages without a known
 * edit date leave it out, so search engines do not learn to ignore the field.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string): MetadataRoute.Sitemap[number] => ({ url: `${SITE.url}${path}` });
  const latestArticle = INSIGHTS.map((a) => a.date).sort().at(-1);
  return [
    page(""),
    page("/work"),
    page("/services"),
    page("/industries"),
    page("/about"),
    { ...page("/insights"), ...(latestArticle ? { lastModified: new Date(latestArticle) } : {}) },
    page("/contact"),
    page("/privacy"),
    ...PROJECTS.map((p) => page(`/work/${p.slug}`)),
    ...CATEGORIES.map((c) => page(`/services/${c.slug}`)),
    page("/locations"),
    ...LOCATIONS.map((l) => ({ ...page(`/locations/${l.slug}`), lastModified: new Date(l.updated) })),
    ...SERVICE_PAGES.map((s) => ({ ...page(serviceUrl(s)), lastModified: new Date(s.updated) })),
    ...INDUSTRIES.map((i) => page(`/industries/${i.slug}`)),
    ...INSIGHTS.map((a) => ({ ...page(`/insights/${a.slug}`), lastModified: new Date(a.date) })),
  ];
}
