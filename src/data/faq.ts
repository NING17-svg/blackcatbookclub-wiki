import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  {
    id: "what-is-this-site",
    question: "What is this guide site for?",
    answer:
      "This site is the launch-ready Black Cat Book Club guide hub. It collects the September 25, 2026 Steam release, the free demo under AppID 4656850, the gameplay loop, and the first-hour priorities in one place for launch-day readers.",
    pageIds: ["home", "faq", "overview"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "is-official",
    question: "Is this an official game website?",
    answer:
      "No. This is an unofficial guide site. The official product is the Idea Garden Games Steam store page for AppID 3972410; this site republishes those facts alongside launch-day coverage of the demo and gameplay loop.",
    pageIds: ["home", "faq", "overview"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "release-date-known",
    question: "Where should release date information come from?",
    answer:
      "Use only the official Steam store page (AppID 3972410), the demo store page (AppID 4656850), or Idea Garden Games developer posts for release timing. The full-game release date is September 25, 2026 and the demo release date is June 3, 2026 as of 2026-09-25.",
    pageIds: ["release-status", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "platforms-known",
    question: "Which platforms is Black Cat Book Club on?",
    answer:
      "Confirmed at launch is Windows via Steam under AppID 3972410. Mac, Linux, consoles, and Steam Deck verification are not announced as of 2026-09-25.",
    pageIds: ["release-status", "faq", "wiki"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "guide-depth",
    question: "What does the guides hub cover?",
    answer:
      "The guides hub covers the gameplay loop, the four spell schools (sigils, summoning seals, alchemy, astral magic), cat and library customisation, the beginner's first hour, and the desktop companion mode.",
    pageIds: ["guides", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
];
