import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { PageWipe } from "@/components/site/page-wipe";
import { SiteFx } from "@/components/site/site-fx";
import { buildMenu } from "@/content/menu";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <span id="top" />
      <Header menu={buildMenu()} />
      <main id="main" className="ha">{children}</main>
      <Footer />
      <PageWipe />
      <SiteFx />
    </>
  );
}
