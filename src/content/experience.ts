import type { ExperienceItem, TrainingItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    organization: "Alif Studio",
    title: { en: "Product Engineer", ar: "مهندس منتجات" },
    period: { en: "Jun 2026 to Sep 2026", ar: "يونيو 2026 إلى سبتمبر 2026" },
    body: {
      en: "Worked on the MVP of NoBound Hires, an employer of record platform for the MENA region. Next.js front end, NestJS back end, built with Claude Code.",
      ar: "عملت على النسخة الأولى (MVP) من NoBound Hires، منصة صاحب العمل المسجّل لمنطقة الشرق الأوسط وشمال أفريقيا. واجهة أمامية بـ Next.js وواجهة خلفية بـ NestJS، بُنيت باستخدام Claude Code.",
    },
    status: "confirmed",
    sources: [
      { label: { en: "Confirmed by Mohammed", ar: "بتأكيد من محمد" } },
      { label: { en: "noboundhires.com", ar: "noboundhires.com" }, href: "https://noboundhires.com/" },
    ],
  },
  {
    organization: "Trustangle",
    title: { en: "Full Stack Developer", ar: "مطوّر Full Stack" },
    period: { en: "Jan 2025 to Apr 2025", ar: "يناير 2025 إلى أبريل 2025" },
    location: { en: "Remote", ar: "عن بُعد" },
    body: {
      en: "Built full-stack features with React and NestJS, including authentication and authorization flows.",
      ar: "بنيت ميزات متكاملة باستخدام React و NestJS، ومنها مسارات المصادقة والصلاحيات.",
    },
    status: "pending",
    pendingNote: {
      en: "End date differs between CV versions (April or July 2025).",
      ar: "تاريخ الانتهاء يختلف بين نسخ السيرة الذاتية (أبريل أو يوليو 2025).",
    },
    sources: [{ label: { en: "CV, September 2026", ar: "السيرة الذاتية، سبتمبر 2026" } }],
  },
  {
    organization: "Maysam",
    title: { en: "Web development internship", ar: "تدريب في تطوير الويب" },
    period: { en: "Jul 2023 to Sep 2023", ar: "يوليو 2023 إلى سبتمبر 2023" },
    location: { en: "Gaza", ar: "غزة" },
    body: {
      en: "Three-month internship in web development.",
      ar: "تدريب لمدة ثلاثة أشهر في تطوير الويب.",
    },
    status: "pending",
    pendingNote: {
      en: "Title and scope differ between CV versions.",
      ar: "المسمى والنطاق يختلفان بين نسخ السيرة الذاتية.",
    },
    sources: [{ label: { en: "CV, September 2026", ar: "السيرة الذاتية، سبتمبر 2026" } }],
  },
];

export const training: TrainingItem[] = [
  {
    title: { en: "Code2Career Backend Path", ar: "مسار الواجهة الخلفية في Code2Career" },
    provider: { en: "Gaza Sky Geeks", ar: "Gaza Sky Geeks" },
    period: { en: "100 hours", ar: "100 ساعة" },
    note: { en: "Skill Swap was the capstone project.", ar: "كان Skill Swap مشروع التخرج." },
    sources: [{ label: { en: "Certificate of achievement", ar: "شهادة إنجاز" } }],
  },
  {
    title: { en: "n8n training", ar: "تدريب n8n" },
    provider: { en: "Gaza Sky Geeks", ar: "Gaza Sky Geeks" },
    period: { en: "Jun 2026", ar: "يونيو 2026" },
    sources: [{ label: { en: "Certificate of completion", ar: "شهادة إتمام" } }],
  },
  {
    title: { en: "BSc, Computer Engineering", ar: "بكالوريوس هندسة الحاسوب" },
    provider: { en: "Islamic University of Gaza", ar: "الجامعة الإسلامية بغزة" },
    period: { en: "Conferred Feb 2025", ar: "مُنحت في فبراير 2025" },
    sources: [{ label: { en: "Degree certificate", ar: "شهادة التخرج" } }],
  },
];
