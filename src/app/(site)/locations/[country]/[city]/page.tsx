import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LocationView } from "@/components/site/location-view";
import { CITIES, getCity, getLocation } from "@/content/locations";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ country: string; city: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES.map((c) => ({ country: c.parent!, city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, city } = await params;
  const c = getCity(country, city);
  if (!c) return { title: "Not found" };
  return pageMeta({ title: c.metaTitle, description: c.metaDescription, path: `/locations/${country}/${c.slug}` });
}

export default async function CityPage({ params }: Props) {
  const { country, city } = await params;
  const c = getCity(country, city);
  const parent = getLocation(country);
  if (!c || !parent) notFound();
  return <LocationView l={c} parent={parent} />;
}
