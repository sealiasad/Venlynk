import { SITE } from "@/content/site";

/**
 * Policy pages. Each one is a list of sections made of paragraphs, bullet lists and tables,
 * rendered by the shared legal template so all policies look and read the same.
 */

export type LegalBlock =
  | { p: string }
  | { list: string[] }
  | { table: { head: string[]; rows: string[][] } };

export type LegalSection = { id: string; title: string; blocks: LegalBlock[] };

export type LegalDoc = {
  slug: string;
  /** Short name for menus and the side list. */
  label: string;
  title: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  updated: string;
  sections: LegalSection[];
};

export const PRIVACY: LegalDoc = {
  slug: "privacy",
  label: "Privacy policy",
  title: "Privacy policy",
  lead: "What we collect on this site, why, and how to change your choice.",
  metaTitle: "Privacy policy",
  metaDescription: "What Venlynk collects on venlynk.com, why, which analytics tools we use and how to change your choice.",
  updated: "2026-10-17",
  sections: [
    {
      id: "who-we-are",
      title: "Who we are",
      blocks: [
        {
          p: `${SITE.name} is a digital product studio. This policy covers venlynk.com. For any privacy question, email ${SITE.email} and we will reply within one working day.`,
        },
      ],
    },
    {
      id: "what-you-send",
      title: "What you send us",
      blocks: [
        {
          p: "When you use the contact form we receive your name, email, company (if you add it), the services and budget you pick and your message. We use this only to reply to you and to prepare a proposal. It is delivered to our inbox by email and is never sold or shared for marketing.",
        },
        { p: "If you email or message us directly, the same applies to what you send." },
      ],
    },
    {
      id: "analytics",
      title: "Analytics and cookies",
      blocks: [
        { p: "We use a few tools to understand which pages help visitors and where enquiries come from. They set cookies or similar storage in your browser:" },
        {
          list: [
            "Google Analytics counts visits, pages viewed, how people arrive and when the contact form is sent. IP addresses are anonymised.",
            "Microsoft Clarity shows heatmaps and anonymised recordings of how pages are used, so we can fix confusing parts. Text you type into forms is masked and not recorded.",
            "LinkedIn Insight Tag and Meta Pixel may be used to measure our LinkedIn, Facebook and Instagram adverts.",
          ],
        },
        { p: "We never send your name, email or message to these tools. The cookie policy lists each cookie, what it does and how long it lasts." },
      ],
    },
    {
      id: "your-choice",
      title: "Your choice",
      blocks: [
        {
          p: "Visitors in the UK and Europe are asked first, and nothing is set until you accept. Everyone can change their choice at any time with “Cookie settings” at the bottom of every page. You can also block cookies in your browser or use Google’s Analytics opt-out add-on.",
        },
      ],
    },
    {
      id: "retention",
      title: "How long we keep data",
      blocks: [
        {
          p: "Enquiries are kept for as long as we are talking or working together, then deleted when no longer needed. Analytics data is kept for 14 months.",
        },
      ],
    },
    {
      id: "rights",
      title: "Your rights",
      blocks: [
        {
          p: `You can ask to see, correct or delete what we hold about you by emailing ${SITE.email}. You may also complain to your local data protection authority.`,
        },
      ],
    },
    {
      id: "changes",
      title: "Changes",
      blocks: [{ p: "If this policy changes we will update this page and the date at the top." }],
    },
  ],
};

export const COOKIES: LegalDoc = {
  slug: "cookies",
  label: "Cookie policy",
  title: "Cookie policy",
  lead: "Which cookies this site can set, what each one is for, and how to turn them off.",
  metaTitle: "Cookie policy",
  metaDescription: "The cookies and browser storage venlynk.com uses, what each one does, how long it lasts and how to change your choice.",
  updated: "2026-10-23",
  sections: [
    {
      id: "what-are-cookies",
      title: "What cookies are",
      blocks: [
        {
          p: "Cookies are small files a website stores in your browser so it can remember something between pages or visits. Some sites use similar browser storage, called local storage, for the same job. This policy covers both.",
        },
      ],
    },
    {
      id: "short-version",
      title: "The short version",
      blocks: [
        {
          list: [
            "The site works fully without any analytics cookies.",
            "We use one piece of local storage to remember your cookie choice.",
            "Analytics and advert measurement cookies are only set if those tools are switched on, and, for visitors in the UK and Europe, only after you accept.",
            "We do not use cookies to collect your name, email or anything you type into a form.",
          ],
        },
      ],
    },
    {
      id: "necessary",
      title: "Needed for the site to work",
      blocks: [
        { p: "This storage is set by us and cannot be switched off, because without it the site would ask for your cookie choice on every page." },
        {
          table: {
            head: ["Name", "Type", "Purpose", "How long"],
            rows: [["vl-consent", "Local storage", "Remembers whether you accepted or declined analytics cookies", "Until you clear your browser storage"]],
          },
        },
      ],
    },
    {
      id: "analytics",
      title: "Analytics",
      blocks: [
        { p: "These help us see which pages are useful and where people get stuck. They are set by the provider named, under that provider’s own privacy policy." },
        {
          table: {
            head: ["Name", "Provider", "Purpose", "How long"],
            rows: [
              ["_ga", "Google Analytics", "Tells one visitor apart from another so visits can be counted", "2 years"],
              ["_ga_<ID>", "Google Analytics", "Keeps track of the current visit", "2 years"],
              ["_clck", "Microsoft Clarity", "Remembers a visitor across pages for heatmaps and recordings", "1 year"],
              ["_clsk", "Microsoft Clarity", "Joins page views from one visit into a single recording", "1 day"],
              ["CLID, MUID", "Microsoft Clarity", "Recognises the browser across sites that use Clarity", "1 year"],
            ],
          },
        },
      ],
    },
    {
      id: "advertising",
      title: "Advert measurement",
      blocks: [
        { p: "If we run adverts on LinkedIn, Facebook or Instagram, these tell us whether an advert led to a visit or an enquiry." },
        {
          table: {
            head: ["Name", "Provider", "Purpose", "How long"],
            rows: [
              ["li_sugr, bcookie", "LinkedIn", "Recognises the browser to measure LinkedIn adverts", "Up to 1 year"],
              ["lidc", "LinkedIn", "Routes requests to LinkedIn’s servers", "1 day"],
              ["UserMatchHistory, AnalyticsSyncHistory", "LinkedIn", "Matches visits to LinkedIn advert campaigns", "30 days"],
              ["_fbp", "Meta", "Measures Facebook and Instagram adverts", "3 months"],
            ],
          },
        },
      ],
    },
    {
      id: "third-party",
      title: "Embedded content",
      blocks: [
        {
          p: "The Clutch rating badge at the bottom of each page is loaded from clutch.co, which may set its own cookies under Clutch’s policy. Links to our social profiles take you to those sites, which have their own cookie policies.",
        },
      ],
    },
    {
      id: "control",
      title: "How to change your choice",
      blocks: [
        {
          list: [
            "Use “Cookie settings” at the bottom of any page, where it is shown, to accept or decline at any time.",
            "Clear or block cookies in your browser settings. The site still works if you do.",
            "Install Google’s Analytics opt-out browser add-on to stop Google Analytics on every site.",
          ],
        },
        { p: "Cookie names and durations are set by each provider and can change. We review this list when we add or remove a tool." },
      ],
    },
    {
      id: "contact",
      title: "Questions",
      blocks: [{ p: `Email ${SITE.email} with any question about cookies or your data. The privacy policy explains what we collect and your rights.` }],
    },
  ],
};

export const TERMS: LegalDoc = {
  slug: "terms",
  label: "Terms of use",
  title: "Terms of use",
  lead: "The rules for using venlynk.com. Project work is covered by a separate written agreement.",
  metaTitle: "Terms of use",
  metaDescription: "The terms for using venlynk.com: our content, the information on the site, links to other sites and how these terms can change.",
  updated: "2026-10-23",
  sections: [
    {
      id: "about",
      title: "About these terms",
      blocks: [
        {
          p: `These terms cover your use of venlynk.com, run by ${SITE.name}. By using the site you agree to them. If you do not agree, please do not use the site.`,
        },
      ],
    },
    {
      id: "projects",
      title: "Projects and quotes",
      blocks: [
        {
          p: "Nothing on this site is an offer or a contract. Every project is quoted in writing after a call, and the work is governed by the proposal or agreement both sides sign. If that agreement and these terms ever differ, the agreement wins.",
        },
        { p: "Timeframes on the site, such as how long a store or an app usually takes, are typical ranges to help you plan, not promises for your project." },
      ],
    },
    {
      id: "information",
      title: "Information on the site",
      blocks: [
        {
          p: "We work to keep pages accurate and up to date, including notes on payments, platforms and data laws in different countries. This information is general. It is not legal, tax or financial advice, and rules change, so please confirm anything important with a qualified adviser.",
        },
      ],
    },
    {
      id: "content",
      title: "Our content",
      blocks: [
        {
          p: `The text, designs, graphics and code of this site belong to ${SITE.name} or are used with permission. You may share links to any page and quote short parts with credit. Please do not copy whole pages or present our work as your own.`,
        },
        {
          p: "Client names, logos and project images are shown with permission and belong to their owners. Projects marked as the founder’s previous role or a collaborative engagement were delivered as part of another team, and we say so on each one.",
        },
      ],
    },
    {
      id: "use",
      title: "Using the site fairly",
      blocks: [
        {
          list: [
            "Do not try to break, overload or get unauthorised access to the site or its systems.",
            "Do not use the contact form to send spam, harmful links or anything unlawful.",
            "Do not scrape the site in a way that slows it down for other visitors.",
          ],
        },
      ],
    },
    {
      id: "links",
      title: "Links to other sites",
      blocks: [
        {
          p: "We link to client projects, social profiles, platforms and sources we find useful. We do not control those sites and are not responsible for their content or how they handle your data.",
        },
      ],
    },
    {
      id: "liability",
      title: "Availability and liability",
      blocks: [
        {
          p: "We aim to keep the site available and secure but cannot promise it will always be free of interruptions or errors. As far as the law allows, we are not liable for any loss caused by relying on the site or by it being unavailable. Nothing in these terms limits liability that cannot be limited by law.",
        },
      ],
    },
    {
      id: "privacy",
      title: "Privacy and cookies",
      blocks: [{ p: "How we handle what you send us is set out in the privacy policy, and the cookies we use are listed in the cookie policy." }],
    },
    {
      id: "law",
      title: "Governing law",
      blocks: [{ p: "These terms are governed by the laws of Pakistan, where Venlynk is based." }],
    },
    {
      id: "changes",
      title: "Changes",
      blocks: [{ p: `We may update these terms from time to time and will change the date at the top when we do. Questions about them can go to ${SITE.email}.` }],
    },
  ],
};

export const LEGAL_DOCS = [PRIVACY, COOKIES, TERMS] as const;

/** Every page in the footer's legal row, in order. */
export const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Cookies", href: "/cookies" },
  { label: "Terms", href: "/terms" },
  { label: "AI instructions", href: "/ai-instructions" },
] as const;
