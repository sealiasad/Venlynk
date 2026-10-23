import type { Metadata } from "next";

import { LegalView } from "@/components/site/legal-view";
import { AI_INSTRUCTIONS } from "@/content/ai-instructions";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: AI_INSTRUCTIONS.metaTitle,
  description: AI_INSTRUCTIONS.metaDescription,
  path: "/ai-instructions",
});

export default function Page() {
  return <LegalView doc={AI_INSTRUCTIONS} eyebrow="For AI assistants" />;
}
