import Link from "next/link";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { buildCountries, buildMenu } from "@/content/menu";

export default function NotFound() {
  return (
    <>
      <Header menu={buildMenu()} countries={buildCountries()} />
      <main id="main" className="ha">
        <section className="pa-head pa-head--nf">
          <div className="pa-head__bg" aria-hidden="true" />
          <div className="pa-head__floor" aria-hidden="true" />
          <div className="wrap pa-head__inner">
            <p className="ha-eyebrow">404</p>
            <h1>
              This page <span className="ha-accent">doesn&apos;t exist.</span>
            </h1>
            <p className="pa-head__lead">The link may be old or mistyped. Our work and services are a click away.</p>
            <div className="ha-row-cta">
              <Link className="ha-btn ha-btn--light" href="/">
                Go to the homepage
              </Link>
              <Link className="ha-btn ha-btn--ghost" href="/work">
                See the work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
