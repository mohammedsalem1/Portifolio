import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlockContent, CaseSection } from "@/components/case-study/case-section";
import { AllProjectsLink, CaseStudyPager } from "@/components/case-study/case-study-pager";
import { DecisionList } from "@/components/case-study/decisions";
import { Figures } from "@/components/case-study/figures";
import { SectionNav } from "@/components/case-study/section-nav";
import { TitleBlock } from "@/components/case-study/title-block";
import { featuredProjects, getLocalizedCaseStudy } from "@/content";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

// Only the featured projects have a case study. Anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    featuredProjects.map((project) => ({ lang, slug: project.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const project = getLocalizedCaseStudy(slug, lang);
  if (!project) return {};

  const path = `/projects/${project.slug}`;
  return {
    title: project.name,
    description: project.summary,
    alternates: {
      canonical: `/${lang}${path}`,
      languages: { en: `/en${path}`, ar: `/ar${path}`, "x-default": `/en${path}` },
    },
    openGraph: {
      type: "article",
      url: `/${lang}${path}`,
      title: project.name,
      description: project.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const project = getLocalizedCaseStudy(slug, lang);
  if (!project) notFound();
  const t = getDictionary(lang);

  return (
    <article className="container-page section-y">
      <p data-reveal>
        <AllProjectsLink lang={lang} />
      </p>

      <header data-reveal className="mt-6 max-w-[48rem]">
        <p className="type-code text-accent-ink">
          <span dir="ltr">~/projects/{project.slug}</span>
        </p>
        <h1 className="type-title mt-3">{project.name}</h1>
        <p className="mt-4 text-lede text-muted">{project.summary}</p>
      </header>

      <TitleBlock project={project} lang={lang} className="mt-10" />
      <Figures figures={project.figures} label={t.projects.figures} className="mt-10" />

      <div className="mt-12 grid gap-x-16 gap-y-8 lg:mt-16 lg:grid-cols-[13rem_minmax(0,42rem)]">
        {/* Sticky below the 64px site header. */}
        <SectionNav lang={lang} className="lg:sticky lg:top-24 lg:self-start" />

        <div>
          <CaseSection id="problem" title={t.caseStudy.problem}>
            <BlockContent block={project.problem} lang={lang} />
          </CaseSection>
          <CaseSection id="approach" title={t.caseStudy.approach}>
            <BlockContent block={project.approach} lang={lang} />
          </CaseSection>
          <CaseSection id="implementation" title={t.caseStudy.implementation}>
            <BlockContent block={project.implementation} lang={lang} />
          </CaseSection>
          <CaseSection id="decisions" title={t.caseStudy.decisions}>
            <DecisionList decisions={project.decisions} lang={lang} />
          </CaseSection>
          <CaseSection id="status" title={t.caseStudy.status}>
            <BlockContent block={project.outcome} lang={lang} />
          </CaseSection>
          <CaseSection id="learned" title={t.caseStudy.learned}>
            <BlockContent block={project.learned} lang={lang} />
          </CaseSection>
        </div>
      </div>

      <CaseStudyPager slug={project.slug} lang={lang} />
    </article>
  );
}
