import type { Metadata } from "next";

import { LegalView } from "@/components/site/legal-view";
import { PRIVACY } from "@/content/legal";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ title: PRIVACY.metaTitle, description: PRIVACY.metaDescription, path: "/privacy" });

export default function Page() {
  return <LegalView doc={PRIVACY} eyebrow="Privacy" />;
}
