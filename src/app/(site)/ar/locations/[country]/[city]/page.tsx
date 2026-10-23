import type { Metadata } from "next";

import { CityPage, cityMeta, cityParams } from "@/i18n/pages";

type Props = { params: Promise<{ country: string; city: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => cityParams("ar");

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, city } = await params;
  return cityMeta("ar", country, city);
}

export default async function Page({ params }: Props) {
  const { country, city } = await params;
  return <CityPage locale="ar" country={country} city={city} />;
}
