import type { CategorySlug } from "@/content/catalog";
import { getCity, getLocation, type LocationPage } from "@/content/locations";
import { getServicePage, serviceUrl, type ServicePage } from "@/content/service-pages";
import { AR } from "@/i18n/content/ar";
import { TR } from "@/i18n/content/tr";
import { localePath, type Locale } from "@/i18n/ui";

/** Translated text for a country or city page. Structure (map, services, proof) comes from the English page. */
export type LocationText = Pick<
  LocationPage,
  "country" | "inText" | "metaTitle" | "metaDescription" | "h1" | "lead" | "market" | "needs" | "working" | "faq" | "closing"
> &
  Partial<Pick<LocationPage, "stats" | "payments" | "rules" | "proofNote" | "proofTitle">> & {
    /** Short name used on the map and clocks, e.g. "الإمارات". */
    label: string;
  };

/** Translated text for a service page. */
export type ServiceText = Pick<
  ServicePage,
  "metaTitle" | "metaDescription" | "h1" | "lead" | "forWho" | "problems" | "deliverables" | "steps" | "timing" | "price" | "notFit" | "faq" | "closing"
> &
  Partial<Pick<ServicePage, "facts" | "imageAlt">> & { proofStory?: string };

export type Landing = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  servicesTitle: string;
  servicesText: string;
  marketsTitle: string;
  marketsText: string;
  why: { title: string; body: string }[];
  whyTitle: string;
  englishNote: string;
  englishLink: string;
  closing: string;
};

export type LocaleContent = {
  /** Keyed by "uae" for countries or "uae/dubai" for cities. */
  locations: Record<string, LocationText>;
  /** Keyed by "category/slug". */
  services: Record<string, ServiceText>;
  categories: Record<CategorySlug, string>;
  landing: Landing;
};

const CONTENT: Record<Exclude<Locale, "en">, LocaleContent> = { ar: AR, tr: TR };

export const content = (locale: Exclude<Locale, "en">) => CONTENT[locale];

/* ---------------------------------------------------------------- locations */

export function localizedLocation(locale: Locale, key: string): LocationPage | undefined {
  const [country, city] = key.split("/");
  const base = city ? getCity(country, city) : getLocation(country);
  if (!base) return undefined;
  if (locale === "en") return base;
  const tx = CONTENT[locale].locations[key];
  if (!tx) return undefined;
  const { label, ...text } = tx;
  return { ...base, ...text, pin: { ...base.pin, name: label } };
}

export const hasLocation = (locale: Locale, key: string) => locale === "en" || Boolean(CONTENT[locale].locations[key]);

export const locationKeys = (locale: Exclude<Locale, "en">) => Object.keys(CONTENT[locale].locations);

export const locationPath = (key: string) => {
  const [country, city] = key.split("/");
  return city ? `/locations/${country}/${city}` : `/locations/${country}`;
};

/** Best link to a location for a reader in this locale: translated if it exists, otherwise English. */
export const locationHref = (locale: Locale, key: string) =>
  hasLocation(locale, key) ? localePath(locale, locationPath(key)) : locationPath(key);

/* ----------------------------------------------------------------- services */

export function localizedService(locale: Locale, category: string, slug: string): ServicePage | undefined {
  const base = getServicePage(category, slug);
  if (!base) return undefined;
  if (locale === "en") return base;
  const tx = CONTENT[locale].services[`${category}/${slug}`];
  if (!tx) return undefined;
  const { proofStory, ...text } = tx;
  return {
    ...base,
    ...text,
    proof: base.proof ? { ...base.proof, story: proofStory ?? base.proof.story } : undefined,
    facts: tx.facts ?? undefined,
  };
}

export const hasService = (locale: Locale, ref: string) => locale === "en" || Boolean(CONTENT[locale].services[ref]);

export const serviceKeys = (locale: Exclude<Locale, "en">) => Object.keys(CONTENT[locale].services);

export function serviceHref(locale: Locale, p: ServicePage) {
  return hasService(locale, `${p.category}/${p.slug}`) ? localePath(locale, serviceUrl(p)) : serviceUrl(p);
}

export const categoryLabel = (locale: Locale, slug: CategorySlug, fallback: string) =>
  locale === "en" ? fallback : (CONTENT[locale].categories[slug] ?? fallback);

/* ------------------------------------------------------------------ hreflang */

/** Language alternates for an English path, including only languages that really exist. */
export function alternatesFor(enPath: string): Record<string, string> {
  const out: Record<string, string> = { en: enPath };
  const loc = enPath.match(/^\/locations\/([^/]+)(?:\/([^/]+))?$/);
  const svc = enPath.match(/^\/services\/([^/]+)\/([^/]+)$/);
  for (const l of ["ar", "tr"] as const) {
    const ok =
      enPath === "/"
        ? true
        : loc
          ? Boolean(CONTENT[l].locations[loc[2] ? `${loc[1]}/${loc[2]}` : loc[1]])
          : svc
            ? Boolean(CONTENT[l].services[`${svc[1]}/${svc[2]}`])
            : false;
    if (ok) out[l] = localePath(l, enPath);
  }
  out["x-default"] = enPath;
  return out;
}
