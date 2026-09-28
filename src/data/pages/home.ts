import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home" },
  faqIds: [],
  schemaTypes: ["WebSite", "BreadcrumbList"],
  h1: "Black Cat Book Club on Steam: Launch Day, Demo, and First Hour",
  seoTitle: "Black Cat Book Club on Steam — Launch Day, Demo, and Gameplay",
  metaDescription:
    "Black Cat Book Club is Idea Garden Games' cozy idle Steam game launching Sep 25, 2026. Find the release date, demo, gameplay loop, and beginner's first hour here.",
  summary:
    "Canonical Black Cat Book Club launch hub covering the September 25, 2026 Steam release, demo status, gameplay loop, and beginner's first hour.",
  hero: {
    eyebrow: "Black Cat Book Club Pre-Launch Hub",
    subtitle:
      "Track the Black Cat Book Club launch status on Steam, confirm platforms, demo contents, gameplay loop, and the first hour of play in one dated reference hub.",
    ctas: [
      { label: "Release Date", href: "/release" },
      { label: "Steam Availability", href: "/steam" },
      { label: "Gameplay Loop", href: "/gameplay" },
      { label: "Steam Store", href: "https://store.steampowered.com/app/3972410/" },
    ],
  },
  quickAnswer:
    "Black Cat Book Club is the Idea Garden Games cozy idle Steam game launching on September 25, 2026 under AppID 3972410. A free demo with AppID 4656850 went live on June 3, 2026 and currently sits at 81% positive from 27 reviews. This hub answers the launch questions most visitors type: release date, Steam availability, gameplay, demo contents, and the first hour of play.",
  keyFacts: [
    { label: "Steam AppID (full)", value: "3972410" },
    { label: "Steam AppID (demo)", value: "4656850" },
    { label: "Planned release", value: "September 25, 2026" },
    { label: "Demo release", value: "June 3, 2026" },
    { label: "Developer", value: "Idea Garden Games" },
    { label: "Demo review", value: "81% positive from 27 reviews" },
    { label: "Audio languages", value: "English only" },
    { label: "Launch platforms", value: "Steam (Windows)" },
  ],
  modules: [
    {
      id: "quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body:
        "Black Cat Book Club is the Idea Garden Games cozy idle Steam game launching on September 25, 2026 under AppID 3972410. A free demo with AppID 4656850 went live on June 3, 2026 and currently sits at 81% positive from 27 reviews. This hub answers the launch questions most visitors type: release date, Steam availability, gameplay, demo contents, and the first hour of play.",
    },
    {
      id: "what-this-is",
      type: "prose",
      heading: "What this Steam game actually is",
      body:
        "This is a cozy idle simulation from self-published developer Idea Garden Games. The Steam store lists the title as Casual, Indie, and Simulation with Cozy, Idler, Desktop Companion, Cats, Magic, Character Customisation, 3D, Management, and Singleplayer tags. The premise is a cat running a magical book club: it reads tomes, learns spells, and grows a small library while the player watches progress accumulate in real time or steps in to direct it.",
    },
    {
      id: "launch-window",
      type: "prose",
      heading: "When the Steam launch happens",
      body:
        "The full game is dated September 25, 2026 on its Steam store page (AppID 3972410). The free demo went live on June 3, 2026 (AppID 4656850), and Idea Garden Games has kept it available through launch so players can preview the loop before paying. No separate pre-order window, early access, or timed unlock has been announced as of 2026-09-25. Pricing is shown as TBD on Steam at research date and will only be visible when the store page flips from coming-soon to live.",
    },
    {
      id: "demo-scope",
      type: "prose",
      heading: "What the Black Cat Book Club demo includes",
      body:
        "The demo exposes the same loop as the full game on a shorter scale: a cat reads in your library, earns Focus, and decodes glyphs to learn spells. The Steam demo page lists six achievements and eleven supported interface languages, with English as the only fully voiced and subtitled language. The 81% positive demo rating from 27 reviews as of 2026-09-25 reflects the same shape of feedback the launch will start with, so it is a useful signal for whether the vibe matches what you want from a cozy idle.",
    },
    {
      id: "first-hour",
      type: "prose",
      heading: "How Black Cat Book Club plays and what to do first",
      body:
        "Reading is the central verb. Your cat selects a tome, devotes Focus to it, and gradually unlocks Memory, Comprehension, and Reading speed upgrades that let the library expand. New tomes open up new spell schools — sigils, summoning seals, alchemy, and astral magic — and each one feeds back into the focus economy. The desktop companion mode lets you shrink the window and pin it on top of other apps so the cat reads while you work. New players should start by finishing the first unlocked tome end to end, decoding a glyph as soon as it appears, and letting the cat rest between sessions so upgrades compound rather than burn through Focus.",
    },
    {
      id: "internal-links",
      type: "prose",
      heading: "Related Pages",
      body: "Cross-reference the launch pages that match each link target.",
      links: [
        { label: "What is Black Cat Book Club on Steam", href: "/about", description: "Confirms identity, developer, and disambiguation against the Asheville reading group." },
        { label: "Black Cat Book Club release date", href: "/release", description: "Full launch timing and demo timeline." },
        { label: "Is Black Cat Book Club on Steam", href: "/steam", description: "Steam app IDs, wishlist, family sharing." },
        { label: "Black Cat Book Club gameplay", href: "/gameplay", description: "Idle reading loop and spell progression." },
        { label: "Black Cat Book Club demo", href: "/demo", description: "What the demo includes and the demo review percentage." },
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
          description: "`official/store` - checked `2026-09-25` - Release date, developer, tags, system requirements, language list, single-player status.",
        },
        {
          label: "Black Cat Book Club demo on Steam (AppID 4656850)",
          href: "https://store.steampowered.com/app/4656850/",
          description: "`official/store` - checked `2026-09-25` - Demo release date, six achievements, eleven interface languages, 81% positive review aggregate from 27 reviews.",
        },
      ],
    },
  ],
  relatedPageIds: ["overview", "release-status", "steam-availability", "gameplay-loop", "demo", "beginner-guide"],
  sourceStatus: "official",
  lastReviewed: "2026-09-25",
};