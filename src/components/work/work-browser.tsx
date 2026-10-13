"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { LabelPill, ProjectCard } from "@/components/site/blocks";
import type { Industry, Project } from "@/content/types";

type Filter = { id: string; label: string; test: (p: Project) => boolean };

/** Filterable project grid with a list view. Filters are buttons with aria-pressed. */
export function WorkBrowser({ projects, industries }: { projects: Project[]; industries: Industry[] }) {
  const filters = useMemo<Filter[]>(
    () => [
      { id: "all", label: "All", test: () => true },
      { id: "web", label: "Web platforms", test: (p) => p.kind === "web" },
      { id: "mobile", label: "Mobile apps", test: (p) => p.kind === "mobile" },
      { id: "commerce", label: "Online stores", test: (p) => p.services.includes("online-stores") },
      ...industries.map((i) => ({ id: i.slug, label: i.title, test: (p: Project) => p.industry === i.slug })),
    ],
    [industries],
  );
  const [active, setActive] = useState("all");
  const [view, setView] = useState<"grid" | "list">("grid");
  const filter = filters.find((f) => f.id === active) ?? filters[0];
  const shown = projects.filter(filter.test);

  return (
    <div className="pa-browser">
      <div className="pa-browser__bar">
        <div className="pa-filters" role="group" aria-label="Filter projects">
          {filters.map((f) => {
            const count = projects.filter(f.test).length;
            if (!count) return null;
            return (
              <button
                key={f.id}
                type="button"
                className="pa-chip"
                aria-pressed={active === f.id}
                onClick={() => setActive(f.id)}
              >
                {f.label} <span>{count}</span>
              </button>
            );
          })}
        </div>
        <div className="pa-view" role="group" aria-label="Layout">
          <button type="button" className="pa-chip" aria-pressed={view === "grid"} onClick={() => setView("grid")}>
            Grid
          </button>
          <button type="button" className="pa-chip" aria-pressed={view === "list"} onClick={() => setView("list")}>
            List
          </button>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {shown.length} projects
      </p>

      {view === "grid" ? (
        <div className="pa-grid" key={active}>
          {shown.map((p, i) => (
            <div className="pa-grid__item" key={p.slug} style={{ animationDelay: `${Math.min(i, 8) * 60}ms` }}>
              <ProjectCard project={p} priority={i < 2} />
            </div>
          ))}
        </div>
      ) : (
        <div className="ha-rows pa-list" key={active}>
          {shown.map((p, i) => (
            <Link className="ha-row" href={`/work/${p.slug}`} key={p.slug}>
              <span className="ha-row__i">{String(i + 1).padStart(2, "0")}</span>
              <span className="ha-row__t">{p.client}</span>
              <span className="ha-row__d">{p.sector}</span>
              <span className="ha-row__l">
                <LabelPill label={p.label} />
              </span>
              {p.image ? (
                <span className="ha-row__thumb" aria-hidden="true">
                  <Image src={p.image} alt="" fill sizes="(max-width: 820px) 85vw, 1px" />
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
