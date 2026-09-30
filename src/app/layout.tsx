import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Mona_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/site/theme-provider";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { PersonJsonLd } from "@/components/site/json-ld";
import { profile } from "@/content/profile";
import { siteUrl } from "@/lib/site";
import "./globals.css";

// One family for display and body. The width axis gives headlines their weight.
const mona = Mona_Sans({
  variable: "--font-mona",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

// Used only for real identifiers: routes, module names, counts.
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const title = `${profile.name} | ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description: profile.tagline,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: profile.name,
    title,
    description: profile.tagline,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6f8" },
    { media: "(prefers-color-scheme: dark)", color: "#0b2545" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${mona.variable} ${jetbrains.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh flex-col">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sheet focus:bg-signal focus:px-4 focus:py-2 focus:font-semibold focus:text-on-signal"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
        <PersonJsonLd />
      </body>
    </html>
  );
}
