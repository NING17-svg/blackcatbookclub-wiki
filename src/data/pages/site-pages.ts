import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const sitePages: PageContent[] = [
  {
    id: "faq",
    translationKey: "faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "faq",
    url: "/faq",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `${site.gameName} FAQ`,
    seoTitle: `${site.gameName} FAQ | Common Questions`,
    metaDescription:
      "Black Cat Book Club FAQ: common launch questions answered using the Steam store pages and Idea Garden Games developer posts.",
    summary:
      "A compact FAQ page for Black Cat Book Club launch questions and safe starter answers.",
    hero: {
      eyebrow: "FAQ",
      subtitle:
        "Answer common Black Cat Book Club launch, platform, wiki, and guide-scope questions without overclaiming.",
      ctas: [
        { label: "Release Info", href: "/release" },
        { label: "Contact", href: "/contact" },
      ],
    },
    quickAnswer:
      "This FAQ answers what the Black Cat Book Club guide site can support with verified facts from the Steam store pages and Idea Garden Games developer posts.",
    keyFacts: [
      { label: "FAQ source", value: "Steam store pages + Idea Garden dev posts" },
      { label: "Schema", value: "FAQ JSON-LD enabled" },
      { label: "Review", value: "Reviewed 2026-09-25" },
    ],
    modules: [
      {
        id: "faq-policy",
        type: "prose",
        heading: "FAQ policy",
        body:
          "Answers are short, source-aware, and tied to the Steam store page for AppID 3972410 or the demo store page for AppID 4656850. Speculative claims about release dates, platforms, gameplay systems, or technical details are avoided.",
      },
    ],
    faqIds: [
      "what-is-this-site",
      "is-official",
      "release-date-known",
      "platforms-known",
      "guide-depth",
    ],
    relatedPageIds: ["wiki", "guides", "release-status", "overview"],
    schemaTypes: ["FAQPage", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-06-18",
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "Contact Black Cat Book Club guide for corrections, official source updates, and site feedback.",
    summary:
      "A trust page for Black Cat Book Club corrections, source updates, and site feedback.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Use this page for Black Cat Book Club corrections, source updates, and feedback channels.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      "Email support@blackcatbookclub.wiki for Black Cat Book Club corrections, source updates, and feedback.",
    keyFacts: [
      { label: "Primary use", value: "Corrections and feedback" },
      { label: "Email", value: "support@blackcatbookclub.wiki" },
      { label: "Response", value: "Set expectations clearly" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Contact method",
        body:
          "Email support@blackcatbookclub.wiki for Black Cat Book Club corrections, source updates, and feedback.",
      },
      {
        id: "corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "Send official source links when Black Cat Book Club facts change. Do not send private account information or game account credentials.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["overview", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-06-18",
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "Privacy policy for the Black Cat Book Club guide site: analytics, contact messages, and third-party data.",
    summary:
      "Privacy policy covering analytics, contact messages, and third-party data on the Black Cat Book Club guide site.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "What data the Black Cat Book Club guide site collects, why it is used, and how visitors can make contact.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "The Black Cat Book Club guide site uses Google Analytics when GA4 is configured, processes contact messages sent through the contact form, and does not include accounts, comments, or payments.",
    keyFacts: [
      { label: "Analytics", value: "Google Analytics 4 when configured" },
      { label: "Accounts", value: "No user accounts" },
      { label: "Ads", value: "Adsterra only when enabled" },
    ],
    modules: [
      {
        id: "data",
        type: "prose",
        heading: "Information we collect",
        body:
          "This site does not include accounts, comments, or payments. When GA4 is configured, analytics collect aggregate usage information according to Google Analytics settings. When advertising is enabled, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads.",
      },
      {
        id: "contact",
        type: "prose",
        heading: "Contact messages",
        body:
          "Contact messages may include the information visitors choose to send. We do not request sensitive personal information and discard unsolicited credentials or private account data.",
      },
      {
        id: "updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "This policy is updated when analytics, hosting, contact methods, advertising providers, or other data collection behavior changes. The current revision date is shown below.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["overview", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-06-18",
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Terms of use for the Black Cat Book Club guide site: unofficial status, informational use, and site changes.",
    summary:
      "Terms of use for the Black Cat Book Club guide site.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Set clear expectations for unofficial status, informational use, and site changes.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "This site is an unofficial Black Cat Book Club guide. Information is provided as-is for reference and may be updated without notice.",
    keyFacts: [
      { label: "Use", value: "Informational guide content" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Review", value: "Reviewed 2026-09-25" },
    ],
    modules: [
      {
        id: "unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "This site is not affiliated with the game publisher, developer, platform holders, or trademark owners unless explicitly stated after launch.",
      },
      {
        id: "accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Guide information may change as official details are updated. Use official sources for final purchase, platform, and release decisions.",
      },
      {
        id: "acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through any future contact channel.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["overview", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-06-18",
  },
];
