import { Prisms } from "@/components/brand/prisms";
import Link from "next/link";

import { BrandMark } from "@/components/brand/brand-mark";
import { ConsentLink } from "@/components/site/consent-link";
import { CopyEmail } from "@/components/site/copy-email";
import { INDUSTRIES } from "@/content/industries";
import { SERVICES } from "@/content/services";
import { NAV, SITE, SOCIALS } from "@/content/site";
import { SOCIAL_ICONS } from "@/content/social-icons";

export function Footer() {
  const socials = SOCIALS.filter((s) => s.href);
  const year = new Date().getFullYear();

  return (
    <footer className="ftr is-dark">
      <Prisms variant="ink" layout="side" />
      <div className="wrap">
        <div className="ftr__top">
          <div className="ftr__lead">
            <p className="ftr__intro">
              Product design and engineering for founders and growing teams. Websites, apps, online stores
              and AI tools.
            </p>
            <div className="ftr__actions">
              <CopyEmail />
              <Link className="link" href="/contact">
                Start a project
              </Link>
            </div>
            {socials.length ? (
              <div className="ftr__social">
                <p className="label">Follow Venlynk</p>
                <ul>
                  {socials.map((s) => {
                    const d = s.icon ? SOCIAL_ICONS[s.icon] : undefined;
                    return (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Venlynk on ${s.label}`}
                          title={s.label}
                          className={d ? "ftr__icon" : "ftr__icon ftr__icon--text"}
                        >
                          {d ? (
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                              <path d={d} />
                            </svg>
                          ) : (
                            s.label
                          )}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </div>

          <div className="ftr__cols">
            <div>
              <p className="label">Studio</p>
              <ul>
                {NAV.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href}>{n.label}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="label">Services</p>
              <ul>
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`}>{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label">Industries</p>
              <ul>
                {INDUSTRIES.map((i) => (
                  <li key={i.slug}>
                    <Link href={`/industries/${i.slug}`}>{i.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="ftr__mark" aria-hidden="true">
          <BrandMark variant="white" className="ftr__logo" />
          <span>{SITE.name}</span>
        </div>

        <div className="ftr__base">
          <span>
            © {year} {SITE.name}. {SITE.tagline}
          </span>
          <span className="ftr__base-links">
            <ConsentLink />
            <a href="#top" className="link">
              Back to top
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
