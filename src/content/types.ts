import type { TechIconId } from "@/components/icons/tech-icon";
import type { L, Resolved } from "@/i18n/localize";

/**
 * Content model for the portfolio.
 *
 * Rule: nothing on the site is invented. Every block of copy carries the
 * sources it was taken from, and a status:
 *
 *  - "confirmed": backed by a source (a repo, a document, the live product)
 *                 or confirmed by Mohammed directly.
 *  - "pending":   not yet confirmed. Rendered with a visible marker so it can
 *                 never be mistaken for a finished claim. Flip to "confirmed"
 *                 (and fill in the body) once the fact is settled.
 *
 * Text fields are L ({ en, ar }). Everything else is shared by both languages.
 */
export type Status = "confirmed" | "pending";

export type Source = {
  /** Where the claim comes from, in plain words. */
  label: L;
  href?: string;
};

export type LinkItem = {
  label: L;
  href: string;
};

export type Block = {
  body: L[];
  status: Status;
  sources: Source[];
  /** Shown next to the pending marker: what is still needed. */
  pendingNote?: L;
};

export type Decision = {
  title: L;
  body: L;
  /** "mine": written by Mohammed. "team": a team decision he worked within. */
  owner: "mine" | "team";
  sources: Source[];
};

export type Figure = {
  value: string;
  label: L;
};

export type CaseStudy = {
  slug: string;
  /** Product names are not translated. */
  name: string;
  summary: L;
  role: L;
  context: L;
  period: L;
  stage: L;
  stack: string[];
  links: LinkItem[];
  card: {
    problem: L;
    contribution: L;
  };
  figures: Figure[];
  problem: Block;
  approach: Block;
  implementation: Block;
  decisions: { items: Decision[]; status: Status; pendingNote?: L };
  outcome: Block;
  learned: Block;
};

export type SmallProject = {
  name: string;
  summary: L;
  detail: L;
  stack: string[];
  links: LinkItem[];
  sources: Source[];
};

export type ExperienceItem = {
  organization: string;
  title: L;
  period: L;
  location?: L;
  body: L;
  status: Status;
  pendingNote?: L;
  sources: Source[];
};

export type TrainingItem = {
  title: L;
  provider: L;
  period: L;
  note?: L;
  sources: Source[];
};

export type StackCategoryId = "backend" | "data" | "devops" | "analytics" | "automation" | "frontend";

export type StackCategory = {
  id: StackCategoryId;
  name: L;
};

export type Tech = {
  /** Technology names stay in English in both languages. */
  name: string;
  category: StackCategoryId;
  /** The short badge on the card: what kind of tool it is. */
  type: L;
  icon: TechIconId;
  /**
   * Icon colour on light and on dark surfaces. Usually the brand colour,
   * adjusted where it would disappear (black marks in dark mode, yellow in
   * light). Left out, the icon uses the teal secondary accent.
   */
  color?: { light: string; dark: string };
};

export type WorkflowStep = {
  name: L;
  body: L;
  /** True where AI assists the step. Judgment stays with the engineer throughout. */
  aiAssisted: boolean;
};

export type Principle = {
  title: L;
  body: L;
};

export type HeroStat = {
  /** A count ("271"), animated up from zero, or a short token ("BSc"). */
  value: L;
  label: L;
  /** Where the number can be checked. Internal paths have no locale prefix. */
  href: string;
};

export type Highlight = {
  value: L;
  label: L;
  href?: string;
};

// Resolved (single-language) shapes, used by components.
export type RBlock = Resolved<Block>;
export type RCaseStudy = Resolved<CaseStudy>;
export type RSmallProject = Resolved<SmallProject>;
export type RExperienceItem = Resolved<ExperienceItem>;
export type RTrainingItem = Resolved<TrainingItem>;
export type RTech = Resolved<Tech>;
export type RStackCategory = Resolved<StackCategory>;
export type RSource = Resolved<Source>;
export type RLinkItem = Resolved<LinkItem>;
export type RFigure = Resolved<Figure>;
export type RDecision = Resolved<Decision>;
