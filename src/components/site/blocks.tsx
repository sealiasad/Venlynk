import Image from "next/image";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";

import { SITE } from "@/content/site";
import { TOOL_ICONS } from "@/content/tool-icons";
import type { Engagement, Project } from "@/content/types";

/** Turns *word* into the accent colour. */
export function accent(text: string, As: "span" | "em" = "span"): ReactNode[] {
  return text
    .split(/(\*[^*]+\*)/g)
    .filter(Boolean)
    .map((part, i) =>
      part.startsWith("*") ? (
        <As key={i} className={As === "span" ? "ha-accent" : undefined}>
          {part.slice(1, -1)}
        </As>
      ) : (
        part
      ),
    );
}

export const delay = (i: number, step = 80) => ({ transitionDelay: `${i * step}ms` });

/** Heading whose words rise out of a mask when it scrolls into view. */
export function Words({ text, as: As = "h2", className }: { text: string; as?: "h2" | "h3" | "p"; className?: string }) {
  const words = text.split(/\s+/).filter(Boolean);
  return (
    <As className={className} data-words="" aria-label={text}>
      <span aria-hidden="true">
        {words.map((w, i) => (
          <Fragment key={i}>
            <span className="w">
              <span style={{ transitionDelay: `${i * 55}ms` }}>{w}</span>
            </span>{" "}
          </Fragment>
        ))}
      </span>
    </As>
  );
}

/** Section heading with an optional side note and link. */
export function Head({
  title,
  text,
  more,
  as = "h2",
}: {
  title: string;
  text?: string;
  more?: { label: string; href: string };
  as?: "h2" | "h3";
}) {
  return (
    <div className="ha-head">
      <Words text={title} as={as} />
      {text || more ? (
        <div className="ha-head__side" data-fade="" style={{ transitionDelay: "150ms" }}>
          {text ? <p>{text}</p> : null}
          {more ? (
            <Link className="ha-more" href={more.href}>
              {more.label} <span aria-hidden="true">→</span>
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

/** Dark page opening used on every inner page. */
export function PageHead({
  eyebrow,
  title,
  lead,
  children,
  crumb,
}: {
  eyebrow?: ReactNode;
  title: string;
  lead?: string;
  children?: ReactNode;
  crumb?: { label: string; href: string };
}) {
  const lines = title.split("\n");
  return (
    <section className="pa-head">
      <div className="pa-head__bg" aria-hidden="true" data-parallax="0.3" />
      <div className="pa-head__floor" aria-hidden="true" />
      <div className="wrap pa-head__inner">
        {crumb ? (
          <Link className="pa-crumb" href={crumb.href} data-intro="">
            <span aria-hidden="true">←</span> {crumb.label}
          </Link>
        ) : null}
        {eyebrow ? (
          <div className="ha-eyebrow" data-intro="" style={{ animationDelay: "0.1s" }}>
            {eyebrow}
          </div>
        ) : null}
        <h1 aria-label={title.replace(/\*/g, "").replace(/\n/g, " ")}>
          {lines.map((line, i) => (
            <span className="ha-line" key={i} aria-hidden="true">
              <span style={{ animationDelay: `${0.12 + i * 0.09}s` }}>{accent(line)}</span>
            </span>
          ))}
        </h1>
        {lead ? (
          <p className="pa-head__lead" data-intro="" style={{ animationDelay: "0.45s" }}>
            {lead}
          </p>
        ) : null}
        {children ? (
          <div data-intro="" style={{ animationDelay: "0.55s" }}>
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}

/** The blue closing band with the call to action. */
export function ClosingCta({
  title = "Let's build\nwhat's next.",
  text = "Book a 30 minute call to talk through your goals, scope, timing and budget.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className={`ha-cta${title.length > 26 ? " ha-cta--long" : ""}`} aria-labelledby="cta-title">
      <div className="ha-cta__glow" data-parallax="0.25" />
      <div className="ha-cta__inner wrap">
        <h2 id="cta-title" data-fade="">
          {title.split("\n").map((l) => (
            <span className="ha-line" key={l}>
              <span>{l}</span>
            </span>
          ))}
        </h2>
        <p data-fade="" style={delay(1)}>
          {text}
        </p>
        <div className="ha-row-cta" data-fade="" style={delay(2)}>
          <Link className="ha-btn ha-btn--light" href="/contact" data-magnetic="">
            Book a 30 minute call
          </Link>
          <a className="ha-btn ha-btn--ghost" href={`mailto:${SITE.email}`} data-magnetic="">
            {SITE.email}
          </a>
        </div>
      </div>
    </section>
  );
}

/** Brand tiles for tools, with a text fallback. */
export function ToolTiles({ tools }: { tools: string[] }) {
  return (
    <ul className="pa-tools" aria-label="Tools we use">
      {tools.map((t) => {
        const icon = TOOL_ICONS[t];
        return (
          <li key={t} title={t}>
            {icon ? (
              <span className="pa-tool" style={{ background: icon.hex }}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={icon.d} fill="#fff" />
                </svg>
              </span>
            ) : (
              <span className="pa-tool pa-tool--text" aria-hidden="true">
                {t.slice(0, 2)}
              </span>
            )}
            <span className="pa-tool__name">{t}</span>
          </li>
        );
      })}
    </ul>
  );
}

const LABEL_TONE: Record<Engagement, string> = {
  "Delivered by Venlynk": "brand",
  "Ongoing retainer": "lav",
  "Collaborative engagement": "line",
  "Founder's previous role": "line",
  "In development": "warm",
};

export function LabelPill({ label }: { label: Engagement }) {
  return <span className={`pa-pill pa-pill--${LABEL_TONE[label]}`}>{label}</span>;
}

/** Results panel used when a project has no image. */
export function ResultsVisual({ project }: { project: Project }) {
  return (
    <div className="pa-resvis" aria-label={`${project.client} results`}>
      {(project.results ?? []).map((r) => (
        <div key={r.value + r.label}>
          <b>{r.value}</b>
          <span>{r.label}</span>
        </div>
      ))}
    </div>
  );
}

export function ProjectCard({ project, priority = false, sizes }: { project: Project; priority?: boolean; sizes?: string }) {
  const lead = project.results?.[0];
  return (
    <Link
      className="pa-card"
      href={`/work/${project.slug}`}
      aria-label={`${project.client} case study`}
      data-cursor="View"
    >
      <span className="pa-card__media">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.client}
            fill
            priority={priority}
            sizes={sizes ?? "(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          />
        ) : (
          <ResultsVisual project={project} />
        )}
      </span>
      <span className="pa-card__body">
        <span className="pa-card__top">
          <span className="pa-card__name">{project.client}</span>
          <LabelPill label={project.label} />
        </span>
        <span className="pa-card__meta">
          {project.sector}
          {lead ? (
            <>
              {" · "}
              <strong>
                {lead.value} {lead.label}
              </strong>
            </>
          ) : null}
        </span>
      </span>
    </Link>
  );
}

/** Paragraph whose words brighten as it scrolls through the screen. *word* marks the accent. */
export function ScrubText({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  let k = 0;
  return (
    <p className={className} data-scrub="">
      {parts.map((part, pi) => {
        const isAccent = part.startsWith("*") && part.endsWith("*");
        const words = (isAccent ? part.slice(1, -1) : part).split(/\s+/).filter(Boolean);
        const spans = words.map((w) => (
          <span className="sw" key={k++}>
            {w}{" "}
          </span>
        ));
        return isAccent ? <em key={`e${pi}`}>{spans}</em> : spans;
      })}
    </p>
  );
}
