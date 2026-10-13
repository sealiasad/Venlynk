import type { Metadata } from "next";

import { ClosingCta, PageHead } from "@/components/site/blocks";
import { WorkBrowser } from "@/components/work/work-browser";
import { INDUSTRIES } from "@/content/industries";
import { PROJECTS } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Websites, web apps, online stores and mobile apps designed and built by Venlynk, each labelled with how it was delivered.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const web = PROJECTS.filter((p) => p.kind === "web").length;
  const mobile = PROJECTS.length - web;
  return (
    <>
      <PageHead
        eyebrow="Selected work"
        title={"Products we've\n*designed and built.*"}
        lead={`${PROJECTS.length} projects across web and mobile: ${web} websites, stores and web apps, and ${mobile} apps. Each one is labelled with how it was delivered.`}
      />
      <section className="ha-block wrap pa-tight">
        <WorkBrowser projects={PROJECTS} industries={INDUSTRIES} />
        <div className="pa-legend" data-fade="">
          <p className="ha-eyebrow">How to read the labels</p>
          <dl>
            <div>
              <dt>Delivered by Venlynk</dt>
              <dd>Designed and built by the Venlynk team.</dd>
            </div>
            <div>
              <dt>Ongoing retainer</dt>
              <dd>Work we do every month for a client.</dd>
            </div>
            <div>
              <dt>Collaborative engagement</dt>
              <dd>Built together with the client&apos;s team or partner studios.</dd>
            </div>
            <div>
              <dt>Founder&apos;s previous role</dt>
              <dd>Work Ali led in earlier roles, before or alongside Venlynk.</dd>
            </div>
            <div>
              <dt>In development</dt>
              <dd>Being designed and built right now.</dd>
            </div>
          </dl>
        </div>
      </section>
      <ClosingCta
        title={"Have a project\nlike these?"}
        text="Book a 30 minute call. We will look at your goals, scope and timing, and tell you honestly how we can help."
      />
    </>
  );
}
