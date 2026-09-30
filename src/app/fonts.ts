import { IBM_Plex_Sans_Arabic, JetBrains_Mono, Mona_Sans } from "next/font/google";

// Latin display and body. The width axis gives headlines their weight.
export const mona = Mona_Sans({
  variable: "--font-mona",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

// Arabic pages. Its Latin glyphs (IBM Plex Sans) set the Latin runs inside
// Arabic text (NestJS, PostgreSQL), so a mixed line reads as one voice.
// No generated Arial fallback: it would take over the Arabic glyphs while
// the font loads with a mismatched shape.
export const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
  fallback: [],
});

// Real identifiers only: routes, module names, commands.
export const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const fontVariables = `${mona.variable} ${plexArabic.variable} ${jetbrains.variable}`;
