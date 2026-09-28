import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const guidePages: PageContent[] = [
  {
    id: "guides",
    translationKey: "guides",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides",
    url: "/guides",
    pageType: "guides",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "Black Cat Book Club Guides Hub",
    seoTitle: "Black Cat Book Club Guides Hub",
    metaDescription:
      "Black Cat Book Club guides hub: gameplay loop, magic system, customisation, beginner guide, and desktop companion mode.",
    summary:
      "Guides hub covering Black Cat Book Club gameplay loop, magic system, customisation, beginner guide, and desktop companion mode.",
    hero: {
      eyebrow: "Guides",
      subtitle: "All Black Cat Book Club guides in one place — gameplay, magic, customisation, beginner, and desktop companion.",
      ctas: [
        { label: "Gameplay Loop", href: "/gameplay" },
        { label: "Magic System", href: "/magic" },
        { label: "Beginner Guide", href: "/beginner-guide" },
      ],
    },
    quickAnswer:
      "The Black Cat Book Club guides hub collects the gameplay loop, magic system, customisation, beginner guide, and desktop companion mode pages in one index so launch-day readers can move from one question to the next.",
    keyFacts: [
      { label: "Gameplay verb", value: "Read tomes, earn Focus, decode glyphs" },
      { label: "Spell schools", value: "4 (sigils, summoning seals, alchemy, astral magic)" },
      { label: "Customisation", value: "Fur, eyes, accessories, library decorations" },
    ],
    modules: [
      {
        id: "guides-index",
        type: "prose",
        heading: "How the guides hub is organised",
        body:
          "The gameplay page covers the idle reading loop and Focus economy. The magic page covers the four spell schools and how tomes unlock them. The customisation page covers fur patterns, eye colours, accessories, and library decorations. The beginner guide covers first-hour priorities. The desktop companion page covers the always-on-top window mode.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["gameplay-loop", "magic-system", "customisation", "beginner-guide", "desktop-companion"],
    schemaTypes: ["BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-25",
  },
  {
    id: "gameplay-loop",
    translationKey: "gameplay-loop",
    locale: "en-US",
    routeKind: "fixed",
    slug: "gameplay",
    url: "/gameplay",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "How Black Cat Book Club Plays: The Idle Reading Loop",
    seoTitle: "Black Cat Book Club gameplay: idle reading and Focus economy",
    metaDescription:
      "Black Cat Book Club's core loop: read tomes, earn Focus, decode glyphs, unlock spells, and upgrade Memory, Comprehension, and Reading speed.",
    summary:
      "Guide to the Black Cat Book Club gameplay loop: idle reading, tome unlocks, Focus economy, and the cat's autonomy between sessions.",
    hero: {
      eyebrow: "Gameplay Loop",
      subtitle: "How the cat-and-library reading loop in Black Cat Book Club actually plays.",
      ctas: [
        { label: "Magic System", href: "/magic" },
        { label: "Customisation", href: "/customisation" },
        { label: "Beginner Guide", href: "/beginner-guide" },
      ],
    },
    quickAnswer:
      "Black Cat Book Club is an idle cozy game built around a small set of verbs: read a tome, earn Focus, decode a glyph, learn a spell, and unlock the next tier of library. Reading is mostly idle, with upgrades like Memory, Comprehension, and Reading Speed letting the cat progress faster on harder tomes over time.",
    keyFacts: [
      { label: "Core verb", value: "Read tomes" },
      { label: "Resource", value: "Focus" },
      { label: "Minigame", value: "Glyph decoding" },
      { label: "Upgrade types", value: "Memory, Comprehension, Reading Speed" },
      { label: "Cat autonomy", value: "Yes, between sessions" },
    ],
    modules: [
      {
        id: "core-loop",
        type: "prose",
        heading: "The core idle loop",
        body:
          "Your cat selects a tome, devotes Focus to it, and reads over time. As the cat reads, it accumulates comprehension progress and produces decoded glyphs that feed back into the focus economy. New tomes unlock spell schools — sigils, summoning seals, alchemy, and astral magic — and each spell school opens new customisation and progression paths.",
      },
      {
        id: "upgrades",
        type: "prose",
        heading: "Upgrade types",
        body:
          "Three upgrade families show up in the Steam store description: Memory lets the cat retain more from each tome, Comprehension lets it process harder tomes, and Reading Speed determines how quickly it works through a tome. Together they govern how fast the library grows and how quickly spell unlocks open up.",
      },
      {
        id: "focus-economy",
        type: "prose",
        heading: "The Focus economy",
        body:
          "Focus is the shared pool of attention the cat draws on while reading. The cat regenerates Focus between sessions and can be replenished by some customisation items. Players manage Focus by pacing tomes and resting the cat so upgrades compound rather than burning through the pool.",
      },
      {
        id: "internal-links",
        type: "prose",
        heading: "Related Pages",
        body: "Cross-reference the launch pages that match each link target.",
        links: [
          { label: "Black Cat Book Club magic system", href: "/magic", description: "Spell schools, sigils, and glyph decoding." },
          { label: "Black Cat Book Club customisation", href: "/customisation", description: "Fur patterns, eye colours, accessories, decorations." },
          { label: "Black Cat Book Club beginner guide", href: "/beginner-guide", description: "First tomes, focus economy, what to do in the first hour." },
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
            description: "`official/store` - checked `2026-09-25` - Idle reading loop, focus economy, upgrade types.",
          },
        ],
      },
    ],
    faqIds: [],

    schemaTypes: ["BreadcrumbList"],
relatedPageIds: ["magic-system", "customisation", "beginner-guide"],
    sourceStatus: "official",
    lastReviewed: "2026-09-25",
  },
  {
    id: "magic-system",
    translationKey: "magic-system",
    locale: "en-US",
    routeKind: "fixed",
    slug: "magic",
    url: "/magic",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Black Cat Book Club Spells: Sigils, Seals, Alchemy, and Astral Magic",
    seoTitle: "Black Cat Book Club spells: sigils, summoning seals, alchemy, astral",
    metaDescription:
      "Black Cat Book Club features four spell schools — sigils, summoning seals, alchemy, and astral magic — unlocked by reading and decoding glyphs.",
    summary:
      "Guide to the four Black Cat Book Club spell schools, how tomes unlock them, and how glyphs feed into the spellcasting flow.",
    hero: {
      eyebrow: "Magic System",
      subtitle: "What spells the cat can learn and how each spell school unlocks.",
      ctas: [
        { label: "Gameplay Loop", href: "/gameplay" },
        { label: "Beginner Guide", href: "/beginner-guide" },
      ],
    },
    quickAnswer:
      "Black Cat Book Club advertises four spell schools: sigils, summoning seals, alchemy, and astral magic. Each school is opened by reading a new tome rather than purchased, and the cat casts spells by feeding decoded glyphs back into the focus economy.",
    keyFacts: [
      { label: "Spell schools", value: "Sigils, summoning seals, alchemy, astral magic" },
      { label: "Unlock method", value: "Reading new tomes" },
      { label: "Spell input", value: "Decoded glyphs" },
      { label: "Full spell list", value: "Not announced as of 2026-09-25" },
    ],
    modules: [
      {
        id: "spell-schools",
        type: "prose",
        heading: "Four spell schools",
        body:
          "Sigils are inscribed patterns the cat traces during the glyph minigame. Summoning seals tie glyphs to magical artifacts the cat has readied in the library. Alchemy combines decoded glyphs with reagents gathered through customisation. Astral magic is the highest-tier school and is tied to the deepest tomes.",
      },
      {
        id: "tome-progression",
        type: "prose",
        heading: "How tomes open magic",
        body:
          "Each spell school is opened by reading a new tome rather than purchased from a vendor. As the cat reads deeper into a tome, decoded glyphs appear and feed back into the focus economy. The cat can then choose which school to specialise in, but the deeper progression numbers and full spell lists are not published as of 2026-09-25.",
      },
      {
        id: "glyph-minigame",
        type: "prose",
        heading: "The glyph decoding minigame",
        body:
          "Glyphs appear as you read. Decoding a glyph spends some Focus and unlocks the next fragment of the spell school. Faster glyph decoding is one of the main advantages of upgrading Reading Speed and Comprehension.",
      },
      {
        id: "internal-links",
        type: "prose",
        heading: "Related Pages",
        body: "Cross-reference the launch pages that match each link target.",
        links: [
          { label: "Black Cat Book Club gameplay loop", href: "/gameplay", description: "Idle reading loop and Focus economy." },
          { label: "Black Cat Book Club beginner guide", href: "/beginner-guide", description: "First tomes, focus economy, what to do in the first hour." },
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
            description: "`official/store` - checked `2026-09-25` - Four spell schools, tome-driven unlocks, glyph decoding.",
          },
        ],
      },
    ],
    faqIds: [],

    schemaTypes: ["BreadcrumbList"],
relatedPageIds: ["gameplay-loop", "beginner-guide"],
    sourceStatus: "official",
    lastReviewed: "2026-09-25",
  },
  {
    id: "customisation",
    translationKey: "customisation",
    locale: "en-US",
    routeKind: "fixed",
    slug: "customisation",
    url: "/customisation",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Black Cat Book Club Customisation: Fur, Eyes, Accessories, Decorations",
    seoTitle: "Black Cat Book Club cat customisation — fur, eyes, accessories, decorations",
    metaDescription:
      "Black Cat Book Club customisation covers fur patterns, eye colours, accessories, and library decorations. No branching narrative confirmed.",
    summary:
      "Guide to Black Cat Book Club customisation: fur patterns, eye colours, accessories, magical artifacts, and library decorations.",
    hero: {
      eyebrow: "Customisation",
      subtitle: "What you can change about the cat and the library — and what customisation does not cover.",
      ctas: [
        { label: "Gameplay Loop", href: "/gameplay" },
        { label: "Overview", href: "/about" },
        { label: "Desktop Companion", href: "/desktop-companion" },
      ],
    },
    quickAnswer:
      "Black Cat Book Club customisation covers fur patterns, eye colours, accessories, magical artifacts, and library decorations. The Steam store description does not document a branching narrative; the choices the player makes are about how their cat and library look rather than how a multi-ending plot resolves.",
    keyFacts: [
      { label: "Fur patterns", value: "Customisable" },
      { label: "Eye colours", value: "Customisable" },
      { label: "Accessories", value: "Customisable" },
      { label: "Library decorations", value: "Customisable" },
      { label: "Branching narrative", value: "Not confirmed" },
    ],
    modules: [
      {
        id: "cat-customisation",
        type: "prose",
        heading: "Cat customisation",
        body:
          "The cat's fur pattern and eye colour are configurable from the start. Accessories and magical artifacts can be unlocked as the cat reads more tomes and decodes more glyphs. There is no separate Black Cat Book Club endings route — choices in community discussion map to customisation, not to a multi-ending plot.",
      },
      {
        id: "library-customisation",
        type: "prose",
        heading: "Library decorations",
        body:
          "The library itself can be decorated with magical artifacts and ornaments earned through spell progression. Decorations change the look of the library but do not alter gameplay mechanics.",
      },
      {
        id: "internal-links",
        type: "prose",
        heading: "Related Pages",
        body: "Cross-reference the launch pages that match each link target.",
        links: [
          { label: "Black Cat Book Club gameplay loop", href: "/gameplay", description: "Idle reading loop and Focus economy." },
          { label: "What is Black Cat Book Club on Steam", href: "/about", description: "Identity, developer, and disambiguation." },
          { label: "Black Cat Book Club desktop companion", href: "/desktop-companion", description: "Resize, zoom, always-on-top behaviour." },
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
            description: "`official/store` - checked `2026-09-25` - Customisation scope, character customisation tag.",
          },
        ],
      },
    ],
    faqIds: [],

    schemaTypes: ["BreadcrumbList"],
relatedPageIds: ["gameplay-loop", "overview", "desktop-companion"],
    sourceStatus: "official",
    lastReviewed: "2026-09-25",
  },
  {
    id: "desktop-companion",
    translationKey: "desktop-companion",
    locale: "en-US",
    routeKind: "fixed",
    slug: "desktop-companion",
    url: "/desktop-companion",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Black Cat Book Club Desktop Companion Mode",
    seoTitle: "Black Cat Book Club desktop companion mode (resize, zoom, always-on-top)",
    metaDescription:
      "Black Cat Book Club includes a desktop companion mode that lets the cat keep reading while the player uses other apps — resize, zoom, and always-on-top.",
    summary:
      "Explanation of Black Cat Book Club desktop companion mode: window behaviour, requirements, and how it fits the cozy idle loop.",
    hero: {
      eyebrow: "Desktop Companion",
      subtitle: "How the desktop companion mode works in Black Cat Book Club.",
      ctas: [
        { label: "Overview", href: "/about" },
        { label: "Gameplay Loop", href: "/gameplay" },
        { label: "Customisation", href: "/customisation" },
      ],
    },
    quickAnswer:
      "Black Cat Book Club includes a desktop companion mode that lets you shrink the library window, resize it, zoom, and pin it on top of other apps. The mode requires Steam to keep running and the game to remain open; the cat keeps reading while you work or study in other windows.",
    keyFacts: [
      { label: "Always-on-top", value: "Supported" },
      { label: "Resize / zoom", value: "Supported" },
      { label: "Steam required", value: "Yes" },
      { label: "Tags", value: "Desktop Companion, Cozy, Idler" },
    ],
    modules: [
      {
        id: "what-it-does",
        type: "prose",
        heading: "What the desktop companion does",
        body:
          "Desktop companion mode shrinks the library window into a smaller footprint, lets you resize and zoom it to taste, and pins it on top of other applications. The cat keeps reading and earning Focus while you work in other windows, which is the most distinctive part of the launch pitch compared with a standard cozy idle on Steam.",
      },
      {
        id: "requirements",
        type: "prose",
        heading: "Requirements",
        body:
          "Steam must be running and the game must remain open in the foreground or pinned on top. The desktop companion mode is one of the tags on the Steam store page and is fully part of the single-player experience; no extra subscription is required.",
      },
      {
        id: "internal-links",
        type: "prose",
        heading: "Related Pages",
        body: "Cross-reference the launch pages that match each link target.",
        links: [
          { label: "What is Black Cat Book Club on Steam", href: "/about", description: "Identity, developer, and disambiguation." },
          { label: "Black Cat Book Club gameplay loop", href: "/gameplay", description: "Idle reading loop and Focus economy." },
          { label: "Black Cat Book Club customisation", href: "/customisation", description: "Fur patterns, eye colours, accessories, decorations." },
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
            description: "`official/store` - checked `2026-09-25` - Desktop Companion tag, window behaviour.",
          },
        ],
      },
    ],
    faqIds: [],

    schemaTypes: ["BreadcrumbList"],
relatedPageIds: ["overview", "gameplay-loop", "customisation"],
    sourceStatus: "official",
    lastReviewed: "2026-09-25",
  },
  {
    id: "beginner-guide",
    translationKey: "beginner-guide",
    locale: "en-US",
    routeKind: "fixed",
    slug: "beginner-guide",
    url: "/beginner-guide",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Black Cat Book Club Beginner Guide: First Hour and First Tomes",
    seoTitle: "Black Cat Book Club beginner guide — first hours, focus economy, tomes",
    metaDescription:
      "Black Cat Book Club beginner guide: finish the first unlocked tome, decode your first glyph, pace Focus, and unlock the next spell school.",
    summary:
      "Beginner guide to Black Cat Book Club: first tomes, glyph economy, idle vs active play, and what unlocks after the first hour.",
    hero: {
      eyebrow: "Beginner Guide",
        subtitle: "How to spend your first hour in Black Cat Book Club without burning through Focus.",
      ctas: [
        { label: "Gameplay Loop", href: "/gameplay" },
        { label: "Magic System", href: "/magic" },
        { label: "Customisation", href: "/customisation" },
      ],
    },
    quickAnswer:
      "Start by finishing the first unlocked tome end to end, decode a glyph as soon as it appears, and let the cat rest between sessions so upgrades compound rather than burn through Focus. The first spell school opens once the first tome completes, and the cat's customisation path is decided by which artifacts you read.",
    keyFacts: [
      { label: "First goal", value: "Finish the first tome" },
      { label: "First minigame", value: "Decode a glyph" },
      { label: "Pacing", value: "Rest the cat between sessions" },
      { label: "First unlock", value: "First spell school" },
    ],
    modules: [
      {
        id: "first-hour",
        type: "prose",
        heading: "First hour priorities",
        body:
          "Begin by selecting the first unlocked tome and devoting Focus to it. Avoid swapping tomes mid-read so the cat's progress accumulates rather than resets. As glyphs appear, decode them — even when the spell school is not yet open — because decoded glyphs feed back into the focus economy.",
      },
      {
        id: "focus-pacing",
        type: "prose",
        heading: "Pacing Focus",
        body:
          "Focus regenerates between sessions. Letting the cat rest in the library between active play sessions lets upgrades compound. Burning through Focus without rest locks you out of glyph decoding until it regenerates.",
      },
      {
        id: "unlocks",
        type: "prose",
        heading: "What unlocks next",
        body:
          "Finishing the first tome opens the first spell school — usually sigils. Subsequent tomes open summoning seals, alchemy, and astral magic in order. Customisation options for the cat and library open as you decode more glyphs and complete more tomes.",
      },
      {
        id: "internal-links",
        type: "prose",
        heading: "Related Pages",
        body: "Cross-reference the launch pages that match each link target.",
        links: [
          { label: "Black Cat Book Club gameplay loop", href: "/gameplay", description: "Idle reading loop and Focus economy." },
          { label: "Black Cat Book Club magic system", href: "/magic", description: "Spell schools, sigils, glyph decoding." },
          { label: "Black Cat Book Club customisation", href: "/customisation", description: "Fur patterns, eye colours, accessories, decorations." },
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
            description: "`official/store` - checked `2026-09-25` - Beginner mechanics, focus economy, unlock flow.",
          },
        ],
      },
    ],
    faqIds: [],

    schemaTypes: ["BreadcrumbList"],
relatedPageIds: ["gameplay-loop", "magic-system", "customisation"],
    sourceStatus: "official",
    lastReviewed: "2026-09-25",
  },
  {
    id: "demo",
    translationKey: "demo",
    locale: "en-US",
    routeKind: "fixed",
    slug: "demo",
    url: "/demo",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Black Cat Book Club Demo on Steam (AppID 4656850)",
    seoTitle: "Black Cat Book Club demo (AppID 4656850) — what's included",
    metaDescription:
      "Black Cat Book Club demo is free on Steam under AppID 4656850 with six achievements and eleven interface languages. 81% positive from 27 reviews as of 2026-09-25.",
    summary:
      "Explanation of the Black Cat Book Club demo: AppID, release date, contents, achievements, language coverage, and the demo review aggregate.",
    hero: {
      eyebrow: "Demo",
      subtitle: "What the Black Cat Book Club demo includes and how it compares to the full game.",
      ctas: [
        { label: "Release Date", href: "/release" },
        { label: "Steam", href: "/steam" },
        { label: "Reviews", href: "/reviews" },
      ],
    },
    quickAnswer:
      "The Black Cat Book Club demo is free on Steam under AppID 4656850 and has been live since June 3, 2026. It includes the cat-and-library loop at smaller scale, six achievements, and eleven interface languages. As of 2026-09-25 it sits at 81% positive from 27 reviews; English is the only fully voiced and subtitled language.",
    keyFacts: [
      { label: "Demo AppID", value: "4656850" },
      { label: "Demo release", value: "June 3, 2026" },
      { label: "Price", value: "Free" },
      { label: "Achievements", value: "6" },
      { label: "Interface languages", value: "11" },
      { label: "Review aggregate", value: "81% positive from 27 reviews as of 2026-09-25" },
    ],
    modules: [
      {
        id: "what-demo-includes",
        type: "prose",
        heading: "What the demo includes",
        body:
          "The demo exposes the cat-and-library loop at a smaller scale, the focus economy, and the four spell schools as you read tomes. It does not promise parity with the full game's library size or endgame upgrades, and Idea Garden Games has not published a side-by-side feature checklist. The 81% positive aggregate is therefore the closest launch-day signal available.",
      },
      {
        id: "demo-coverage",
        type: "data-table",
        heading: "Demo at a glance",
        columns: [
          { key: "detail", label: "Detail" },
          { key: "value", label: "Value" },
        ],
        rows: [
          { detail: "AppID", value: "4656850" },
          { detail: "Release date", value: "June 3, 2026" },
          { detail: "Price", value: "Free" },
          { detail: "Achievements", value: "6" },
          { detail: "Interface languages", value: "11 (English full audio + subtitles)" },
          { detail: "Review aggregate", value: "81% positive from 27 reviews" },
        ],
      },
      {
        id: "how-to-install",
        type: "prose",
        heading: "How to install the demo",
        body:
          "Open the Steam store page for AppID 4656850, click the install button, and launch the demo from your Steam library. The demo shares a Steam library entry with the full game, so your save state is on the same account.",
      },
      {
        id: "internal-links",
        type: "prose",
        heading: "Related Pages",
        body: "Cross-reference the launch pages that match each link target.",
        links: [
          { label: "Black Cat Book Club release date", href: "/release", description: "Full launch timing and demo timeline." },
          { label: "Black Cat Book Club on Steam", href: "/steam", description: "Steam app IDs and Steam-only features." },
          { label: "Black Cat Book Club reviews", href: "/reviews", description: "Demo aggregate and full-game reviews status." },
        ],
      },
      {
        id: "sources",
        type: "prose",
        heading: "Sources",
        body: "All facts are verified against the sources listed here.",
        links: [
          {
            label: "Black Cat Book Club demo on Steam (AppID 4656850)",
            href: "https://store.steampowered.com/app/4656850/",
            description: "`official/store` - checked `2026-09-25` - Demo release date, six achievements, eleven interface languages, 81% positive review aggregate.",
          },
        ],
      },
    ],
    faqIds: [],

    schemaTypes: ["BreadcrumbList"],
relatedPageIds: ["release-status", "steam-availability", "reviews-and-reception"],
    sourceStatus: "official",
    lastReviewed: "2026-09-25",
  },
  {
    id: "reviews-and-reception",
    translationKey: "reviews-and-reception",
    locale: "en-US",
    routeKind: "fixed",
    slug: "reviews",
    url: "/reviews",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Black Cat Book Club Reviews and Early Reception",
    seoTitle: "Black Cat Book Club reviews and early reception signals",
    metaDescription:
      "Black Cat Book Club demo aggregate: 81% positive from 27 reviews as of 2026-09-25. Full-game reviews are not available as of 2026-09-25.",
    summary:
      "Reference for Black Cat Book Club early reception signals: demo review aggregate and full-game review status.",
    hero: {
      eyebrow: "Reviews and Reception",
      subtitle: "What reviewers and players are saying about Black Cat Book Club as of 2026-09-25.",
      ctas: [
        { label: "Demo", href: "/demo" },
        { label: "Overview", href: "/about" },
      ],
    },
    quickAnswer:
      "The Black Cat Book Club demo at AppID 4656850 sits at 81% positive from 27 reviews as of 2026-09-25. Full-game player reviews are not available as of 2026-09-25; the September 25, 2026 launch is the first day full-game reviews can be posted.",
    keyFacts: [
      { label: "Demo aggregate", value: "81% positive from 27 reviews" },
      { label: "Full-game reviews", value: "Not available as of 2026-09-25" },
      { label: "Source", value: "Steam demo store page (AppID 4656850)" },
    ],
    modules: [
      {
        id: "demo-reception",
        type: "prose",
        heading: "Demo reception",
        body:
          "The demo at AppID 4656850 sits at 81% positive from 27 reviews as of 2026-09-25. The reviews reflect the same shape of feedback the launch will start with, so the aggregate is the closest signal available about how the cozy idle loop lands with players.",
      },
      {
        id: "full-game-reviews",
        type: "prose",
        heading: "Full-game reviews",
        body:
          "Full-game player reviews are not available as of 2026-09-25. The Steam store page for the full game under AppID 3972410 will collect the first batch of reviews after launch on September 25, 2026.",
      },
      {
        id: "internal-links",
        type: "prose",
        heading: "Related Pages",
        body: "Cross-reference the launch pages that match each link target.",
        links: [
          { label: "Black Cat Book Club demo", href: "/demo", description: "What the demo includes and review aggregate." },
          { label: "What is Black Cat Book Club on Steam", href: "/about", description: "Identity, developer, and disambiguation." },
        ],
      },
      {
        id: "sources",
        type: "prose",
        heading: "Sources",
        body: "All facts are verified against the sources listed here.",
        links: [
          {
            label: "Black Cat Book Club demo on Steam (AppID 4656850)",
            href: "https://store.steampowered.com/app/4656850/",
            description: "`official/store` - checked `2026-09-25` - 81% positive demo review aggregate, 27 reviews.",
          },
        ],
      },
    ],
    faqIds: [],

    schemaTypes: ["BreadcrumbList"],
relatedPageIds: ["demo", "overview"],
    sourceStatus: "official",
    lastReviewed: "2026-09-25",
  },
];