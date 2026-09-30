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
 */
export type Status = "confirmed" | "pending";

export type Source = {
  /** Where the claim comes from, in plain words. */
  label: string;
  href?: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type Block = {
  body: string[];
  status: Status;
  sources: Source[];
  /** Shown next to the pending marker: what is still needed. */
  pendingNote?: string;
};

export type Decision = {
  title: string;
  body: string;
  /** "mine": written by Mohammed. "team": a team decision he worked within. */
  owner: "mine" | "team";
  sources: Source[];
};

export type Figure = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  /** One sentence: what it is. */
  summary: string;
  role: string;
  context: string;
  period: string;
  stage: string;
  stack: string[];
  links: LinkItem[];
  /** Short card copy for the home page. */
  card: {
    problem: string;
    contribution: string;
  };
  figures: Figure[];
  problem: Block;
  approach: Block;
  implementation: Block;
  decisions: { items: Decision[]; status: Status; pendingNote?: string };
  outcome: Block;
  learned: Block;
};

export type SmallProject = {
  name: string;
  summary: string;
  detail: string;
  stack: string[];
  links: LinkItem[];
  sources: Source[];
};

export type ExperienceItem = {
  organization: string;
  title: string;
  period: string;
  location?: string;
  body: string;
  status: Status;
  pendingNote?: string;
  sources: Source[];
};

export type TrainingItem = {
  title: string;
  provider: string;
  period: string;
  note?: string;
  sources: Source[];
};

export type SkillGroup = {
  name: string;
  items: string[];
  /** Where a reader can see these skills used. */
  evidence: LinkItem[];
  note?: string;
};

export type PipelineStage = {
  id: "idea" | "ai" | "architecture" | "build" | "ship";
  label: string;
  /** One line under the label in the detail panel. */
  heading: string;
  body: string;
  /** Real identifiers from real projects: modules, counts, routes. */
  artefacts: string[];
  source: Source;
};

export type WorkflowStep = {
  name: string;
  body: string;
  /** True where AI assists the step. Judgment stays with the engineer throughout. */
  aiAssisted: boolean;
};

export type Principle = {
  title: string;
  body: string;
};
