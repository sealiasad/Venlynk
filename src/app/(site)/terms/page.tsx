import type { Metadata } from "next";

import { LegalView } from "@/components/site/legal-view";
import { TERMS } from "@/content/legal";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ title: TERMS.metaTitle, description: TERMS.metaDescription, path: "/terms" });

export default function Page() {
  return <LegalView doc={TERMS} />;
}
