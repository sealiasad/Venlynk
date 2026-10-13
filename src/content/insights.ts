import type { Insight } from "@/content/types";

export const INSIGHTS: Insight[] = [
  {
    slug: "before-you-redesign-a-booking-flow",
    title: "Before you redesign a booking flow, measure these five things",
    category: "Product design",
    date: "2026-10-05",
    readingTime: "6 min",
    excerpt:
      "Most booking redesigns start with new screens. The good ones start with knowing exactly where people give up.",
    author: "Venlynk",
    content: [
      {
        type: "p",
        text: "Ticketing, travel and reservation products share one hard truth: the customer has already decided they want something. If they leave, the product lost them. That makes booking flows one of the best places to spend design effort, and one of the easiest places to waste it, if you redesign before you understand.",
      },
      {
        type: "p",
        text: "Before we draw a single screen on a booking project, we try to answer five questions with real numbers.",
      },
      { type: "h", text: "1. Where does search turn into nothing?" },
      {
        type: "p",
        text: "Track searches that return zero or very few results, and searches that are repeated with small changes within a minute. Both are people telling you the search didn't understand them. Fixing filters, defaults and empty states here often moves bookings more than any visual redesign.",
      },
      { type: "h", text: "2. How many steps between “I want this” and “paid”?" },
      {
        type: "p",
        text: "Count every screen, field and decision from the moment someone picks an option to the payment confirmation. Then ask which of them exist for the customer and which exist for the business. Account creation, optional extras and duplicate passenger details are the usual suspects.",
      },
      { type: "h", text: "3. What happens on a phone, on a bad connection?" },
      {
        type: "p",
        text: "Desktop analytics flatter most booking products. Segment completion rate by device and by connection speed. If mobile completion is far below desktop, the problem is rarely the colours. It's load time, tiny tap targets and forms that fight the keyboard.",
      },
      { type: "h", text: "4. Where do people hesitate?" },
      {
        type: "p",
        text: "Session recordings and time-on-step show the screens where people stop and re-read. Hesitation usually means missing information: total price, cancellation terms, seat or ticket details. Answer the question in place and the hesitation disappears.",
      },
      { type: "h", text: "5. How do people rate it today?" },
      {
        type: "p",
        text: "A simple post-booking rating (“how easy was this?” on a ten-point scale) gives you a baseline. Run the same question after the redesign and you have a number your whole team can understand.",
      },
      {
        type: "quote",
        text: "Measure first, and the redesign brief almost writes itself.",
      },
      {
        type: "p",
        text: "On the booking and ticketing products we've redesigned, this groundwork is what made the results measurable: adoption and completion lifts that a business can verify, not a portfolio that just looks newer. If you're planning a redesign, start with these five numbers, or talk to us and we'll help you gather them.",
      },
    ],
  },
  {
    slug: "migrating-a-large-website-without-losing-search",
    title: "Migrating a 400-page website without losing search traffic",
    category: "Engineering",
    date: "2026-09-18",
    readingTime: "7 min",
    excerpt:
      "Replatforming is mostly invisible work. Done right, nobody notices. Done wrong, rankings fall for months. Here's our checklist.",
    author: "Venlynk",
    content: [
      {
        type: "p",
        text: "We recently moved more than 400 pages of an enterprise website onto WordPress. Migrations like this are rarely glamorous, but they're where a lot of hard-won search traffic and brand trust gets lost. The work that protects it happens before, during and after the switch.",
      },
      { type: "h", text: "Before: inventory everything" },
      {
        type: "list",
        items: [
          "Crawl the old site and export every URL, title, meta description and status code.",
          "Pull the top landing pages and backlinks from Search Console and your analytics.",
          "Mark every page as keep, merge or retire, with a reason.",
          "Note forms, scripts, tracking tags and integrations that live on each template.",
        ],
      },
      { type: "h", text: "During: map, don't guess" },
      {
        type: "p",
        text: "Every old URL needs a destination. Build a redirect map as a spreadsheet the whole team can review, and keep it one-to-one wherever possible. Redirecting hundreds of pages to the homepage is the fastest way to lose rankings.",
      },
      {
        type: "p",
        text: "Rebuild templates rather than pages. A migration is the right moment to fix structure (headings, internal links, image sizes and schema) once, in the template, instead of 400 times by hand.",
      },
      { type: "h", text: "Launch day" },
      {
        type: "list",
        items: [
          "Run the full redirect map against staging, then again against production.",
          "Submit the new sitemap and check Search Console coverage.",
          "Compare page speed and Core Web Vitals on the top 20 pages, old vs new.",
          "Test every form and conversion event end to end.",
        ],
      },
      { type: "h", text: "After: watch for four weeks" },
      {
        type: "p",
        text: "Expect some movement in rankings for a couple of weeks. Track 404s daily, fix missing redirects as they appear, and compare organic landing pages week over week. Most problems show up in the first fortnight, if you're looking.",
      },
      {
        type: "quote",
        text: "A good migration is one your visitors never notice and your search console barely flinches at.",
      },
      {
        type: "p",
        text: "Security and performance belong in the plan from the start too: least-privilege accounts, updated plugins, caching and a CDN. It's much easier to launch clean than to clean up later.",
      },
    ],
  },
  {
    slug: "where-ai-actually-helps-a-small-team",
    title: "Where AI actually helps a small team (and where it doesn't)",
    category: "AI & automation",
    date: "2026-08-27",
    readingTime: "5 min",
    excerpt:
      "Skip the chatbot-on-the-homepage reflex. The best first AI projects are boring, internal and easy to measure.",
    author: "Venlynk",
    content: [
      {
        type: "p",
        text: "Founders ask us the same question every month: where should we use AI? The honest answer is usually not where they expect. The highest-return projects are rarely customer-facing chatbots. They're the repetitive, internal tasks that quietly eat hours every week.",
      },
      { type: "h", text: "Good first projects" },
      {
        type: "list",
        items: [
          "Answering staff questions from your own documents, policies and past tickets.",
          "Drafting first replies to common support or sales enquiries for a person to approve.",
          "Turning messy inputs (emails, PDFs, forms) into structured records in your CRM or database.",
          "Summarising long threads, calls or reports into the three things someone needs to act on.",
        ],
      },
      {
        type: "p",
        text: "What these have in common: the data already exists, a person stays in the loop, and you can measure the result in time saved or errors avoided.",
      },
      { type: "h", text: "Projects to be careful with" },
      {
        type: "list",
        items: [
          "Anything that gives advice customers will act on without a human check: medical, legal, financial.",
          "Features that only work in a demo with hand-picked examples.",
          "AI added because a competitor has it, with no clear job to do.",
        ],
      },
      { type: "h", text: "How we run an AI pilot" },
      {
        type: "p",
        text: "We pick one workflow, collect real examples, and agree on what “good” looks like before we write code. Then we build a small version connected to your actual data, with logging so every answer can be reviewed. After two to four weeks of real use, the numbers tell you whether to expand it, change it or stop.",
      },
      {
        type: "quote",
        text: "The best AI feature is the one your team stops noticing because it just works.",
      },
      {
        type: "p",
        text: "If you have a process that's slow, repetitive or easy to get wrong, that's usually the place to start. We're happy to look at it with you.",
      },
    ],
  },
];

export function getInsight(slug: string) {
  return INSIGHTS.find((i) => i.slug === slug);
}
