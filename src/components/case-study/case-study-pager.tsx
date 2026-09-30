import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { TextLink } from "@/components/ui/text-link";
import { featuredProjects } from "@/content";
import { type Locale, localeHref } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/** Padding makes the target 44px tall; the underline stays on the text. */
const standaloneLink = "inline-block bg-clip-content py-2 font-medium";

/** "All projects", back to the projects section of the home page. */
export function AllProjectsLink({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  return (
    <TextLink href={localeHref(lang, "/#projects")} className={standaloneLink}>
      <ArrowLeftIcon aria-hidden="true" weight="bold" className="flip-rtl me-2 inline-block align-[-0.125em]" />
      {t.cta.allProjects}
    </TextLink>
  );
}

/** End of a case study: the next featured case study, and the way back. */
export function CaseStudyPager({ slug, lang }: { slug: string; lang: Locale }) {
  const t = getDictionary(lang);
  const index = featuredProjects.findIndex((project) => project.slug === slug);
  const next =
    featuredProjects.length > 1 ? featuredProjects[(index + 1) % featuredProjects.length] : undefined;

  return (
    <nav
      aria-label={t.caseStudy.more}
      className="mt-16 flex flex-col gap-4 border-t border-line pt-8 md:mt-20 md:flex-row md:items-end md:justify-between"
    >
      {next ? (
        <p>
          <span className="block text-small text-muted">{t.cta.nextCaseStudy}</span>
          <TextLink
            href={localeHref(lang, `/projects/${next.slug}`)}
            className="type-heading inline-block bg-clip-content py-2"
          >
            {next.name}
            <ArrowRightIcon aria-hidden="true" weight="bold" className="flip-rtl ms-2 inline-block align-[-0.125em]" />
          </TextLink>
        </p>
      ) : null}
      <p>
        <AllProjectsLink lang={lang} />
      </p>
    </nav>
  );
}
