import * as Flags from "country-flag-icons/react/3x2";
import Link from "next/link";

import { BrandMark } from "@/components/brand/brand-mark";
import { ClutchBadge } from "@/components/site/clutch-badge";
import { ConsentLink } from "@/components/site/consent-link";
import { CopyEmail } from "@/components/site/copy-email";
import { CATEGORIES } from "@/content/catalog";
import { CONTACT } from "@/content/home";
import { INDUSTRIES } from "@/content/industries";
import { LEGAL_LINKS } from "@/content/legal";
import { LOCATIONS } from "@/content/locations";
import { NAV, SITE, SOCIALS } from "@/content/site";
import { SOCIAL_ICONS } from "@/content/social-icons";

function Flag({ code }: { code: string }) {
  const F = (Flags as Record<string, (p: { className?: string }) => React.ReactElement>)[code];
  return F ? <F className="ft__flag" /> : null;
}

const LANGS = [
  { label: "English", href: "/", lang: "en" },
  { label: "العربية", href: "/ar", lang: "ar" },
  { label: "Türkçe", href: "/tr", lang: "tr" },
] as const;

export function Footer() {
  const socials = SOCIALS.filter((s) => s.href);
  const year = new Date().getFullYear();

  return (
    <footer className="ft is-dark">
      <div className="ft__glow" aria-hidden="true" />
      <div className="wrap ft__in">
        {/* Brand and contact */}
        <div className="ft__hero">
          <div className="ft__brand">
            <Link href="/" className="ft__logo" aria-label={`${SITE.name} home`}>
              <BrandMark variant="white" className="ft__logo-mark" />
              <span>{SITE.name}</span>
            </Link>
            <p className="ft__intro">
              Product design and engineering for founders and growing teams. Websites, apps, online stores and AI tools.
            </p>
            {SITE.availability ? (
              <p className="ft__status">
                <i aria-hidden="true" />
                {SITE.availability}
              </p>
            ) : null}
          </div>

          <div className="ft__contact">
            <p className="ft__kicker">Start a project</p>
            <p className="ft__ask">Tell us what you are building. You get a fixed quote after a 30 minute call.</p>
            <div className="ft__actions">
              <Link className="ft__btn ft__btn--primary" href="/contact">
                Get a fixed quote <span aria-hidden="true">→</span>
              </Link>
              <a className="ft__btn" href={CONTACT.whatsapp} rel="noopener" target="_blank">
                WhatsApp us
              </a>
            </div>
            <CopyEmail className="ft__email" />
          </div>
        </div>

        {/* Sitemap */}
        <nav className="ft__panel" aria-label="Footer">
          <div className="ft__col">
            <p className="ft__label">Studio</p>
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
          <div className="ft__col">
            <p className="ft__label">Services</p>
            <ul>
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/services/${c.slug}`}>{c.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/hire">Hire developers</Link>
              </li>
            </ul>
          </div>
          <div className="ft__col">
            <p className="ft__label">Industries</p>
            <ul>
              {INDUSTRIES.map((i) => (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}`}>{i.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="ft__col ft__col--countries">
            <p className="ft__label">
              Countries <span>{LOCATIONS.length}</span>
            </p>
            <ul>
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`}>
                    <Flag code={l.isoCode} />
                    {l.country}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Social, rating and language */}
        <div className="ft__meta">
          {socials.length ? (
            <ul className="ft__social" aria-label="Venlynk on social media">
              {socials.map((s) => {
                const d = s.icon ? SOCIAL_ICONS[s.icon] : undefined;
                return (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer" aria-label={`Venlynk on ${s.label}`} title={s.label} className="ft__icon">
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
          ) : null}
          <div className="ft__meta-end">
            <ClutchBadge />
            <nav className="ft__langs" aria-label="Language">
              {LANGS.map((l) => (
                <Link key={l.lang} href={l.href} hrefLang={l.lang} lang={l.lang}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Legal */}
        <div className="ft__base">
          <p>
            © {year} {SITE.name}. {SITE.tagline}
          </p>
          <ul className="ft__legal">
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
            <li>
              <ConsentLink />
            </li>
          </ul>
          <a href="#top" className="ft__top" aria-label="Back to top">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 19V5M5.5 11.5 12 5l6.5 6.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
