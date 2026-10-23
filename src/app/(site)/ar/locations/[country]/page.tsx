import type { Metadata } from "next";

import { CountryPage, countryMeta, countryParams } from "@/i18n/pages";

type Props = { params: Promise<{ country: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => countryParams("ar");

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return countryMeta("ar", (await params).country);
}

export default async function Page({ params }: Props) {
  return <CountryPage locale="ar" country={(await params).country} />;
}
