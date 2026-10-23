import type { Metadata } from "next";

import { CountryPage, countryMeta, countryParams } from "@/i18n/pages";

type Props = { params: Promise<{ country: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => countryParams("tr");

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return countryMeta("tr", (await params).country);
}

export default async function Page({ params }: Props) {
  return <CountryPage locale="tr" country={(await params).country} />;
}
