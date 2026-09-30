import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 | Mohammed Salem",
};

// URLs that match no route at all. It bypasses the locale layout, so it
// brings its own <html> and follows the system colour scheme.
export default function GlobalNotFound() {
  const en = getDictionary("en");
  const ar = getDictionary("ar");

  return (
    <html lang="en" className={`${fontVariables} antialiased`}>
      <body className="flex min-h-dvh items-center">
        <div className="container-page section-y">
          <p className="type-code text-accent-ink">404</p>
          <h1 className="type-title mt-3">{en.notFound.title}</h1>
          <p className="mt-4 max-w-[34rem] text-lede text-muted">{en.notFound.body}</p>
          <p lang="ar" dir="rtl" className="mt-4 max-w-[34rem] text-lede text-muted">
            {ar.notFound.body}
          </p>
          <p className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en"
              className="inline-flex min-h-11 items-center rounded-sheet bg-accent px-5 font-semibold text-on-accent"
            >
              {en.cta.home}
            </Link>
            <Link
              href="/ar"
              lang="ar"
              className="inline-flex min-h-11 items-center rounded-sheet border border-line-strong px-5 font-semibold"
            >
              {ar.cta.home}
            </Link>
          </p>
        </div>
      </body>
    </html>
  );
}
