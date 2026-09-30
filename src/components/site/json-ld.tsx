import { profile } from "@/content/profile";
import { skillGroups } from "@/content/skills";
import { siteUrl } from "@/lib/site";

/** schema.org Person, built only from the content files. */
export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.tagline,
    url: siteUrl,
    sameAs: [profile.github, profile.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Islamic University of Gaza",
    },
    knowsAbout: skillGroups.flatMap((group) => group.items),
  };

  return (
    <script
      type="application/ld+json"
      // "<" is escaped so the JSON can never close the script element early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
