import { site, telegramUrl } from "@/config/site";
import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { siteUrl } from "@/lib/site";

/** schema.org Person, built only from the content files. */
export function PersonJsonLd({ lang }: { lang: Locale }) {
  const { profile, stack } = getContent(lang);
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.tagline,
    url: `${siteUrl}/${lang}`,
    email: `mailto:${site.email}`,
    sameAs: [site.github, site.linkedin, ...(telegramUrl ? [telegramUrl] : [])],
    alumniOf: { "@type": "CollegeOrUniversity", name: "Islamic University of Gaza" },
    knowsAbout: stack.map((tech) => tech.name),
  };

  return (
    <script
      type="application/ld+json"
      // "<" is escaped so the JSON can never close the script element early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
