import type { Metadata } from "next";
import Image from "next/image";

import { BrandMark } from "@/components/brand/brand-mark";
import { Icon } from "@/components/ui/icon";
import { ClosingCta, delay, Head, PageHead } from "@/components/site/blocks";
import { ABOUT, CAREER, CAREER_BRANDS, FOUNDER, INTRO, NUMBERS, TEAM, VALUES } from "@/content/home";

export const metadata: Metadata = {
  title: "About",
  description:
    "Venlynk is a product design and engineering studio led by Syed Asad Ali. Strategy, design and engineering in one team, from brief to release and after.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const teamPlaceholder = TEAM.some((t) => t.placeholder);
  return (
    <>
      <PageHead eyebrow="About Venlynk" title={ABOUT.title} lead={ABOUT.lead} />

      <section className="ha-block wrap pa-tight">
        <div className="pa-story">
          {ABOUT.story.map((p, i) => (
            <p key={i} data-fade="" style={delay(i)}>
              {p}
            </p>
          ))}
        </div>
        <div className="ha-facts">
          {INTRO.facts.map((f, i) => (
            <div className="ha-fact" key={f.label} data-fade="" style={delay(i)}>
              <small>{f.label}</small>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ha-block wrap" id="founder">
        <div className="ha-founder">
          <div className="ha-fcard" data-fade="">
            {FOUNDER.photo ? (
              <Image src={FOUNDER.photo} alt={FOUNDER.name} fill sizes="(max-width: 900px) 100vw, 50vw" />
            ) : (
              <>
                <BrandMark />
                <p>[Founder portrait]</p>
              </>
            )}
          </div>
          <div className="ha-fbody" data-fade="" style={delay(1)}>
            <p className="ha-eyebrow">{FOUNDER.role}</p>
            <h2 className="pa-h-founder">{FOUNDER.name}</h2>
            <p>{FOUNDER.bio}</p>
            <ul className="ha-chips">
              {FOUNDER.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="ha-row-cta">
              <a className="ha-btn ha-btn--ghost" href={FOUNDER.linkedin} target="_blank" rel="noreferrer" data-magnetic="">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="ha-block wrap">
        <Head title="The road here" text="Fourteen years of building for the web, across agencies, product companies and remote teams." />
        <ol className="pa-timeline">
          {CAREER.map((c, i) => (
            <li key={c.where} data-fade="" style={delay(i % 3)}>
              <span className="pa-timeline__when">{c.when}</span>
              <span className="pa-timeline__where">{c.where}</span>
              <span className="pa-timeline__what">{c.what}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="ha-block wrap">
        <Head title="Brands Ali has worked with" text="From the start of his career to today, before and alongside Venlynk." />
        <ul className="ha-logos">
          {CAREER_BRANDS.map((b, i) => (
            <li className={`ha-logo${b.dark ? " ha-logo--dark" : ""}`} key={b.name} data-fade="" style={delay(i % 6, 50)}>
              {b.file ? (
                <Image src={`/images/logos/${b.file}.png`} alt={b.name} width={240} height={90} />
              ) : (
                <span className="pa-logo-text">{b.name}</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="ha-block wrap">
        <dl className="ha-nums" style={{ marginTop: 0 }}>
          {NUMBERS.map((n, i) => (
            <div className="ha-num" key={n.label} data-fade="" style={delay(i)}>
              <dt className="sr-only">{n.label}</dt>
              <dd style={{ margin: 0 }}>
                <b>
                  <span data-count={n.value} aria-hidden="true">
                    {n.value}
                  </span>
                  <span aria-hidden="true">{n.suffix}</span>
                  <span className="sr-only">
                    {n.value}
                    {n.suffix}
                  </span>
                </b>
                <span aria-hidden="true">{n.label}</span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="pa-note">Counted across the careers of everyone on the Venlynk team.</p>
      </section>

      <section className="ha-block wrap" id="team">
        <Head
          title="The people behind the work"
          text={
            teamPlaceholder
              ? "[Placeholder team. Replace names, roles and add photos before launch.]"
              : "Designers, engineers and growth specialists who stay with your project from brief to release."
          }
        />
        <ul className="pa-team">
          {TEAM.map((t, i) => (
            <li key={t.role} data-fade="" style={delay(i % 4)}>
              <span className="pa-team__face" aria-hidden="true">
                {t.initials}
              </span>
              <b>{t.name}</b>
              <span>{t.role}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="ha-block wrap">
        <Head title="Why clients stay with us" text="Four habits we keep on every project, big or small." />
        <div className="ha-vals">
          {VALUES.map((v, i) => (
            <div className="ha-val" key={v.title} data-fade="" style={delay(i)}>
              <Icon name={v.icon} />
              <div>
                <span className="ha-val__n" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
