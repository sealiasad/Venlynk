import type { MetadataRoute } from "next";

import { INDUSTRIES } from "@/content/industries";
import { INSIGHTS } from "@/content/insights";
import { PROJECTS } from "@/content/projects";
import { SERVICES } from "@/content/services";
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
    ...PROJECTS.map((p) => page(`/work/${p.slug}`)),
    ...SERVICES.map((s) => page(`/services/${s.slug}`)),
    ...INDUSTRIES.map((i) => page(`/industries/${i.slug}`)),
    ...INSIGHTS.map((a) => ({ ...page(`/insights/${a.slug}`), lastModified: new Date(a.date) })),
  ];
}
