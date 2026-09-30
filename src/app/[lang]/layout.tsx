import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Backdrop } from "@/components/site/backdrop";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { SoundFx } from "@/components/site/sound-fx";
import { PersonJsonLd } from "@/components/site/json-ld";
import { ThemeProvider } from "@/components/site/theme-provider";
import { RevealObserver } from "@/components/ui/reveal-observer";
import { getContent } from "@/content";
import { dirOf, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { siteUrl } from "@/lib/site";
import { fontVariables } from "../fonts";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Omit<Props, "children">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  const { profile } = getContent(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: { default: t.meta.title, template: `%s | ${profile.name}` },
    description: profile.tagline,
    applicationName: profile.name,
    authors: [{ name: profile.name }],
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", ar: "/ar", "x-default": "/en" },
    },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      siteName: profile.name,
      title: t.meta.title,
      description: profile.tagline,
      locale: lang === "ar" ? "ar" : "en",
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: profile.tagline },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f5f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0e11" },
  ],
};

export default async function LocaleLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <html lang={lang} dir={dirOf(lang)} className={`${fontVariables} antialiased`} suppressHydrationWarning>
      <head>
        {/* Marks the page as scripted before paint, so scroll reveals can
            start hidden without ever hiding content from no-JS visitors.
            Also restores a muted sound choice so the toggle icon never flips. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "var d=document.documentElement;d.setAttribute('data-js','');try{if(localStorage.getItem('sfx')==='off')d.setAttribute('data-sfx','off')}catch(e){}",
          }}
        />
      </head>
      <body className="flex min-h-dvh flex-col">
        <ThemeProvider>
          <Backdrop />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-sheet focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-on-accent"
          >
            {t.a11y.skip}
          </a>
          <SiteHeader lang={lang} />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter lang={lang} />
          <RevealObserver />
          <SoundFx />
        </ThemeProvider>
        <PersonJsonLd lang={lang} />
      </body>
    </html>
  );
}
