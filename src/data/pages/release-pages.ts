import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const releasePages: PageContent[] = [
  {
    id: "release-status",
    translationKey: "release-status",
    locale: "en-US",
    routeKind: "fixed",
    slug: "release",
    url: "/release",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Black Cat Book Club Release Date and Launch Timing",
    seoTitle: "Black Cat Book Club release date and launch timing",
    metaDescription:
      "Black Cat Book Club is dated September 25, 2026 on Steam. The free demo has been live since June 3, 2026. Pre-order and early-access status as of 2026-09-25.",
    summary:
      "Status page tracking Black Cat Book Club launch window: full-game release date, demo release date, pre-order status, and dated unknowns.",
    hero: {
      eyebrow: "Release Status",
      subtitle: "When Black Cat Book Club launches on Steam and where the demo currently stands.",
      ctas: [
        { label: "Steam Availability", href: "/steam" },
        { label: "Demo", href: "/demo" },
        { label: "Overview", href: "/about" },
      ],
    },
    quickAnswer:
      "The Steam store page lists September 25, 2026 as the full-game release date for Black Cat Book Club under AppID 3972410. The free demo went live on June 3, 2026 under AppID 4656850 and is available throughout launch week. No separate pre-order, early access, or timed unlock has been announced as of 2026-09-25.",
    keyFacts: [
      { label: "Full-game release date", value: "September 25, 2026" },
      { label: "Demo release date", value: "June 3, 2026" },
      { label: "Pre-order status", value: "Not announced as of 2026-09-25" },
      { label: "Early access", value: "Not announced as of 2026-09-25" },
      { label: "Launch platforms", value: "Steam (Windows)" },
    ],
    modules: [
      {
        id: "release-date",
        type: "prose",
        heading: "Full-game release date",
        body:
          "The Steam store page for Black Cat Book Club under AppID 3972410 lists September 25, 2026 as the full-game release date. Pricing is shown as TBD on the research date and will become visible when the store page flips from coming-soon to live. Idea Garden Games has not published a launch time of day as of 2026-09-25.",
      },
      {
        id: "demo-timeline",
        type: "prose",
        heading: "Demo timeline",
        body:
          "The free demo at AppID 4656850 went live on June 3, 2026 and is the same build used for press previews. As of 2026-09-25 it sits at 81% positive from 27 reviews, exposes the cat-and-library loop at smaller scale, and remains free during launch week.",
      },
      {
        id: "pre-order",
        type: "prose",
        heading: "Pre-order and early access",
        body:
          "No separate pre-order window, early access, or timed unlock has been announced as of 2026-09-25. The Steam store page does not list any paid tier before launch; players pay only when the full game releases.",
      },
      {
        id: "internal-links",
        type: "prose",
        heading: "Related Pages",
        body: "Cross-reference the launch pages that match each link target.",
        links: [
          { label: "What is Black Cat Book Club on Steam", href: "/about", description: "Identity, developer, and disambiguation context." },
          { label: "Black Cat Book Club on Steam", href: "/steam", description: "Steam app IDs, wishlist, family sharing." },
          { label: "Black Cat Book Club demo", href: "/demo", description: "What the demo includes and review aggregate." },
        ],
      },
      {
        id: "sources",
        type: "prose",
        heading: "Sources",
        body: "All facts are verified against the sources listed here.",
        links: [
          {
            label: "Black Cat Book Club on Steam (AppID 3972410)",
            href: "https://store.steampowered.com/app/3972410/",
            description: "`official/store` - checked `2026-09-25` - Full-game release date, developer, pricing status.",
          },
          {
            label: "Black Cat Book Club demo on Steam (AppID 4656850)",
            href: "https://store.steampowered.com/app/4656850/",
            description: "`official/store` - checked `2026-09-25` - Demo release date, six achievements, 81% positive review aggregate from 27 reviews.",
          },
        ],
      },
    ],
    faqIds: [],

    schemaTypes: ["BreadcrumbList"],
relatedPageIds: ["overview", "steam-availability", "demo"],
    sourceStatus: "official",
    lastReviewed: "2026-09-25",
  },
  {
    id: "steam-availability",
    translationKey: "steam-availability",
    locale: "en-US",
    routeKind: "fixed",
    slug: "steam",
    url: "/steam",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Black Cat Book Club on Steam: AppIDs and Steam Features",
    seoTitle: "Is Black Cat Book Club on Steam and which Steam app",
    metaDescription:
      "Black Cat Book Club is on Steam under AppID 3972410 (full game) and AppID 4656850 (demo). Wishlist, family sharing, achievements, and Steam-only features.",
    summary:
      "Status page listing Black Cat Book Club Steam app IDs, achievements, family sharing, wishlist link, and other Steam-only features.",
    hero: {
      eyebrow: "Steam Availability",
      subtitle: "Which Steam app is Black Cat Book Club on, and what Steam-only features does it support.",
      ctas: [
        { label: "Release", href: "/release" },
        { label: "Demo", href: "/demo" },
        { label: "Platforms", href: "/platforms" },
      ],
    },
    quickAnswer:
      "Black Cat Book Club is on Steam under two AppIDs: AppID 3972410 (full game, releasing September 25, 2026) and AppID 4656850 (free demo, live since June 3, 2026). The full game launches at $4.49 with a 10% off introductory offer ending October 9, 2026 (base price $4.99) and ships with Steam achievements, family sharing, and the standard Steam library, wishlist, and curator sale features listed on its store page.",
    keyFacts: [
      { label: "Steam AppID (full)", value: "3972410" },
      { label: "Steam AppID (demo)", value: "4656850" },
      { label: "Launch price", value: "$4.49 with 10% off intro offer ending October 9, 2026 (full price $4.99)" },
      { label: "Achievements", value: "Demo has 6; full game count not listed as of 2026-09-29" },
      { label: "Family sharing", value: "Supported on Steam" },
      { label: "Steam Deck", value: "Verification not announced as of 2026-09-29" },
    ],
    modules: [
      {
        id: "app-ids",
        type: "prose",
        heading: "Steam AppIDs",
        body:
          "The full game is published by Idea Garden Games under AppID 3972410, and the demo is published under AppID 4656850. Steam search returns exactly these two entries when you look up Black Cat Book Club, which matches the Steam store description listing no separate app ID for an earlier release.",
      },
      {
        id: "steam-features",
        type: "prose",
        heading: "Steam-only features",
        body:
          "Both products use the standard Steam achievements system, Steam library entry, Steam Cloud where enabled by the developer, and Steam family sharing. The demo at AppID 4656850 currently lists six achievements; the full game's achievement count is not listed on the store page at research date.",
      },
      {
        id: "wishlist",
        type: "prose",
        heading: "Wishlist, follow, and curator sale",
        body:
          "Players can wishlist or follow the full game through the Steam store page. The page lists standard Steam Cloud and family-sharing entries. Steam Deck verification is not announced as of 2026-09-29; the developer can request verification after launch, at which point Steam will surface the verified or playable badge on the store page.",
      },
      {
        id: "internal-links",
        type: "prose",
        heading: "Related Pages",
        body: "Cross-reference the launch pages that match each link target.",
        links: [
          { label: "What is Black Cat Book Club on Steam", href: "/about", description: "Identity and full launch context." },
          { label: "Black Cat Book Club platforms", href: "/platforms", description: "Confirmed Windows-only at launch; other platforms not announced." },
          { label: "Black Cat Book Club demo", href: "/demo", description: "What the demo includes and review aggregate." },
        ],
      },
      {
        id: "sources",
        type: "prose",
        heading: "Sources",
        body: "All facts are verified against the sources listed here.",
        links: [
          {
            label: "Black Cat Book Club on Steam (AppID 3972410)",
            href: "https://store.steampowered.com/app/3972410/",
            description: "`official/store` - checked `2026-09-29` - Steam app ID, family sharing, Steam Cloud, achievement details, $4.49 launch price with 10% off intro offer ending October 9, 2026 ($4.99 base).",
          },
          {
            label: "Black Cat Book Club demo on Steam (AppID 4656850)",
            href: "https://store.steampowered.com/app/4656850/",
            description: "`official/store` - checked `2026-09-29` - Demo achievements, six achievements, language coverage.",
          },
        ],
      },
    ],
    faqIds: [],

    schemaTypes: ["BreadcrumbList"],
relatedPageIds: ["overview", "platforms", "demo"],
    sourceStatus: "official",
    lastReviewed: "2026-09-29",
  },
  {
    id: "system-requirements",
    translationKey: "system-requirements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "system-requirements",
    url: "/system-requirements",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Black Cat Book Club System Requirements for PC",
    seoTitle: "Black Cat Book Club PC minimum and recommended specs",
    metaDescription:
      "Black Cat Book Club minimum PC requirements: Windows 7 SP1+ 64-bit, Intel Core i3 @ 3.2 GHz, 4 GB RAM, DirectX 11, 300 MB storage. Recommended specs not listed as of 2026-09-25.",
    summary:
      "Reference table for Black Cat Book Club PC minimum and known recommended specs. Steam Deck verification not announced.",
    hero: {
      eyebrow: "System Requirements",
      subtitle: "What PC do you need to run Black Cat Book Club on Steam?",
      ctas: [
        { label: "Platforms", href: "/platforms" },
        { label: "Steam", href: "/steam" },
      ],
    },
    quickAnswer:
      "The Steam store page for Black Cat Book Club lists Windows 7 SP1+ 64-bit as the minimum OS, an Intel Core i3 @ 3.2 GHz CPU, 4 GB of RAM, DirectX 11, and 300 MB of available storage. The Steam client itself requires Windows 10 or newer. Recommended specs beyond the 64-bit OS line are not announced as of 2026-09-25.",
    keyFacts: [
      { label: "Minimum OS", value: "Windows 7 SP1+ (64-bit)" },
      { label: "Steam Client OS", value: "Windows 10+" },
      { label: "Minimum CPU", value: "Intel Core i3 @ 3.2 GHz" },
      { label: "Minimum RAM", value: "4 GB" },
      { label: "Minimum GPU", value: "DirectX 11" },
      { label: "Storage", value: "300 MB available" },
      { label: "Recommended GPU", value: "Not announced as of 2026-09-25" },
    ],
    modules: [
      {
        id: "specs",
        type: "data-table",
        heading: "Black Cat Book Club PC minimum specifications",
        columns: [
          { key: "component", label: "Component" },
          { key: "minimum", label: "Minimum" },
          { key: "recommended", label: "Recommended" },
        ],
        rows: [
          { component: "Operating system", minimum: "Windows 7 SP1+ (64-bit)", recommended: "Not announced as of 2026-09-25" },
          { component: "Processor", minimum: "Intel Core i3 @ 3.2 GHz", recommended: "Not announced as of 2026-09-25" },
          { component: "Memory", minimum: "4 GB RAM", recommended: "Not announced as of 2026-09-25" },
          { component: "Graphics", minimum: "DirectX 11", recommended: "Not announced as of 2026-09-25" },
          { component: "DirectX", minimum: "Version 11", recommended: "Not announced as of 2026-09-25" },
          { component: "Storage", minimum: "300 MB available", recommended: "Not announced as of 2026-09-25" },
          { component: "Sound card", minimum: "DirectX 11 compatible", recommended: "Not announced as of 2026-09-25" },
        ],
      },
      {
        id: "steam-deck",
        type: "prose",
        heading: "Steam Deck and SteamOS",
        body:
          "Steam Deck verification status is not announced as of 2026-09-25. SteamOS support follows Steam Deck verification once the developer submits the build through Valve's standard process.",
      },
      {
        id: "internal-links",
        type: "prose",
        heading: "Related Pages",
        body: "Cross-reference the launch pages that match each link target.",
        links: [
          { label: "Black Cat Book Club platforms", href: "/platforms", description: "Confirmed Windows-only at launch; other platforms not announced." },
          { label: "Black Cat Book Club on Steam", href: "/steam", description: "Steam app IDs and Steam-only features." },
        ],
      },
      {
        id: "sources",
        type: "prose",
        heading: "Sources",
        body: "All facts are verified against the sources listed here.",
        links: [
          {
            label: "Black Cat Book Club on Steam (AppID 3972410)",
            href: "https://store.steampowered.com/app/3972410/",
            description: "`official/store` - checked `2026-09-25` - PC minimum specifications, Steam client note.",
          },
        ],
      },
    ],
    faqIds: [],

    schemaTypes: ["BreadcrumbList"],
relatedPageIds: ["platforms", "steam-availability"],
    sourceStatus: "official",
    lastReviewed: "2026-09-25",
  },
  {
    id: "platforms",
    translationKey: "platforms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "platforms",
    url: "/platforms",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Black Cat Book Club Platforms at Launch",
    seoTitle: "Which platforms Black Cat Book Club is on (PC, Mac, console)",
    metaDescription:
      "Black Cat Book Club is on Windows via Steam only as of 2026-09-25. Mac, Linux, and console versions are not announced. Controller support is not listed.",
    summary:
      "Status page tracking Black Cat Book Club platform availability: confirmed Steam (Windows) only, with dated statements for Mac, Linux, consoles, and controllers.",
    hero: {
      eyebrow: "Platforms",
      subtitle: "Which platforms Black Cat Book Club is on at launch and which are unannounced.",
      ctas: [
        { label: "Steam", href: "/steam" },
        { label: "System Requirements", href: "/system-requirements" },
      ],
    },
    quickAnswer:
      "Black Cat Book Club is confirmed at launch on Windows via Steam only. Mac, Linux, and console versions are not announced as of 2026-09-25. Controller support is not listed on the Steam store page.",
    keyFacts: [
      { label: "Confirmed platform", value: "Windows via Steam" },
      { label: "Mac", value: "Not announced as of 2026-09-25" },
      { label: "Linux", value: "Not announced as of 2026-09-25" },
      { label: "Consoles", value: "Not announced as of 2026-09-25" },
      { label: "Controller support", value: "Not listed on Steam store page" },
    ],
    modules: [
      {
        id: "platform-table",
        type: "data-table",
        heading: "Black Cat Book Club platform status",
        columns: [
          { key: "platform", label: "Platform" },
          { key: "status", label: "Status" },
        ],
        rows: [
          { platform: "Windows (Steam)", status: "Confirmed for September 25, 2026 launch" },
          { platform: "macOS", status: "Not announced as of 2026-09-25" },
          { platform: "Linux / SteamOS", status: "Not announced as of 2026-09-25" },
          { platform: "Steam Deck", status: "Verification not announced as of 2026-09-25" },
          { platform: "PlayStation 5", status: "Not announced as of 2026-09-25" },
          { platform: "Xbox Series X|S", status: "Not announced as of 2026-09-25" },
          { platform: "Nintendo Switch", status: "Not announced as of 2026-09-25" },
          { platform: "Controllers", status: "Not listed on Steam store page" },
        ],
      },
      {
        id: "why-windows-only",
        type: "prose",
        heading: "Why Windows-only at launch",
        body:
          "The Steam store page lists Windows 7 SP1+ (64-bit) as the minimum OS and Steam Client on Windows 10+ as the runtime. Idea Garden Games has not announced ports to other desktop operating systems or to any console family. Any future port will be confirmed through the Steam store description or the developer's social channels.",
      },
      {
        id: "internal-links",
        type: "prose",
        heading: "Related Pages",
        body: "Cross-reference the launch pages that match each link target.",
        links: [
          { label: "Black Cat Book Club on Steam", href: "/steam", description: "Steam app IDs and Steam-only features." },
          { label: "Black Cat Book Club system requirements", href: "/system-requirements", description: "Minimum PC hardware and SteamOS note." },
        ],
      },
      {
        id: "sources",
        type: "prose",
        heading: "Sources",
        body: "All facts are verified against the sources listed here.",
        links: [
          {
            label: "Black Cat Book Club on Steam (AppID 3972410)",
            href: "https://store.steampowered.com/app/3972410/",
            description: "`official/store` - checked `2026-09-25` - Windows-only confirmation, controller support status.",
          },
        ],
      },
    ],
    faqIds: [],

    schemaTypes: ["BreadcrumbList"],
relatedPageIds: ["steam-availability", "system-requirements"],
    sourceStatus: "official",
    lastReviewed: "2026-09-25",
  },
  {
    id: "price-and-editions",
    translationKey: "price-and-editions",
    locale: "en-US",
    routeKind: "fixed",
    slug: "price",
    url: "/price",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Black Cat Book Club Price, Editions, and Demo Availability",
    seoTitle: "Black Cat Book Club price, intro offer, demo availability",
    metaDescription:
      "Black Cat Book Club launches on Steam at $4.49 with a 10% off introductory offer ending October 9, 2026 (full price $4.99). The demo under AppID 4656850 is free.",
    summary:
      "Status page for Black Cat Book Club launch price, introductory discount, and demo availability on Steam.",
    hero: {
      eyebrow: "Price and Editions",
      subtitle: "How much Black Cat Book Club costs on Steam at launch, what the intro discount is, and what editions or demo options exist.",
      ctas: [
        { label: "Steam", href: "/steam" },
        { label: "Demo", href: "/demo" },
      ],
    },
    quickAnswer:
      "Black Cat Book Club is priced at $4.49 on Steam during its 10% off introductory offer, down from the $4.99 full price; the offer ends October 9, 2026. The demo at AppID 4656850 is free. No paid editions, deluxe editions, or season-pass listings are confirmed as of 2026-09-29.",
    keyFacts: [
      { label: "Launch price", value: "$4.49 with 10% off intro offer" },
      { label: "Full price after intro", value: "$4.99" },
      { label: "Intro offer end date", value: "October 9, 2026" },
      { label: "Demo price", value: "Free" },
      { label: "Paid editions", value: "None confirmed" },
      { label: "Regional pricing outside Steam", value: "Not announced as of 2026-09-29" },
    ],
    modules: [
      {
        id: "launch-price",
        type: "prose",
        heading: "Launch price",
        body:
          "The Steam store page for Black Cat Book Club under AppID 3972410 lists the launch price as $4.49 with a 10% off introductory offer, against the $4.99 full price. The introductory offer ends October 9, 2026, after which Steam will revert to the $4.99 base price. The discount is shown directly on the live store page as of 2026-09-29, so players do not need to wait for the store page to flip from coming-soon to see the launch price.",
      },
      {
        id: "intro-offer",
        type: "prose",
        heading: "Introductory offer timing",
        body:
          "The intro offer ends October 9, 2026 — roughly two weeks after the September 25, 2026 launch. Steam's banner text reads \"INTRODUCTORY OFFER! Offer ends October 9,\" so the discount is a launch-window promo rather than a permanent price drop. If you want the $4.49 price, buy or wishlist before that cutoff; after October 9 the price shown on the store page returns to $4.99.",
      },
      {
        id: "demo-pricing",
        type: "prose",
        heading: "Demo availability",
        body:
          "The demo at AppID 4656850 is free and has been live since June 3, 2026. It remains available throughout launch week, so players can preview the cat-and-library loop without paying.",
      },
      {
        id: "editions",
        type: "prose",
        heading: "Editions and bundles",
        body:
          "No paid editions, deluxe editions, season-pass listings, or sound-track bundles are confirmed for Black Cat Book Club as of 2026-09-29. The Steam store lists only the standard full-game and free-demo entries.",
      },
      {
        id: "internal-links",
        type: "prose",
        heading: "Related Pages",
        body: "Cross-reference the launch pages that match each link target.",
        links: [
          { label: "Black Cat Book Club on Steam", href: "/steam", description: "Steam app IDs and Steam-only features." },
          { label: "Black Cat Book Club demo", href: "/demo", description: "What the demo includes and review aggregate." },
        ],
      },
      {
        id: "sources",
        type: "prose",
        heading: "Sources",
        body: "All facts are verified against the sources listed here.",
        links: [
          {
            label: "Black Cat Book Club on Steam (AppID 3972410)",
            href: "https://store.steampowered.com/app/3972410/",
            description: "`official/store` - checked `2026-09-29` - $4.49 launch price, 10% off introductory offer ending October 9, 2026, $4.99 base price.",
          },
          {
            label: "Black Cat Book Club demo on Steam (AppID 4656850)",
            href: "https://store.steampowered.com/app/4656850/",
            description: "`official/store` - checked `2026-09-29` - Demo free pricing, demo release date.",
          },
        ],
      },
    ],
    faqIds: [],

    schemaTypes: ["BreadcrumbList"],
relatedPageIds: ["steam-availability", "demo"],
    sourceStatus: "official",
    lastReviewed: "2026-09-29",
  },
  {
    id: "multiplayer-status",
    translationKey: "multiplayer-status",
    locale: "en-US",
    routeKind: "fixed",
    slug: "multiplayer",
    url: "/multiplayer",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Is Black Cat Book Club Multiplayer or Co-op?",
    seoTitle: "Is Black Cat Book Club multiplayer or co-op",
    metaDescription:
      "Black Cat Book Club is single-player only on Steam as of 2026-09-25. Co-op and online multiplayer are not announced by Idea Garden Games.",
    summary:
      "Status page confirming Black Cat Book Club is single-player only, with dated statements on co-op and online multiplayer.",
    hero: {
      eyebrow: "Multiplayer Status",
      subtitle: "Whether Black Cat Book Club supports multiplayer or co-op at launch or in future updates.",
      ctas: [
        { label: "Steam", href: "/steam" },
        { label: "Platforms", href: "/platforms" },
      ],
    },
    quickAnswer:
      "Black Cat Book Club is single-player only. The Steam store page lists Singleplayer among the tags, and the developer has not announced co-op or online multiplayer as of 2026-09-25.",
    keyFacts: [
      { label: "Single-player", value: "Confirmed" },
      { label: "Local co-op", value: "Not announced as of 2026-09-25" },
      { label: "Online co-op", value: "Not announced as of 2026-09-25" },
      { label: "PvP", value: "Not announced as of 2026-09-25" },
    ],
    modules: [
      {
        id: "single-player",
        type: "prose",
        heading: "Single-player only",
        body:
          "The Steam store page lists Singleplayer among the tags for Black Cat Book Club, and the Steam features panel does not include co-op or multiplayer entries. The cat-and-library loop is designed around a single player's pace.",
      },
      {
        id: "future-multiplayer",
        type: "prose",
        heading: "Future multiplayer",
        body:
          "Idea Garden Games has not announced co-op, online multiplayer, or PvP as of 2026-09-25. Any future addition would surface through a Steam store description change or a developer social channel announcement.",
      },
      {
        id: "internal-links",
        type: "prose",
        heading: "Related Pages",
        body: "Cross-reference the launch pages that match each link target.",
        links: [
          { label: "Black Cat Book Club on Steam", href: "/steam", description: "Steam app IDs and Steam-only features." },
          { label: "Black Cat Book Club platforms", href: "/platforms", description: "Confirmed Windows-only at launch." },
        ],
      },
      {
        id: "sources",
        type: "prose",
        heading: "Sources",
        body: "All facts are verified against the sources listed here.",
        links: [
          {
            label: "Black Cat Book Club on Steam (AppID 3972410)",
            href: "https://store.steampowered.com/app/3972410/",
            description: "`official/store` - checked `2026-09-25` - Singleplayer confirmation, multiplayer features status.",
          },
        ],
      },
    ],
    faqIds: [],

    schemaTypes: ["BreadcrumbList"],
relatedPageIds: ["steam-availability", "platforms"],
    sourceStatus: "official",
    lastReviewed: "2026-09-25",
  },
];