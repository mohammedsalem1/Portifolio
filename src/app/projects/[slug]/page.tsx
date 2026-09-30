import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlockContent, CaseSection } from "@/components/case-study/case-section";
import {
  AllProjectsLink,
  CaseStudyPager,
} from "@/components/case-study/case-study-pager";
import { DecisionList } from "@/components/case-study/decisions";
import { Figures } from "@/components/case-study/figures";
import { SectionNav } from "@/components/case-study/section-nav";
import { TitleBlock } from "@/components/case-study/title-block";
import { featuredProjects, getCaseStudy } from "@/content/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

// Only the featured projects have a case study. Anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) return {};

  const url = `/projects/${project.slug}`;
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: project.name,
      description: project.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) notFound();

  return (
    <article className="container-page section-y">
      <p>
        <AllProjectsLink />
      </p>

      <header className="mt-6 max-w-[48rem]">
        <h1 className="type-title">{project.name}</h1>
        <p className="mt-4 text-lede text-muted">{project.summary}</p>
      </header>

      <TitleBlock project={project} className="mt-10" />
      <Figures figures={project.figures} className="mt-10" />

      <div className="mt-12 grid gap-x-16 gap-y-8 lg:mt-16 lg:grid-cols-[13rem_minmax(0,42rem)]">
        {/* Sticky below the 64px site header. */}
        <SectionNav className="lg:sticky lg:top-24 lg:self-start" />

        <div>
          <CaseSection id="problem" title="Problem">
            <BlockContent block={project.problem} />
          </CaseSection>
          <CaseSection id="approach" title="Approach">
            <BlockContent block={project.approach} />
          </CaseSection>
          <CaseSection id="implementation" title="What I built">
            <BlockContent block={project.implementation} />
          </CaseSection>
          <CaseSection id="decisions" title="Engineering decisions">
            <DecisionList decisions={project.decisions} />
          </CaseSection>
          <CaseSection id="status" title="Status">
            <BlockContent block={project.outcome} />
          </CaseSection>
          <CaseSection id="learned" title="What I learned">
            <BlockContent block={project.learned} />
          </CaseSection>
        </div>
      </div>

      <CaseStudyPager slug={project.slug} />
    </article>
  );
}
