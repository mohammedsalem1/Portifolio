import type { ExperienceItem, TrainingItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    organization: "Alif Studio",
    title: "Product Engineer",
    period: "Jun 2026 to Sep 2026",
    body: "Worked on the MVP of NoBound Hires, an employer of record platform for the MENA region. Next.js front end, NestJS back end, built with Claude Code.",
    status: "confirmed",
    sources: [
      { label: "Confirmed by Mohammed" },
      { label: "noboundhires.com", href: "https://noboundhires.com/" },
    ],
  },
  {
    organization: "Trustangle",
    title: "Full Stack Developer",
    period: "Jan 2025 to Apr 2025",
    location: "Remote",
    body: "Built full-stack features with React and NestJS, including authentication and authorization flows.",
    status: "pending",
    pendingNote: "End date differs between CV versions (April or July 2025).",
    sources: [{ label: "CV, September 2026" }],
  },
  {
    organization: "Maysam",
    title: "Web development internship",
    period: "Jul 2023 to Sep 2023",
    location: "Gaza",
    body: "Three-month internship in web development.",
    status: "pending",
    pendingNote: "Title and scope differ between CV versions.",
    sources: [{ label: "CV, September 2026" }],
  },
];

export const training: TrainingItem[] = [
  {
    title: "Code2Career Backend Path",
    provider: "Gaza Sky Geeks",
    period: "100 hours",
    note: "Skill Swap was the capstone project.",
    sources: [{ label: "Certificate of achievement" }],
  },
  {
    title: "n8n training",
    provider: "Gaza Sky Geeks",
    period: "Jun 2026",
    sources: [{ label: "Certificate of completion" }],
  },
  {
    title: "BSc, Computer Engineering",
    provider: "Islamic University of Gaza",
    period: "Conferred Feb 2025",
    sources: [{ label: "Degree certificate" }],
  },
];
