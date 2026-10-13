import { Ambient } from "@/components/site/ambient";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { PageWipe } from "@/components/site/page-wipe";
import { SiteFx } from "@/components/site/site-fx";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <span id="top" />
      <Ambient />
      <Header />
      <main id="main" className="ha">{children}</main>
      <Footer />
      <PageWipe />
      <SiteFx />
    </>
  );
}
