import type { Metadata } from "next";

import { SITE } from "@/content/site";

type PageMetaInput = {
  /** Page title. Gets " | Venlynk" from the root template unless `absolute` is set. */
  title: string;
  description: string;
  /** Path starting with "/". Used for the canonical, og:url and breadcrumbs. */
  path: string;
  /** Image path or URL for social previews. Defaults to the site Open Graph image. */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  /** Use the title as is, without the site template. */
  absolute?: boolean;
  publishedTime?: string;
};

const DEFAULT_IMAGE = "/opengraph-image";

/**
 * Builds page metadata with its own canonical, Open Graph and Twitter tags,
 * so no page inherits the homepage's social preview.
 */
export function pageMeta({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  absolute = false,
  publishedTime,
}: PageMetaInput): Metadata {
  const fullTitle = absolute ? title : `${title} | ${SITE.name}`;
  const images = [{ url: image ?? DEFAULT_IMAGE, alt: imageAlt ?? fullTitle }];
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: SITE.name,
      locale: "en_GB",
      url: path,
      title: fullTitle,
      description,
      images,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: images.map((i) => i.url),
    },
  };
}

/** Absolute URL on the production domain. */
export const absUrl = (path: string) => (path.startsWith("http") ? path : `${SITE.url}${path === "/" ? "" : path}`);

/** BreadcrumbList JSON-LD from (name, path) pairs, starting after Home. */
export function breadcrumbLd(trail: { name: string; path: string }[]) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absUrl(it.path),
    })),
  };
}

/** Serialises JSON-LD safely for a script tag. */
export const ldJson = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
