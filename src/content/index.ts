import type { Locale } from "@/i18n/config";
import { localize } from "@/i18n/localize";
import { experience, training } from "./experience";
import {
  automationNote,
  principles,
  workflow,
  workflowSource,
  workflowStatement,
} from "./process";
import { heroStats, highlights, profile } from "./profile";
import { featuredProjects, getCaseStudy, moreProjects } from "./projects";
import { stack, stackCategories, stackFocus } from "./skills";

const content = {
  profile,
  highlights,
  heroStats,
  featuredProjects,
  moreProjects,
  experience,
  training,
  stack,
  stackCategories,
  stackFocus,
  workflow,
  workflowStatement,
  workflowSource,
  automationNote,
  principles,
};

/** All site content in one language. */
export function getContent(locale: Locale) {
  return localize(content, locale);
}

export type Content = ReturnType<typeof getContent>;

export function getLocalizedCaseStudy(slug: string, locale: Locale) {
  const project = getCaseStudy(slug);
  return project ? localize(project, locale) : undefined;
}

export { featuredProjects };
