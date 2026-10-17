import type { Metadata } from "next";

import { PageHead } from "@/components/site/blocks";
import { SITE } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy policy",
  description: "What Venlynk collects on venlynk.com, why, which analytics tools we use and how to change your choice.",
  path: "/privacy",
});

const UPDATED = "17 October 2026";

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: "Who we are",
    body: [
      `${SITE.name} is a digital product studio. This policy covers venlynk.com. For any privacy question, email ${SITE.email} and we will reply within one working day.`,
    ],
  },
  {
    title: "What you send us",
    body: [
      "When you use the contact form we receive your name, email, company (if you add it), the services and budget you pick and your message. We use this only to reply to you and to prepare a proposal. It is delivered to our inbox by email and is never sold or shared for marketing.",
      "If you email or message us directly, the same applies to what you send.",
    ],
  },
  {
    title: "Analytics and cookies",
    body: [
      "We use a few tools to understand which pages help visitors and where enquiries come from. They set cookies or similar storage in your browser:",
      "Google Analytics counts visits, pages viewed, how people arrive and when the contact form is sent. IP addresses are anonymised.",
      "Microsoft Clarity shows heatmaps and anonymised recordings of how pages are used, so we can fix confusing parts. Text you type into forms is masked and not recorded.",
      "LinkedIn Insight Tag and Meta Pixel may be used to measure our LinkedIn, Facebook and Instagram adverts.",
      "We never send your name, email or message to these tools.",
    ],
  },
  {
    title: "Your choice",
    body: [
      "Visitors in the UK and Europe are asked first, and nothing is set until you accept. Everyone can change their choice at any time with “Cookie settings” at the bottom of every page. You can also block cookies in your browser or use Google’s Analytics opt-out add-on.",
    ],
  },
  {
    title: "How long we keep data",
    body: [
      "Enquiries are kept for as long as we are talking or working together, then deleted when no longer needed. Analytics data is kept for 14 months.",
    ],
  },
  {
    title: "Your rights",
    body: [
      `You can ask to see, correct or delete what we hold about you by emailing ${SITE.email}. You may also complain to your local data protection authority.`,
    ],
  },
  {
    title: "Changes",
    body: [`If this policy changes we will update this page and the date below. Last updated ${UPDATED}.`],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHead eyebrow="Privacy" title="Privacy policy" lead="What we collect on this site, why, and how to change your choice." />
      <section className="ha-block wrap pa-tight">
        <div className="pa-legal">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2>{s.title}</h2>
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
