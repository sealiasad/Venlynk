import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { PageHead } from "@/components/site/blocks";
import { CopyEmail } from "@/components/site/copy-email";
import { CONTACT } from "@/content/home";
import { PAGE_SEO } from "@/content/seo";
import { SITE } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ ...PAGE_SEO.contact, path: "/contact" });

const NEXT = [
  { title: "We read every brief", body: "Someone on the team reads it and replies within one working day." },
  { title: "A 30 minute call", body: "We talk through goals, scope, timing and budget. No pitch deck." },
  { title: "A written proposal", body: "Scope, timeline and cost options you can share with your team." },
];

export default function ContactPage() {
  return (
    <>
      <PageHead
        eyebrow="Start a project"
        title={"Tell us what\nyou're *building.*"}
        lead="Share a few lines about the project. The more we know, the more useful the first call will be."
      />
      <section className="ha-block wrap pa-tight">
        <div className="pa-contact">
          <aside className="pa-contact__side">
            <ol className="pa-nextsteps">
              {NEXT.map((n, i) => (
                <li key={n.title} data-fade="" style={{ transitionDelay: `${i * 80}ms` }}>
                  <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <b>{n.title}</b>
                    <p>{n.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <dl className="pa-reach" data-fade="">
              <div>
                <dt>Email</dt>
                <dd>
                  <CopyEmail />
                </dd>
              </div>
              <div>
                <dt>Call or WhatsApp</dt>
                <dd>
                  <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Clients in</dt>
                <dd>{CONTACT.markets.join(", ")}</dd>
              </div>
              {SITE.calendarUrl ? (
                <div>
                  <dt>Book directly</dt>
                  <dd>
                    <a href={SITE.calendarUrl} target="_blank" rel="noreferrer">
                      Pick a time <span aria-hidden="true">↗</span>
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>
          </aside>
          <div className="pa-contact__form" data-fade="">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
