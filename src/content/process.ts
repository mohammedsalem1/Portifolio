import type { PipelineStage, Principle, WorkflowStep } from "./types";

const SKILL_SWAP_REPO = "https://github.com/mohammedsalem1/Skill-Swap-platform";
const QUIZORA_AI_LOG =
  "https://github.com/mohammedsalem1/Quizora/blob/master/AI_USAGE.md";

/**
 * The hero visualization. Five stages, each showing a real artefact from a
 * real project rather than a generic label.
 */
export const pipeline: PipelineStage[] = [
  {
    id: "idea",
    label: "Idea",
    heading: "Start from the product problem",
    body: "Skill Swap began as one sentence: people trade skills instead of paying for them.",
    artefacts: ["offer a skill", "request a swap", "meet in a session", "review each other"],
    source: { label: "Skill Swap README", href: SKILL_SWAP_REPO },
  },
  {
    id: "ai",
    label: "AI",
    heading: "Use AI to explore, keep the decisions",
    body: "On Quizora, Claude Code laid out options with their trade-offs. I chose, approved each phase and merged every pull request.",
    artefacts: ["16 phases", "approval after each", "every change by pull request"],
    source: { label: "Quizora AI usage log", href: QUIZORA_AI_LOG },
  },
  {
    id: "architecture",
    label: "Architecture",
    heading: "Shape the system before the code",
    body: "Skill Swap is split into modules over one PostgreSQL schema of 18 models.",
    artefacts: [
      "auth",
      "user",
      "skills",
      "swaps",
      "session",
      "reviews",
      "gamification",
      "admin",
    ],
    source: { label: "Skill Swap source", href: `${SKILL_SWAP_REPO}/tree/main/src/modules` },
  },
  {
    id: "build",
    label: "Build",
    heading: "Build in small, reviewed steps",
    body: "Feature branches, pull requests into develop, then main. Skill Swap has 164 commits and 41 pull requests.",
    artefacts: ["/api/v1/auth", "/api/v1/skills", "/api/v1/swaps", "/api/v1/reviews"],
    source: { label: "Skill Swap history", href: `${SKILL_SWAP_REPO}/commits/main` },
  },
  {
    id: "ship",
    label: "Ship",
    heading: "Put it in front of people",
    body: "NoBound Hires is in early access, with Palestine as its first market.",
    artefacts: ["early access", "Palestine first"],
    source: { label: "noboundhires.com", href: "https://noboundhires.com/" },
  },
];

/** "AI is a development multiplier, not a replacement for engineering judgment." */
export const workflowStatement =
  "AI is a development multiplier, not a replacement for engineering judgment.";

export const workflow: WorkflowStep[] = [
  {
    name: "Problem",
    body: "Write down who it is for and what must be true when it works. On Quizora that was a written brief in 16 phases.",
    aiAssisted: false,
  },
  {
    name: "Research",
    body: "Read what already exists: the requirements, the data and the constraints.",
    aiAssisted: false,
  },
  {
    name: "AI-assisted exploration",
    body: "Claude Code lays out options with their trade-offs. I choose between them.",
    aiAssisted: true,
  },
  {
    name: "Architecture",
    body: "Settle the data model and the rules first. On Quizora the data model was reviewed and approved before implementation.",
    aiAssisted: false,
  },
  {
    name: "Implementation",
    body: "Small commits, one phase at a time. Every change arrives as a pull request that I read before merging.",
    aiAssisted: true,
  },
  {
    name: "Testing",
    body: "Tests are written with the code, then protections are broken on purpose to prove the tests can fail.",
    aiAssisted: true,
  },
  {
    name: "Iteration",
    body: "Each phase ends with a report and an approval before the next one begins.",
    aiAssisted: false,
  },
  {
    name: "Deployment",
    body: "Skill Swap's API went to Render. NoBound Hires is in early access.",
    aiAssisted: false,
  },
];

export const workflowSource = {
  label: "Quizora AI usage log",
  href: QUIZORA_AI_LOG,
};

export const automationNote =
  "Automation: I completed Gaza Sky Geeks' n8n training in June 2026 and built small workflows there, such as a form that routes orders by amount and sends the right email.";

export const principles: Principle[] = [
  {
    title: "Understand the problem",
    body: "Who is it for, and what has to be true when it works.",
  },
  {
    title: "Design the solution",
    body: "Data model and rules before endpoints and screens.",
  },
  {
    title: "Build deliberately",
    body: "Small changes, each one reviewed.",
  },
  {
    title: "Use AI intelligently",
    body: "Let it propose and draft. Keep the decisions.",
  },
  {
    title: "Test what matters",
    body: "Cover the rules the product depends on, and check the tests can fail.",
  },
  {
    title: "Ship and iterate",
    body: "Put it in front of people, then improve it.",
  },
];
