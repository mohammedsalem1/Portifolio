import type { StackCategory, Tech } from "./types";

/**
 * Mohammed's technical toolkit, as he listed it himself on 2026-09-30.
 * Each technology appears once, in the category where it fits best: SQL sits
 * in Databases & Data and is not repeated under Data & Analytics.
 */
export const stackCategories: StackCategory[] = [
  { id: "backend", name: { en: "Backend & APIs", ar: "الواجهة الخلفية والـ APIs" } },
  { id: "data", name: { en: "Databases & Data", ar: "قواعد البيانات" } },
  { id: "devops", name: { en: "DevOps & Cloud", ar: "DevOps والسحابة" } },
  { id: "analytics", name: { en: "Data & Analytics", ar: "تحليل البيانات" } },
  { id: "automation", name: { en: "Automation", ar: "الأتمتة" } },
  { id: "frontend", name: { en: "Frontend & Web", ar: "الواجهات والويب" } },
];

/** Dark brand marks (Next.js, GitHub...) take the text colour instead. */
const ink = { light: "var(--ink)", dark: "var(--ink)" };

export const stack: Tech[] = [
  // Backend & APIs
  {
    name: "Node.js",
    category: "backend",
    type: { en: "Runtime", ar: "بيئة التشغيل" },
    icon: "nodedotjs",
    color: { light: "#3c873a", dark: "#6cc24a" },
  },
  {
    name: "TypeScript",
    category: "backend",
    type: { en: "Type-safe", ar: "أنواع آمنة" },
    icon: "typescript",
    color: { light: "#3178c6", dark: "#5a9be6" },
  },
  {
    name: "JavaScript",
    category: "backend",
    type: { en: "Language", ar: "لغة برمجة" },
    icon: "javascript",
    color: { light: "#a68d00", dark: "#f7df1e" },
  },
  {
    name: "NestJS",
    category: "backend",
    type: { en: "Framework", ar: "إطار عمل" },
    icon: "nestjs",
    color: { light: "#e0234e", dark: "#f0506e" },
  },
  {
    name: "Express.js",
    category: "backend",
    type: { en: "Web framework", ar: "إطار ويب" },
    icon: "express",
    color: ink,
  },
  {
    name: "REST APIs",
    category: "backend",
    type: { en: "API design", ar: "تصميم الـ API" },
    icon: "rest",
  },
  {
    name: "JWT",
    category: "backend",
    type: { en: "Auth tokens", ar: "رموز المصادقة" },
    icon: "jsonwebtokens",
    color: { light: "#d6004f", dark: "#ff4d8d" },
  },
  {
    name: "Passport.js",
    category: "backend",
    type: { en: "Auth strategies", ar: "استراتيجيات المصادقة" },
    icon: "passport",
    color: { light: "#1f9d52", dark: "#34e27a" },
  },

  // Databases & Data
  {
    name: "PostgreSQL",
    category: "data",
    type: { en: "Relational DB", ar: "قاعدة علائقية" },
    icon: "postgresql",
    color: { light: "#4169e1", dark: "#7b9bf5" },
  },
  {
    name: "MySQL",
    category: "data",
    type: { en: "Relational DB", ar: "قاعدة علائقية" },
    icon: "mysql",
    color: { light: "#4479a1", dark: "#6ea8d6" },
  },
  {
    name: "MongoDB",
    category: "data",
    type: { en: "Document DB", ar: "قاعدة مستندات" },
    icon: "mongodb",
    color: { light: "#3f8f40", dark: "#5bbf5c" },
  },
  {
    name: "Redis",
    category: "data",
    type: { en: "Cache", ar: "تخزين مؤقت" },
    icon: "redis",
    color: { light: "#dc382d", dark: "#ff5a4f" },
  },
  {
    name: "Prisma",
    category: "data",
    type: { en: "ORM", ar: "ORM" },
    icon: "prisma",
    color: { light: "#2d3748", dark: "var(--ink)" },
  },
  {
    name: "SQL",
    category: "data",
    type: { en: "Query language", ar: "لغة استعلام" },
    icon: "sql",
    color: { light: "#0369a1", dark: "#38bdf8" },
  },

  // DevOps & Cloud
  {
    name: "Docker",
    category: "devops",
    type: { en: "Containers", ar: "الحاويات" },
    icon: "docker",
    color: { light: "#1d7fce", dark: "#3ba8f5" },
  },
  {
    name: "Git",
    category: "devops",
    type: { en: "Version control", ar: "التحكم بالإصدارات" },
    icon: "git",
    color: { light: "#e0341f", dark: "#f5594a" },
  },
  {
    name: "GitHub",
    category: "devops",
    type: { en: "Code hosting", ar: "استضافة الكود" },
    icon: "github",
    color: ink,
  },
  {
    name: "Render",
    category: "devops",
    type: { en: "Deployment", ar: "النشر" },
    icon: "render",
    color: ink,
  },
  {
    name: "AWS",
    category: "devops",
    type: { en: "Cloud basics", ar: "أساسيات السحابة" },
    icon: "aws",
    color: { light: "#b86e00", dark: "#ff9900" },
  },
  {
    name: "CI/CD",
    category: "devops",
    type: { en: "Pipelines", ar: "خطوط النشر" },
    icon: "cicd",
    color: { light: "#4f46e5", dark: "#8b93f8" },
  },

  // Data & Analytics
  {
    name: "Excel",
    category: "analytics",
    type: { en: "Spreadsheets", ar: "جداول البيانات" },
    icon: "excel",
    color: { light: "#217346", dark: "#33c481" },
  },
  {
    name: "Power BI",
    category: "analytics",
    type: { en: "Dashboards", ar: "لوحات البيانات" },
    icon: "powerbi",
    color: { light: "#b38f00", dark: "#f2c811" },
  },
  {
    name: "KoboToolbox",
    category: "analytics",
    type: { en: "Data collection", ar: "جمع البيانات" },
    icon: "kobo",
  },
  {
    name: "ODK",
    category: "analytics",
    type: { en: "Field forms", ar: "نماذج ميدانية" },
    icon: "odk",
    color: { light: "#1d4ed8", dark: "#60a5fa" },
  },

  // Automation
  {
    name: "n8n",
    category: "automation",
    type: { en: "Workflow tool", ar: "أداة سير عمل" },
    icon: "n8n",
    color: { light: "#d63a62", dark: "#f06a8c" },
  },
  {
    name: "Webhooks",
    category: "automation",
    type: { en: "Event triggers", ar: "مشغّلات الأحداث" },
    icon: "webhooks",
    color: { light: "#be185d", dark: "#f472b6" },
  },
  {
    name: "Workflow Automation",
    category: "automation",
    type: { en: "Integrations", ar: "تكامل الأنظمة" },
    icon: "workflow",
    color: { light: "#7c3aed", dark: "#a78bfa" },
  },

  // Frontend & Web
  {
    name: "Next.js",
    category: "frontend",
    type: { en: "React framework", ar: "إطار React" },
    icon: "nextdotjs",
    color: ink,
  },
  {
    name: "React.js",
    category: "frontend",
    type: { en: "UI library", ar: "مكتبة واجهات" },
    icon: "react",
    color: { light: "#087ea4", dark: "#61dafb" },
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    type: { en: "Utility-first", ar: "أدوات CSS" },
    icon: "tailwindcss",
    color: { light: "#0891b2", dark: "#22d3ee" },
  },
  {
    name: "HTML",
    category: "frontend",
    type: { en: "Markup", ar: "الترميز" },
    icon: "html5",
    color: { light: "#e34f26", dark: "#f06a45" },
  },
  {
    name: "CSS",
    category: "frontend",
    type: { en: "Styles", ar: "الأنماط" },
    icon: "css",
    color: { light: "#663399", dark: "#a47ee0" },
  },
];

/** The areas the toolkit adds up to, shown in the strip under the grid. */
export const stackFocus = [
  { icon: "backend", label: { en: "Backend Architecture", ar: "هندسة الواجهة الخلفية" } },
  { icon: "analytics", label: { en: "Data & Analytics", ar: "تحليل البيانات" } },
  { icon: "automation", label: { en: "Automation Workflows", ar: "سير العمل المؤتمت" } },
  { icon: "devops", label: { en: "Cloud & Deployment", ar: "السحابة والنشر" } },
  { icon: "typescript", label: { en: "TypeScript Ecosystem", ar: "منظومة TypeScript" } },
] as const;
