import { CATEGORIES } from "@/content/catalog";
import { LOCATIONS } from "@/content/locations";
import { getServicePage, serviceUrl } from "@/content/service-pages";

export type MenuLink = { href: string; label: string };
export type MenuCategory = {
  slug: string;
  label: string;
  short: string;
  lead: string;
  href: string;
  groups: { title: string; links: MenuLink[] }[];
};

/**
 * The mega menu, built on the server so the client header only receives
 * labels and links. Only services with a written page are linked.
 */
export function buildMenu(): MenuCategory[] {
  return CATEGORIES.map((c) => ({
    slug: c.slug,
    label: c.label,
    short: c.short,
    lead: c.lead,
    href: `/services/${c.slug}`,
    groups: c.groups
      .map((g) => ({
        title: g.title,
        links: g.items
          .map((it) => getServicePage(c.slug, it.slug))
          .filter((p) => p !== undefined)
          .map((p) => ({ href: serviceUrl(p), label: p.h1 })),
      }))
      .filter((g) => g.links.length > 0),
  }));
}

/** Country pages, shown as a row at the foot of the mega menu. */
export function buildCountries(): MenuLink[] {
  return LOCATIONS.map((l) => ({ href: `/locations/${l.slug}`, label: l.country }));
}
