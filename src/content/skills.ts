import type { SkillGroup } from "./types";

const SKILL_SWAP = {
  label: "Skill Swap",
  href: "/projects/skill-swap",
};
const NOBOUND = {
  label: "NoBound Hires",
  href: "/projects/nobound-hires",
};
const QUIZORA = {
  label: "Quizora",
  href: "https://github.com/mohammedsalem1/Quizora",
};
const FOOD_DELIVERY = {
  label: "Food Delivery",
  href: "https://github.com/mohammedsalem1/Food-delivery",
};

/**
 * Only technologies that Mohammed's own projects show in use.
 * Each group points at the work where a reader can check it.
 */
export const skillGroups: SkillGroup[] = [
  {
    name: "Back end",
    items: ["TypeScript", "Node.js", "NestJS", "Express", "REST APIs", "Swagger"],
    evidence: [SKILL_SWAP, QUIZORA, FOOD_DELIVERY],
  },
  {
    name: "Data",
    items: ["PostgreSQL", "Prisma", "Schema migrations", "MySQL"],
    evidence: [SKILL_SWAP, QUIZORA],
    note: "Skill Swap began on MySQL before I moved it to PostgreSQL.",
  },
  {
    name: "Full stack",
    items: ["Next.js", "React", "Tailwind CSS"],
    evidence: [NOBOUND, QUIZORA],
  },
  {
    name: "Engineering practice",
    items: [
      "JWT authentication",
      "Role-based access",
      "Request validation",
      "End-to-end tests with Jest",
      "Git and pull-request review",
      "Docker Compose",
    ],
    evidence: [SKILL_SWAP, QUIZORA],
  },
  {
    name: "AI and automation",
    items: ["Claude Code", "Phase-gated AI workflows", "n8n"],
    evidence: [QUIZORA, NOBOUND],
    note: "n8n at training level: small workflows built during the Gaza Sky Geeks course.",
  },
];
