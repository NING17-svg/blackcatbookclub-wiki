import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Black Cat Book Club",
  brandMark: "BCBC",
  gameName: "Black Cat Book Club",
  domain: "blackcatbookclub.wiki",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://blackcatbookclub.wiki").replace(/\/$/, ""),
  description:
    "Black Cat Book Club wiki — canonical Steam launch hub for the cozy idle reading game from Idea Garden Games.",
  tagline: "Black Cat Book Club guide hub — release, gameplay, magic, and Steam availability in one place.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Black Cat Book Club Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Steam store page (AppID 3972410)",
      href: "https://store.steampowered.com/app/3972410/",
      description: "Official Idea Garden Games store page for Black Cat Book Club.",
    },
    {
      label: "Steam demo store page (AppID 4656850)",
      href: "https://store.steampowered.com/app/4656850/",
      description: "Official demo store page for Black Cat Book Club.",
    },
  ],
  disclaimer:
    "Black Cat Book Club wiki — unofficial launch-day guide. Facts come from the Steam store page and Idea Garden Games developer posts.",
};
