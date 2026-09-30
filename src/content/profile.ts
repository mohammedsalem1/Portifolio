import { stack } from "./skills";
import type { Highlight, HeroStat } from "./types";

export const profile = {
  name: { en: "Mohammed Salem", ar: "محمد سالم" },
  /** His chosen title, 2026-09-30. */
  role: { en: "Full Stack Developer", ar: "مطوّر Full Stack" },
  /** From his own description of his work (Technical Arsenal brief). */
  tagline: {
    en: "I build reliable backend systems, full-stack web apps, data solutions and automation workflows.",
    ar: "أبني أنظمة خلفية موثوقة، وتطبيقات ويب متكاملة، وحلول بيانات، وسير عمل مؤتمتًا.",
  },
  /**
   * What the hero types out, one line after another: the title first, then
   * the stack he listed for each part of his work.
   */
  typed: [
    { en: "Full Stack Developer", ar: "مطوّر Full Stack" },
    { en: "Node.js · NestJS · PostgreSQL", ar: "Node.js · NestJS · PostgreSQL" },
    { en: "Next.js · React · Tailwind", ar: "Next.js · React · Tailwind" },
    { en: "n8n automation workflows", ar: "أتمتة سير العمل بـ n8n" },
  ],
  location: { en: "Palestine", ar: "فلسطين" },
  /** Who he is, how he works, what he cares about. Kept short on purpose. */
  about: [
    {
      en: "I'm a full stack developer based in Palestine, with a degree in computer engineering from the Islamic University of Gaza.",
      ar: "أنا مطوّر Full Stack من فلسطين، حاصل على بكالوريوس هندسة الحاسوب من الجامعة الإسلامية بغزة.",
    },
    {
      en: "I start from the product problem and its requirements, then turn them into a working system: the data model, the API, and the screens that use it. Most of my work is on the back end, in NestJS and PostgreSQL.",
      ar: "أبدأ من مشكلة المنتج ومتطلباته، ثم أحوّلها إلى نظام يعمل: نموذج البيانات، والـ API، والواجهات التي تستخدمه. معظم عملي في الواجهة الخلفية باستخدام NestJS و PostgreSQL.",
    },
    {
      en: "I use Claude Code to move faster. The decisions, the reviews and the merges stay with me.",
      ar: "أستخدم Claude Code لأعمل بسرعة أكبر، لكن القرارات والمراجعات والدمج تبقى بيدي.",
    },
  ],
  facts: [
    {
      label: { en: "Focus", ar: "التركيز" },
      value: { en: "Back end, full-stack capable", ar: "الواجهة الخلفية، مع قدرة على العمل المتكامل" },
    },
    {
      label: { en: "Core stack", ar: "التقنيات الأساسية" },
      value: { en: "TypeScript, NestJS, PostgreSQL, Next.js", ar: "TypeScript و NestJS و PostgreSQL و Next.js" },
    },
    {
      label: { en: "Based in", ar: "مقيم في" },
      value: { en: "Palestine, open to remote roles", ar: "فلسطين، ومتاح للعمل عن بُعد" },
    },
  ],
};

/** Short, verifiable highlights for the About section. */
export const highlights: Highlight[] = [
  {
    value: { en: "Product Engineer", ar: "مهندس منتجات" },
    label: { en: "on the NoBound Hires MVP, Alif Studio", ar: "في النسخة الأولى من NoBound Hires، Alif Studio" },
    href: "/projects/nobound-hires",
  },
  {
    value: { en: "Team lead", ar: "قائد فريق" },
    label: { en: "of four engineers on Skill Swap", ar: "لأربعة مهندسين في مشروع Skill Swap" },
    href: "/projects/skill-swap",
  },
  {
    value: { en: "271 tests", ar: "271 اختبارًا" },
    label: { en: "in Quizora, built with Claude Code", ar: "في Quizora، المبني باستخدام Claude Code" },
    href: "https://github.com/mohammedsalem1/Quizora",
  },
  {
    value: { en: "BSc", ar: "بكالوريوس" },
    label: { en: "Computer Engineering, Islamic University of Gaza", ar: "هندسة الحاسوب، الجامعة الإسلامية بغزة" },
  },
];

/**
 * The four numbers in the hero. Each is already verified elsewhere on the
 * site and links to where a visitor can check it.
 */
export const heroStats: HeroStat[] = [
  {
    value: { en: "4", ar: "4" },
    label: { en: "Engineers I led on Skill Swap", ar: "مهندسين قُدتُهم في Skill Swap" },
    href: "/projects/skill-swap",
  },
  {
    value: { en: "271", ar: "271" },
    label: { en: "Tests in Quizora", ar: "اختبارًا في Quizora" },
    href: "https://github.com/mohammedsalem1/Quizora",
  },
  {
    value: { en: String(stack.length), ar: String(stack.length) },
    label: { en: "Technologies in my toolkit", ar: "تقنية في أدواتي" },
    href: "/#skills",
  },
  {
    value: { en: "BSc", ar: "BSc" },
    label: { en: "Computer Engineering, IUG", ar: "هندسة الحاسوب، الجامعة الإسلامية" },
    href: "/#experience",
  },
];
