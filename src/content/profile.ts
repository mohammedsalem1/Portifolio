import type { LinkItem } from "./types";

export const profile = {
  name: "Mohammed Salem",
  role: "Product Engineer",
  tagline:
    "Backend-focused engineer building full-stack products with AI-assisted development and automation.",
  location: "Palestine",
  availability: "Open to remote roles",
  email: "m7.salim3@gmail.com",
  github: "https://github.com/mohammedsalem1",
  linkedin: "https://www.linkedin.com/in/mohammedsalem9/",
  /** Who he is, how he works, what he cares about. Kept short on purpose. */
  about: [
    "I'm a product engineer based in Palestine, with a degree in computer engineering from the Islamic University of Gaza.",
    "I start from the product problem and its requirements, then turn them into a working system: the data model, the API, and the screens that use it. Most of my work is on the back end, in NestJS and PostgreSQL.",
    "I use Claude Code to move faster. The decisions, the reviews and the merges stay with me.",
  ],
  facts: [
    { label: "Focus", value: "Back end, full-stack capable" },
    { label: "Core stack", value: "TypeScript, NestJS, PostgreSQL, Next.js" },
    { label: "Based in", value: "Palestine, open to remote roles" },
  ],
} as const;

export const navItems: LinkItem[] = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Process", href: "/#process" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
];

/** One label per intent, used everywhere on the site. */
export const cta = {
  projects: { label: "View projects", href: "/#projects" },
  contact: { label: "Contact", href: "/#contact" },
} as const;
