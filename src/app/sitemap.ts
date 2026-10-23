import type { MetadataRoute } from "next";

import { HIRE_PAGES } from "@/content/hire";
import { INDUSTRIES } from "@/content/industries";
import { INSIGHTS } from "@/content/insights";
import { PROJECTS } from "@/content/projects";
import { CATEGORIES } from "@/content/catalog";
import { CITIES, LOCATIONS } from "@/content/locations";
import { SERVICE_PAGES, serviceUrl } from "@/content/service-pages";
import { SITE } from "@/content/site";
import { alternatesFor, locationKeys, locationPath, serviceKeys } from "@/i18n/registry";
import { localePath, TRANSLATED } from "@/i18n/ui";

/**
 * Only real dates are given as lastModified (articles). Pages without a known
 * edit date leave it out, so search engines do not learn to ignore the field.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (path: string) => `${SITE.url}${path === "/" ? "" : path}`;
  /** Every URL lists its language versions, when it has any. */
  const page = (path: string): MetadataRoute.Sitemap[number] => {
    const alt = alternatesFor(path || "/");
    const langs = Object.fromEntries(Object.entries(alt).map(([k, v]) => [k, abs(v)]));
    return { url: abs(path || "/"), ...(Object.keys(alt).length > 2 ? { alternates: { languages: langs } } : {}) };
  };
  /** Translated pages, listed with the same alternates as their English page. */
  const translated = TRANSLATED.flatMap((loc) => [
    { ...page("/"), url: abs(localePath(loc, "/")) },
    ...locationKeys(loc).map((k) => ({ ...page(locationPath(k)), url: abs(localePath(loc, locationPath(k))) })),
    ...serviceKeys(loc).map((k) => ({ ...page(`/services/${k}`), url: abs(localePath(loc, `/services/${k}`)) })),
  ]);
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
    page("/cookies"),
    page("/terms"),
    page("/ai-instructions"),
    ...PROJECTS.map((p) => page(`/work/${p.slug}`)),
    ...CATEGORIES.map((c) => page(`/services/${c.slug}`)),
    page("/locations"),
    ...LOCATIONS.map((l) => ({ ...page(`/locations/${l.slug}`), lastModified: new Date(l.updated) })),
    ...CITIES.map((c) => ({ ...page(`/locations/${c.parent}/${c.slug}`), lastModified: new Date(c.updated) })),
    ...SERVICE_PAGES.map((s) => ({ ...page(serviceUrl(s)), lastModified: new Date(s.updated) })),
    page("/hire"),
    ...HIRE_PAGES.map((h) => ({ ...page(`/hire/${h.slug}`), lastModified: new Date(h.updated) })),
    ...INDUSTRIES.map((i) => page(`/industries/${i.slug}`)),
    ...INSIGHTS.map((a) => ({ ...page(`/insights/${a.slug}`), lastModified: new Date(a.date) })),
    ...translated,
  ];
}
