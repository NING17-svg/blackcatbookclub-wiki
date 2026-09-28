import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "dark",
  tokens: {
    pageBg: "#0F0B1F",
    surface1: "#1A1430",
    surface2: "#241B3D",
    surface3: "#2F234A",
    surfaceInverse: "#F4E9D2",
    textPrimary: "#F1E9DA",
    textMuted: "#A296B8",
    textInverse: "#16102A",
    textOnAccentPrimary: "#F1E9DA",
    textLink: "#E8B568",
    focusRing: "#C9A0FF",
    line: "#3A2F58",
    lineStrong: "#5A4880",
    accentPrimary: "#9B6BFF",
    accentSecondary: "#C57F4D",
    accentBright: "#F2C879",
    statusConfirmed: "#7FB377",
    statusCaution: "#E8B568",
    statusUnknown: "#A289B8",
  },
  typography: {
    headingFamily:
      "'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif",
    bodyFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    headingWeight: 800,
  },
  shape: {
    radius: "14px",
    borderWidth: "1px",
    shadow:
      "0 6px 18px rgba(15,11,31,0.45), inset 0 1px 0 rgba(242,200,121,0.08)",
    hoverLift: "-2px",
  },
  density: "comfortable",
  background: {
    mode: "gradient",
    overlay: 0.6,
    position: "center top",
  },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "lines", intensity: "low" },
} satisfies ThemeConfig;