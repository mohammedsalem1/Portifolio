import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag";
import { getContent } from "@/content";
import type { RCaseStudy, RFigure } from "@/content/types";
import { type Locale, localeHref } from "@/i18n/config";
import { type Dictionary, getDictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";
import { LinkList, StandaloneLink } from "./link-list";

const sheet =
  "panel overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-line-strong/60";
const projectName =
  "text-[length:clamp(1.625rem,1.2rem_+_1.6vw,2.375rem)] font-bold leading-[1.1] tracking-[-0.02em] rtl:tracking-normal";
const smallLabel = "text-label text-muted";

function titleBlockRows(project: RCaseStudy, t: Dictionary) {
  return [
    { label: t.projects.role, value: project.role },
    { label: t.projects.context, value: project.context },
    { label: t.projects.period, value: project.period },
    { label: t.projects.stage, value: project.stage },
  ];
}

function StoryBlock({ label, children }: { label: string; children: string }) {
  return (
    <div>
      <h4 className="text-small font-semibold text-accent-ink">{label}</h4>
      <p className="mt-1.5 text-body">{children}</p>
    </div>
  );
}

function ProjectLinks({
  project,
  lang,
  t,
  className,
}: {
  project: RCaseStudy;
  lang: Locale;
  t: Dictionary;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-6 gap-y-4", className)}>
      <ButtonLink
        href={localeHref(lang, `/projects/${project.slug}`)}
        variant="secondary"
        icon={<ArrowRightIcon className="flip-rtl size-4" weight="bold" />}
      >
        {t.cta.readCaseStudy}
        <span className="sr-only">: {project.name}</span>
      </ButtonLink>
      {project.links.map((link) => (
        <StandaloneLink key={link.href} href={link.href} newTabLabel={t.a11y.newTab}>
          {link.label}
        </StandaloneLink>
      ))}
    </div>
  );
}

/** Real numbers only. A project without figures renders nothing here. */
function Figures({ figures, label, className }: { figures: RFigure[]; label: string; className?: string }) {
  if (figures.length === 0) return null;
  return (
    <dl aria-label={label} className={cn("grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4", className)}>
      {figures.map((figure) => (
        <div key={figure.label} className="flex flex-col-reverse gap-1">
          <dt className="text-small text-muted">{figure.label}</dt>
          <dd className="type-title tabular-nums">
            {figure.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Sheet one: the story on the reading-start side, the title block beside it. */
function ColumnSheet({ project, lang, t }: { project: RCaseStudy; lang: Locale; t: Dictionary }) {
  const id = `project-${project.slug}`;
  return (
    <article aria-labelledby={id} data-reveal className={sheet}>
      <div className="grid lg:grid-cols-[minmax(0,1fr)_21rem]">
        <div className="p-6 md:p-10">
          <p className="type-code text-muted">
            <span dir="ltr">01 / {project.slug}</span>
          </p>
          <h3 id={id} className={cn(projectName, "mt-3")}>
            {project.name}
          </h3>
          <p className="mt-4 max-w-[40rem] text-lede text-muted">{project.summary}</p>
          <div className="mt-8 max-w-[40rem] space-y-6">
            <StoryBlock label={t.projects.problem}>{project.card.problem}</StoryBlock>
            <StoryBlock label={t.projects.contribution}>{project.card.contribution}</StoryBlock>
          </div>
          <Figures figures={project.figures} label={t.projects.figures} className="mt-8" />
          <ProjectLinks project={project} lang={lang} t={t} className="mt-10" />
        </div>

        <div className="border-t border-line bg-surface-2/40 lg:border-s lg:border-t-0">
          <dl className="divide-y divide-line">
            {titleBlockRows(project, t).map((row) => (
              <div key={row.label} className="px-6 py-4 md:px-10 lg:px-6">
                <dt className={smallLabel}>{row.label}</dt>
                <dd className="mt-0.5 text-small font-medium text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
          <div className="border-t border-line px-6 py-4 md:px-10 lg:px-6">
            <p className={smallLabel} aria-hidden="true">
              {t.projects.stack}
            </p>
            <TagList items={project.stack} label={t.projects.stack} className="mt-2" />
          </div>
        </div>
      </div>
    </article>
  );
}

/** Sheet two: a band of figures under the name, the title block along the bottom. */
function StripSheet({ project, lang, t }: { project: RCaseStudy; lang: Locale; t: Dictionary }) {
  const id = `project-${project.slug}`;
  return (
    <article aria-labelledby={id} data-reveal className={sheet}>
      <div className="grid gap-x-10 gap-y-4 p-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-end md:p-10">
        <div>
          <p className="type-code text-muted">
            <span dir="ltr">02 / {project.slug}</span>
          </p>
          <h3 id={id} className={cn(projectName, "mt-3")}>
            {project.name}
          </h3>
        </div>
        <p className="max-w-[40rem] text-lede text-muted">{project.summary}</p>
      </div>

      <Figures
        figures={project.figures}
        label={t.projects.figures}
        className="border-t border-line px-6 py-6 md:px-10 md:py-8"
      />

      <div className="border-t border-line p-6 md:p-10">
        <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
          <StoryBlock label={t.projects.problem}>{project.card.problem}</StoryBlock>
          <StoryBlock label={t.projects.contribution}>{project.card.contribution}</StoryBlock>
        </div>
        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className={smallLabel} aria-hidden="true">
              {t.projects.stack}
            </p>
            <TagList items={project.stack} label={t.projects.stack} className="mt-2" />
          </div>
          <ProjectLinks project={project} lang={lang} t={t} className="lg:shrink-0" />
        </div>
      </div>

      <dl className="grid gap-px border-t border-line bg-line md:grid-cols-2 lg:grid-cols-4">
        {titleBlockRows(project, t).map((row) => (
          <div key={row.label} className="bg-surface-2/40 px-6 py-4 md:px-10 lg:px-6">
            <dt className={smallLabel}>{row.label}</dt>
            <dd className="mt-0.5 text-small font-medium text-ink">{row.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export function Projects({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const { featuredProjects, moreProjects } = getContent(lang);

  return (
    <Section id="projects" {...t.sections.projects}>
      <div className="space-y-8 md:space-y-12">
        {featuredProjects.map((project, index) =>
          // Alternate the composition so neighbouring sheets never match.
          index % 2 === 0 ? (
            <ColumnSheet key={project.slug} project={project} lang={lang} t={t} />
          ) : (
            <StripSheet key={project.slug} project={project} lang={lang} t={t} />
          ),
        )}
      </div>

      <h3 data-reveal className="type-heading mt-20 md:mt-24">
        {t.projects.more}
      </h3>
      <ul className="mt-6 divide-y divide-line border-y border-line">
        {moreProjects.map((project) => (
          <li
            key={project.name}
            data-reveal
            className="grid gap-x-12 gap-y-6 py-10 md:grid-cols-12"
          >
            <div className="md:col-span-7">
              <h4 className="text-lede font-semibold">{project.name}</h4>
              <p className="mt-3 max-w-[40rem] text-body">{project.summary}</p>
            </div>
            <div className="md:col-span-5">
              <p className="text-body text-muted">{project.detail}</p>
              <TagList items={project.stack} label={`${project.name}, ${t.projects.stack}`} className="mt-5" />
              <LinkList
                links={project.links}
                label={`${project.name}, ${t.projects.links}`}
                newTabLabel={t.a11y.newTab}
                className="mt-6"
              />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
