import type { Metadata } from "next";

import { LegalView } from "@/components/site/legal-view";
import { COOKIES } from "@/content/legal";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ title: COOKIES.metaTitle, description: COOKIES.metaDescription, path: "/cookies" });

export default function Page() {
  return <LegalView doc={COOKIES} />;
}
