import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LocaleLanding } from "@/components/site/locale-landing";
import { LocationView } from "@/components/site/location-view";
import { ServiceView } from "@/components/site/service-view";
import { getCategory } from "@/content/catalog";
import { serviceUrl } from "@/content/service-pages";
import { alternatesFor, content, localizedLocation, localizedService, locationKeys, locationPath, serviceKeys } from "@/i18n/registry";
import { LOCALE_META, localePath, type Locale } from "@/i18n/ui";
import { pageMeta } from "@/lib/seo";

/** Shared route handlers for the translated sections (/ar, /tr). Each route file passes its locale. */

type L = Exclude<Locale, "en">;

/* Landing */
export const landingMeta = (locale: L): Metadata => {
  const c = content(locale).landing;
  return pageMeta({
    title: c.metaTitle,
    description: c.metaDescription,
    path: localePath(locale, "/"),
    absolute: true,
    languages: alternatesFor("/"),
    ogLocale: LOCALE_META[locale].og,
  });
};
export const Landing = ({ locale }: { locale: L }) => <LocaleLanding locale={locale} />;

/* Countries */
export const countryParams = (locale: L) => locationKeys(locale).filter((k) => !k.includes("/")).map((country) => ({ country }));

export function countryMeta(locale: L, country: string): Metadata {
  const l = localizedLocation(locale, country);
  if (!l) return { title: "Not found" };
  const en = locationPath(country);
  return pageMeta({ title: l.metaTitle, description: l.metaDescription, path: localePath(locale, en), languages: alternatesFor(en), ogLocale: LOCALE_META[locale].og });
}

export function CountryPage({ locale, country }: { locale: L; country: string }) {
  const l = localizedLocation(locale, country);
  if (!l) notFound();
  return <LocationView l={l} locale={locale} />;
}

/* Cities */
export const cityParams = (locale: L) =>
  locationKeys(locale)
    .filter((k) => k.includes("/"))
    .map((k) => {
      const [country, city] = k.split("/");
      return { country, city };
    });

export function cityMeta(locale: L, country: string, city: string): Metadata {
  const key = `${country}/${city}`;
  const l = localizedLocation(locale, key);
  if (!l) return { title: "Not found" };
  const en = locationPath(key);
  return pageMeta({ title: l.metaTitle, description: l.metaDescription, path: localePath(locale, en), languages: alternatesFor(en), ogLocale: LOCALE_META[locale].og });
}

export function CityPage({ locale, country, city }: { locale: L; country: string; city: string }) {
  const l = localizedLocation(locale, `${country}/${city}`);
  const parent = localizedLocation(locale, country) ?? localizedLocation("en", country);
  if (!l || !parent) notFound();
  return <LocationView l={l} parent={parent} locale={locale} />;
}

/* Services */
export const serviceParams = (locale: L) =>
  serviceKeys(locale).map((k) => {
    const [category, service] = k.split("/");
    return { category, service };
  });

export function serviceMeta(locale: L, category: string, service: string): Metadata {
  const p = localizedService(locale, category, service);
  if (!p) return { title: "Not found" };
  const en = serviceUrl(p);
  return pageMeta({
    title: p.metaTitle,
    description: p.metaDescription,
    path: localePath(locale, en),
    image: p.image,
    imageAlt: p.imageAlt,
    languages: alternatesFor(en),
    ogLocale: LOCALE_META[locale].og,
  });
}

export function ServicePageFor({ locale, category, service }: { locale: L; category: string; service: string }) {
  const p = localizedService(locale, category, service);
  const c = getCategory(category);
  if (!p || !c) notFound();
  return <ServiceView p={p} c={c} locale={locale} />;
}
