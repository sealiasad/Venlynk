import type { Metadata } from "next";

import { CompanyDeckView } from "@/components/deck/company-deck-view";
import { DECK } from "@/content/company-deck";

import "@/styles/company-deck.css";

export const metadata: Metadata = {
  title: `${DECK.title} ${DECK.year}`,
  description:
    "Venlynk company profile: a digital product studio for websites, web apps and mobile products.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CompanyProfilePage() {
  return <CompanyDeckView />;
}
