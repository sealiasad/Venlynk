import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LocationView } from "@/components/site/location-view";
import { getLocation, LOCATIONS } from "@/content/locations";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ country: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ country: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const l = getLocation(country);
  if (!l) return { title: "Not found" };
  return pageMeta({ title: l.metaTitle, description: l.metaDescription, path: `/locations/${l.slug}` });
}

export default async function CountryPage({ params }: Props) {
  const { country } = await params;
  const l = getLocation(country);
  if (!l) notFound();
  return <LocationView l={l} />;
}
