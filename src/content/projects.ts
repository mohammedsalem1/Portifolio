import type { CaseStudy, SmallProject } from "./types";

const SKILL_SWAP_REPO = "https://github.com/mohammedsalem1/Skill-Swap-platform";
const NOBOUND_SITE = "https://noboundhires.com/";
const QUIZORA_REPO = "https://github.com/mohammedsalem1/Quizora";

export const featuredProjects: CaseStudy[] = [
  {
    slug: "nobound-hires",
    name: "NoBound Hires",
    summary:
      "Employment infrastructure for the MENA region: companies employ, contract, onboard and pay people in markets other providers skip.",
    role: "Product Engineer, AI-assisted product development",
    context: "Alif Studio",
    period: "Jun 2026 to Sep 2026",
    stage: "Early access",
    stack: ["Next.js", "NestJS", "Claude Code"],
    links: [{ label: "noboundhires.com", href: NOBOUND_SITE }],
    card: {
      problem:
        "Hiring in countries such as Palestine, Jordan, Sudan or Syria is hard because bank transfers into them are difficult.",
      contribution:
        "Worked on the MVP of the employer of record platform: a Next.js front end and a NestJS back end, built with Claude Code.",
    },
    figures: [],
    problem: {
      status: "confirmed",
      body: [
        "Companies that want to hire in countries such as Palestine, Jordan, Sudan or Syria run into a practical problem: bank transfers into these countries are difficult.",
        "NoBound Hires is an employer of record platform. A company can hire an employee or a contractor there without setting up its own local entity. Palestine is the first market. Egypt, Jordan, Saudi Arabia, Syria and Sudan are listed as coming.",
      ],
      sources: [
        { label: "noboundhires.com", href: NOBOUND_SITE },
        { label: "Confirmed by Mohammed" },
      ],
    },
    approach: {
      status: "confirmed",
      body: [
        "I worked on the MVP as Product Engineer: taking the product idea and turning it into a working implementation.",
        "The front end is Next.js and the back end is NestJS. I built with Claude Code as my development tool.",
      ],
      sources: [{ label: "Confirmed by Mohammed" }],
    },
    implementation: {
      status: "pending",
      body: [
        "The product covers the employment flow end to end: employ, bilingual Arabic and English contracts, onboarding with identity and document checks, payroll, funding, payment and records.",
      ],
      pendingNote: "Which parts of the MVP I built myself, in detail.",
      sources: [{ label: "noboundhires.com", href: NOBOUND_SITE }],
    },
    decisions: {
      status: "pending",
      items: [],
      pendingNote: "The engineering decisions that mattered on this product.",
    },
    outcome: {
      status: "confirmed",
      body: [
        "NoBound Hires is in early access. Palestine opens first, and the site takes early-access sign-ups from companies and from people looking for work.",
      ],
      sources: [{ label: "noboundhires.com", href: NOBOUND_SITE }],
    },
    learned: {
      status: "pending",
      body: [],
      pendingNote: "What I took away from building this MVP.",
      sources: [],
    },
  },
  {
    slug: "skill-swap",
    name: "Skill Swap",
    summary:
      "A platform where people exchange skills instead of paying: offer what you know in return for what you want to learn.",
    role: "Backend Team Lead",
    context: "Gaza Sky Geeks Code2Career capstone, team of four",
    period: "Dec 2025 to Mar 2026",
    stage: "Source public, deployment offline",
    stack: [
      "NestJS 11",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "JWT (Passport)",
      "Swagger",
    ],
    links: [{ label: "Source on GitHub", href: SKILL_SWAP_REPO }],
    card: {
      problem:
        "Learning a new skill usually costs money. Skill Swap lets two people trade what they know instead.",
      contribution:
        "Led a team of four on the back end. Wrote the reviews and gamification modules, built registration and password reset, and merged 31 of the 34 pull-request merges.",
    },
    figures: [
      { value: "164", label: "commits, 138 of them mine" },
      { value: "41", label: "pull requests" },
      { value: "18", label: "data models" },
      { value: "9", label: "schema migrations" },
    ],
    problem: {
      status: "confirmed",
      body: [
        "Learning a new skill usually costs money. Skill Swap lets people trade instead: you offer a skill you have in return for one you want to learn.",
        "To work as a product it needed accounts, a catalogue of skills, swap requests between two people, scheduled sessions, reviews after a session, and an admin side.",
      ],
      sources: [{ label: "Repository README and modules", href: SKILL_SWAP_REPO }],
    },
    approach: {
      status: "confirmed",
      body: [
        "We were a team of four and I was team lead. We split the product into modules: auth, users, skills, swaps, sessions, reviews, gamification and admin.",
        "Everyone worked on feature branches. Changes went through pull requests into a develop branch, and from there to main. I performed 31 of the 34 pull-request merges in the history, including my teammates' branches.",
      ],
      sources: [
        { label: "README: team and team lead", href: SKILL_SWAP_REPO },
        { label: "Git history", href: `${SKILL_SWAP_REPO}/commits/main` },
      ],
    },
    implementation: {
      status: "confirmed",
      body: [
        "I wrote the reviews and gamification modules and the seed script.",
        "In auth I built registration with email verification codes and the forgot and reset password flow, then refactored the module. A teammate wrote the JWT guard and the login endpoint.",
        "I worked with my teammates on skills discovery, swap requests, sessions and the admin panel, and I wrote almost all of the nine schema migrations.",
        "By git blame, about 42% of the code on main today is mine. It is a team codebase, and I am its largest contributor.",
      ],
      sources: [
        { label: "Git history and blame", href: `${SKILL_SWAP_REPO}/commits/main` },
        { label: "Pull requests", href: `${SKILL_SWAP_REPO}/pulls?q=is%3Apr` },
      ],
    },
    decisions: {
      status: "confirmed",
      items: [
        {
          title: "PostgreSQL instead of MySQL",
          body: "The project started on MySQL. To deploy the API on Render I moved the schema and the Prisma datasource to PostgreSQL.",
          owner: "mine",
          sources: [
            { label: "Pull requests #38 and #39", href: `${SKILL_SWAP_REPO}/pull/39` },
          ],
        },
        {
          title: "Points as a ledger, not a balance",
          body: "Each award is a row with an amount, a reason and a type. A user's total is the sum of their rows, so every point traces back to the action that earned it.",
          owner: "mine",
          sources: [
            {
              label: "gamification.service.ts",
              href: `${SKILL_SWAP_REPO}/blob/main/src/modules/gamification/gamification.service.ts`,
            },
          ],
        },
        {
          title: "One review per person per swap",
          body: "A review belongs to a swap request. The service rejects a second review from the same person for the same swap, and writing a review earns points.",
          owner: "mine",
          sources: [
            {
              label: "reviews.service.ts",
              href: `${SKILL_SWAP_REPO}/blob/main/src/modules/reviews/reviews.service.ts`,
            },
          ],
        },
        {
          title: "Routes are private by default",
          body: "A global JWT guard protects every route, and public ones are marked explicitly. A teammate wrote the guard. I built registration, verification and password reset on top of it.",
          owner: "team",
          sources: [
            { label: "main.ts", href: `${SKILL_SWAP_REPO}/blob/main/src/main.ts` },
          ],
        },
        {
          title: "Validation at the boundary",
          body: "A global validation pipe strips and rejects unknown fields, and shared exception filters give every error the same shape.",
          owner: "team",
          sources: [
            { label: "main.ts", href: `${SKILL_SWAP_REPO}/blob/main/src/main.ts` },
          ],
        },
      ],
    },
    outcome: {
      status: "confirmed",
      body: [
        "The API is documented with Swagger and was deployed on Render during the program. That deployment is not online today. The source is public on GitHub.",
      ],
      sources: [{ label: "Repository README", href: SKILL_SWAP_REPO }],
    },
    learned: {
      status: "pending",
      body: [],
      pendingNote: "What I took away from leading this team.",
      sources: [],
    },
  },
];

export const moreProjects: SmallProject[] = [
  {
    name: "Quizora",
    summary:
      "A timed quiz platform for a tutoring centre. Teachers write multiple-choice quizzes, and students take each one once, on their phones. The interface is Arabic, right to left.",
    detail:
      "Built in 16 phases with Claude Code. I wrote the brief, chose between the options it laid out, approved each phase and merged every pull request. The repository records every decision and how the AI's work was checked.",
    stack: ["NestJS", "Prisma", "PostgreSQL", "Next.js 16", "Tailwind"],
    links: [
      { label: "Source on GitHub", href: QUIZORA_REPO },
      { label: "Decisions log", href: `${QUIZORA_REPO}/blob/master/DECISIONS.md` },
      { label: "AI usage log", href: `${QUIZORA_REPO}/blob/master/AI_USAGE.md` },
    ],
    sources: [
      { label: "AI_USAGE.md", href: `${QUIZORA_REPO}/blob/master/AI_USAGE.md` },
    ],
  },
  {
    name: "Food Delivery",
    summary:
      "A team back-end project covering orders, payments and the delivery lifecycle, with the order flow built as a chain of handlers.",
    detail: "I contributed 71 of the 306 commits.",
    stack: ["Express", "Prisma", "PostgreSQL", "Stripe"],
    links: [
      {
        label: "Source on GitHub",
        href: "https://github.com/mohammedsalem1/Food-delivery",
      },
    ],
    sources: [
      { label: "Git history", href: "https://github.com/mohammedsalem1/Food-delivery" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return featuredProjects.find((project) => project.slug === slug);
}
