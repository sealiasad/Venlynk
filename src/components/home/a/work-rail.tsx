import Image from "next/image";
import Link from "next/link";

import { PROJECTS } from "@/content/projects";

/** A slow, endless rail of project covers under the hero. Pauses on hover. */
export function WorkRail() {
  const withImage = PROJECTS.filter((p): p is typeof p & { image: string } => Boolean(p.image));
  const items = withImage
    .filter((p) => p.featured)
    .concat(withImage.filter((p) => !p.featured))
    .slice(0, 10);
  const loop = [...items, ...items];
  return (
    <section className="k-rail" aria-label="Selected projects">
      <ul className="k-rail__track">
        {loop.map((p, i) => (
          <li key={`${p.slug}-${i}`} aria-hidden={i >= items.length ? true : undefined}>
            <Link
              className={`k-rail__card${i % 3 === 1 ? " k-rail__card--sq" : ""}`}
              href={`/work/${p.slug}`}
              tabIndex={i >= items.length ? -1 : undefined}
              data-cursor="View"
            >
              <Image src={p.image} alt={i >= items.length ? "" : (p.imageAlt ?? p.client)} fill sizes="420px" />
              <span className="k-rail__tag">{p.client}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
