import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const wikiPages: PageContent[] = [
  {
    id: "wiki",
    translationKey: "wiki",
    locale: "en-US",
    routeKind: "fixed",
    slug: "wiki",
    url: "/wiki",
    pageType: "wiki",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "Black Cat Book Club Reference Index",
    seoTitle: "Black Cat Book Club Reference Index",
    metaDescription:
      "Black Cat Book Club reference index: release status, Steam availability, languages, system requirements, platforms, price, and reviews.",
    summary:
      "Reference index covering the Black Cat Book Club release status, Steam availability, languages, system requirements, platforms, price, and reviews pages.",
    hero: {
      eyebrow: "Reference",
      subtitle: "All Black Cat Book Club reference pages — release, Steam, platforms, languages, system requirements, price, reviews.",
      ctas: [
        { label: "Release", href: "/release" },
        { label: "Steam", href: "/steam" },
        { label: "Languages", href: "/languages" },
      ],
    },
    quickAnswer:
      "This reference index lists every dedicated Black Cat Book Club coverage page on this hub, including the release date, Steam availability, languages, system requirements, platforms, price, and reviews pages.",
    keyFacts: [
      { label: "Steam AppID", value: "3972410" },
      { label: "Demo AppID", value: "4656850" },
      { label: "Planned release", value: "September 25, 2026" },
      { label: "Demo release", value: "June 3, 2026" },
    ],
    modules: [
      {
        id: "wiki-index-note",
        type: "prose",
        heading: "How the reference index is organised",
        body:
          "The release page covers the September 25, 2026 launch date and the June 3, 2026 demo release. The Steam page covers AppID 3972410, AppID 4656850, and Steam-only features. The languages page covers the ten interface languages and English-only audio. The system requirements page covers the PC minimum specifications. The platforms page covers the Windows-only confirmation and unannounced platforms. The price page covers the TBD pricing and free demo. The reviews page covers the 81% positive demo aggregate.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["release-status", "steam-availability", "languages", "system-requirements", "platforms", "price-and-editions", "reviews-and-reception"],
    schemaTypes: ["BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-25",
  },
  {
    id: "overview",
    translationKey: "overview",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "What Is Black Cat Book Club on Steam? An Overview",
    seoTitle: "What is Black Cat Book Club on Steam? A Quick Overview",
    metaDescription:
      "Black Cat Book Club is a cozy idle Steam game by Idea Garden Games, releasing Sep 25, 2026. Get a clear overview, tags, and what the demo includes for the launch.",
    summary:
      "Canonical overview for Black Cat Book Club on Steam: developer, release date, gameplay, demo contents, languages, and disambiguation.",
    hero: {
      eyebrow: "Overview",
      subtitle: "Confirm Black Cat Book Club is the Idea Garden Games Steam game, not the Asheville reading group.",
      ctas: [
        { label: "Release Date", href: "/release" },
        { label: "Steam Availability", href: "/steam" },
        { label: "Demo", href: "/demo" },
      ],
    },
    quickAnswer:
      "Black Cat Book Club is a cozy idle single-player Steam game developed and self-published by Idea Garden Games. The full game releases on September 25, 2026 under AppID 3972410, and a free demo has been live since June 3, 2026 under AppID 4656850. It is a cat-led magical reading simulation with spell schools, customisation, and a desktop companion mode, and it is not connected to the real-world Black Cat Book Club reading group in Asheville, NC.",
    keyFacts: [
      { label: "Developer", value: "Idea Garden Games" },
      { label: "Steam AppID (full)", value: "3972410" },
      { label: "Steam AppID (demo)", value: "4656850" },
      { label: "Release date", value: "September 25, 2026" },
      { label: "Demo release", value: "June 3, 2026" },
      { label: "Genre", value: "Cozy idle simulation" },
      { label: "Tags", value: "Casual, Indie, Simulation, Cozy, Idler, Desktop Companion, Cats, Magic" },
      { label: "Mode", value: "Singleplayer" },
    ],
    modules: [
      {
        id: "what-bcbc",
        type: "prose",
        heading: "What Black Cat Book Club is on Steam",
        body:
          "Black Cat Book Club is the Idea Garden Games title that appears on Steam under AppID 3972410. Idea Garden Games is a small self-published studio, and this is its first release on the platform under that name. The Steam store page describes the project as a cozy idle simulation in which a cat curates a small library, reads tomes, and learns spells. Tags include Casual, Indie, Simulation, Cozy, Idler, Desktop Companion, Cats, Magic, Character Customisation, 3D, Management, and Singleplayer.",
      },
      {
        id: "why-noise",
        type: "prose",
        heading: "Why Black Cat Book Club returns the Asheville reading group too",
        body:
          "Search engines mix two unrelated things under this phrase. One is the Idea Garden Games Steam game. The other is a real-world Black Cat Book Club reading group in Asheville, NC that has been meeting in person for years and has nothing to do with the video game. The Asheville group shows up in autocomplete and in several non-Steam results, which is why a few quick disambiguation notes are worth including on this page.",
      },
      {
        id: "how-it-plays",
        type: "prose",
        heading: "How Black Cat Book Club plays",
        body:
          "The Steam store description frames the game around a small set of verbs: read a tome, earn Focus, decode a glyph, learn a spell, and unlock the next tier of library. Reading is mostly idle, with upgrades like Memory, Comprehension, and Reading Speed letting the cat make better progress on harder tomes over time. There is no documented branching narrative in the store copy, so when the term choices shows up in community discussion it tends to refer to cat customisation rather than to a multi-ending story.",
      },
      {
        id: "magic",
        type: "prose",
        heading: "Magic and spells in Black Cat Book Club",
        body:
          "The four spell schools advertised on the Steam page are sigils, summoning seals, alchemy, and astral magic. Each school is opened by a new tome rather than purchased, and spells are cast by feeding decoded glyphs back into the focus economy. Deeper progression numbers — how many spells per school, exact unlock prerequisites — are not listed beyond the qualitative description, and Idea Garden Games has not published a full spell list as of 2026-09-25.",
      },
      {
        id: "customisation",
        type: "prose",
        heading: "Cat and library customisation",
        body:
          "Character customisation covers fur patterns, eye colours, accessories, and decorations for the library itself. There is no separate Black Cat Book Club endings or branching story route; the choices the player makes are about how their cat and library look rather than how the plot resolves. Any customisation numbers beyond the qualitative store description are not announced as of 2026-09-25.",
      },
      {
        id: "demo-scope",
        type: "prose",
        heading: "What the Black Cat Book Club demo includes",
        body:
          "The demo at AppID 4656850 has been live on Steam since June 3, 2026 and is the same product used for press previews. As of 2026-09-25 it sits at 81% positive from 27 reviews, has six achievements, and supports eleven interface languages. English is the only fully voiced and subtitled language; the other ten carry interface text only.",
      },
      {
        id: "verify-before-buying",
        type: "prose",
        heading: "What you can verify before buying",
        body:
          "Three quick checks confirm you are about to buy the right product. First, the URL on Steam reads store.steampowered.com/app/3972410/. Second, the developer listed is Idea Garden Games. Third, the tags on the store page include Cozy, Idler, Cats, Magic, and Singleplayer. If any of those three details does not match, you are looking at a different product or a noise listing.",
      },
      {
        id: "internal-links",
        type: "prose",
        heading: "Related Pages",
        body: "Cross-reference the launch pages that match each link target.",
        links: [
          { label: "Black Cat Book Club release date", href: "/release", description: "Full launch timing and demo timeline." },
          { label: "Black Cat Book Club on Steam", href: "/steam", description: "Steam app IDs, family sharing, wishlist." },
          { label: "Black Cat Book Club gameplay loop", href: "/gameplay", description: "Idle reading, focus economy, upgrade flow." },
          { label: "Black Cat Book Club demo", href: "/demo", description: "What the demo includes and the demo review aggregate." },
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
            description: "`official/store` - checked `2026-09-25` - Identity, developer, full-game release date, tags, language list, single-player status.",
          },
          {
            label: "Black Cat Book Club demo on Steam (AppID 4656850)",
            href: "https://store.steampowered.com/app/4656850/",
            description: "`official/store` - checked `2026-09-25` - Demo release date, six achievements, eleven interface languages, 81% positive review aggregate from 27 reviews.",
          },
          {
            label: "Steam search results for Black Cat Book Club",
            href: "https://store.steampowered.com/search/?term=Black+Cat+Book+Club",
            description: "`official/store` - checked `2026-09-25` - Confirms AppID 3972410 and AppID 4656850 are the only two BCBC Steam listings.",
          },
        ],
      },
    ],
    faqIds: [],

    schemaTypes: ["BreadcrumbList"],
relatedPageIds: ["release-status", "steam-availability", "gameplay-loop", "demo"],
    sourceStatus: "official",
    lastReviewed: "2026-09-25",
  },
  {
    id: "languages",
    translationKey: "languages",
    locale: "en-US",
    routeKind: "fixed",
    slug: "languages",
    url: "/languages",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Black Cat Book Club Supported Languages and Audio Coverage",
    seoTitle: "Black Cat Book Club supported languages and audio coverage",
    metaDescription:
      "Black Cat Book Club supports 10 interface languages on Steam. English is the only fully voiced and subtitled language as of 2026-09-25.",
    summary:
      "Reference table for Black Cat Book Club interface languages, audio coverage, and language facts derived from the Steam store page.",
    hero: {
      eyebrow: "Languages",
      subtitle: "Which interface languages Black Cat Book Club supports on Steam, and which carries full audio.",
      ctas: [
        { label: "Release", href: "/release" },
        { label: "Steam", href: "/steam" },
      ],
    },
    quickAnswer:
      "The Steam store page for Black Cat Book Club lists ten interface languages: English, French, Italian, German, Spanish (Spain), Japanese, Simplified Chinese, Spanish (Latin America), Portuguese (Brazil), and Russian. English is the only fully voiced and subtitled language as of 2026-09-25; the other nine carry interface text only.",
    keyFacts: [
      { label: "Interface languages", value: "10" },
      { label: "Full audio language", value: "English only" },
      { label: "Source", value: "Steam store page (AppID 3972410)" },
    ],
    modules: [
      {
        id: "language-list",
        type: "data-table",
        heading: "Black Cat Book Club interface language coverage",
        columns: [
          { key: "language", label: "Language" },
          { key: "interface", label: "Interface text" },
          { key: "audio", label: "Audio" },
          { key: "subtitles", label: "Subtitles" },
        ],
        rows: [
          { language: "English", interface: "Yes", audio: "Full", subtitles: "Full" },
          { language: "French", interface: "Yes", audio: "No", subtitles: "No" },
          { language: "Italian", interface: "Yes", audio: "No", subtitles: "No" },
          { language: "German", interface: "Yes", audio: "No", subtitles: "No" },
          { language: "Spanish (Spain)", interface: "Yes", audio: "No", subtitles: "No" },
          { language: "Japanese", interface: "Yes", audio: "No", subtitles: "No" },
          { language: "Simplified Chinese", interface: "Yes", audio: "No", subtitles: "No" },
          { language: "Spanish (Latin America)", interface: "Yes", audio: "No", subtitles: "No" },
          { language: "Portuguese (Brazil)", interface: "Yes", audio: "No", subtitles: "No" },
          { language: "Russian", interface: "Yes", audio: "No", subtitles: "No" },
        ],
      },
      {
        id: "audio-coverage",
        type: "prose",
        heading: "Audio and subtitle coverage",
        body:
          "Full voice acting and subtitle localisation are English-only as of 2026-09-25. The nine non-English interface languages display translated menus, settings, and on-screen text, but spoken dialogue and written subtitles remain in English. Idea Garden Games has not announced expanded audio localisation for any other language at research date.",
      },
      {
        id: "internal-links",
        type: "prose",
        heading: "Related Pages",
        body: "Cross-reference the launch pages that match each link target.",
        links: [
          { label: "What is Black Cat Book Club on Steam", href: "/about", description: "Identity, developer, and full launch context." },
          { label: "Black Cat Book Club release date", href: "/release", description: "Full launch timing and demo timeline." },
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
            description: "`official/store` - checked `2026-09-25` - Language coverage, audio coverage, interface language count.",
          },
        ],
      },
    ],
    faqIds: [],

    schemaTypes: ["BreadcrumbList"],
relatedPageIds: ["overview", "release-status"],
    sourceStatus: "official",
    lastReviewed: "2026-09-25",
  },
];