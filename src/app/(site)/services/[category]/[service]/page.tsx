import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceView } from "@/components/site/service-view";
import { getCategory } from "@/content/catalog";
import { getServicePage, SERVICE_PAGES, serviceUrl } from "@/content/service-pages";
import { alternatesFor } from "@/i18n/registry";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ category: string; service: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_PAGES.map((p) => ({ category: p.category, service: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, service } = await params;
  const p = getServicePage(category, service);
  if (!p) return { title: "Not found" };
  return pageMeta({
    title: p.metaTitle,
    description: p.metaDescription,
    path: serviceUrl(p),
    image: p.image,
    imageAlt: p.imageAlt,
    languages: alternatesFor(serviceUrl(p)),
  });
}

export default async function ServicePage({ params }: Props) {
  const { category, service } = await params;
  const p = getServicePage(category, service);
  const c = getCategory(category);
  if (!p || !c) notFound();
  return <ServiceView p={p} c={c} />;
}
