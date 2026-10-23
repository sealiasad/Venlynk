import type { Metadata } from "next";

import { ServicePageFor, serviceMeta, serviceParams } from "@/i18n/pages";

type Props = { params: Promise<{ category: string; service: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => serviceParams("tr");

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, service } = await params;
  return serviceMeta("tr", category, service);
}

export default async function Page({ params }: Props) {
  const { category, service } = await params;
  return <ServicePageFor locale="tr" category={category} service={service} />;
}
