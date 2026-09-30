import type { Locale } from "./config";
import { localize, type L } from "./localize";

/**
 * Interface copy: labels, buttons, section headers. Facts live in
 * src/content; this file only holds the words around them.
 */
const dictionary = {
  meta: {
    title: { en: "Mohammed Salem | Full Stack Developer", ar: "محمد سالم | مطوّر Full Stack" },
    languageName: { en: "English", ar: "العربية" },
  },
  a11y: {
    skip: { en: "Skip to content", ar: "تخطَّ إلى المحتوى" },
    primaryNav: { en: "Primary", ar: "الرئيسية" },
    openMenu: { en: "Open menu", ar: "فتح القائمة" },
    closeMenu: { en: "Close menu", ar: "إغلاق القائمة" },
    menu: { en: "Menu", ar: "القائمة" },
    toDark: { en: "Switch to dark theme", ar: "التبديل إلى الوضع الداكن" },
    toLight: { en: "Switch to light theme", ar: "التبديل إلى الوضع الفاتح" },
    newTab: { en: "(opens in a new tab)", ar: "(يفتح في نافذة جديدة)" },
    switchLanguage: { en: "Read this page in Arabic", ar: "Read this page in English" },
    soundOff: { en: "Turn sound effects off", ar: "إيقاف المؤثرات الصوتية" },
    soundOn: { en: "Turn sound effects on", ar: "تشغيل المؤثرات الصوتية" },
  },
  nav: {
    home: { en: "Home", ar: "الرئيسية" },
    about: { en: "About", ar: "نبذة" },
    experience: { en: "Experience", ar: "الخبرات" },
    projects: { en: "Projects", ar: "المشاريع" },
    skills: { en: "Skills", ar: "المهارات" },
    contact: { en: "Contact", ar: "تواصل" },
  },
  cta: {
    viewProjects: { en: "View projects", ar: "استعرض المشاريع" },
    bookCall: { en: "Book a call", ar: "احجز مكالمة" },
    downloadCv: { en: "Download CV", ar: "تحميل السيرة الذاتية" },
    viewCv: { en: "View CV", ar: "عرض السيرة الذاتية" },
    cvSoon: { en: "CV coming soon", ar: "السيرة الذاتية قريبًا" },
    whatsapp: { en: "Chat on WhatsApp", ar: "تواصل عبر واتساب" },
    readCaseStudy: { en: "Read the case study", ar: "اقرأ دراسة الحالة" },
    allProjects: { en: "All projects", ar: "كل المشاريع" },
    nextCaseStudy: { en: "Next case study", ar: "دراسة الحالة التالية" },
    home: { en: "Go to the home page", ar: "العودة إلى الصفحة الرئيسية" },
    backToTop: { en: "Back to top", ar: "العودة إلى الأعلى" },
  },
  sections: {
    about: {
      index: "01",
      command: "whoami",
      title: { en: "About", ar: "نبذة عني" },
      subtitle: {
        en: "Who I am, how I work, and what I have built.",
        ar: "من أنا، وكيف أعمل، وماذا بنيت.",
      },
    },
    experience: {
      index: "02",
      command: "git log --career",
      title: { en: "Experience", ar: "الخبرات" },
      subtitle: {
        en: "Roles, training and education, most recent first.",
        ar: "الأدوار والتدريب والتعليم، من الأحدث إلى الأقدم.",
      },
    },
    projects: {
      index: "03",
      command: "ls ./projects",
      title: { en: "Projects", ar: "المشاريع" },
      subtitle: {
        en: "Two case studies, told from the product problem to what shipped.",
        ar: "دراستا حالة، من مشكلة المنتج حتى ما تم إطلاقه.",
      },
    },
    process: {
      index: "04",
      command: "cat workflow.md",
      title: { en: "How I work", ar: "طريقة عملي" },
    },
    skills: {
      index: "05",
      command: "stack --list",
      title: { en: "Technical Arsenal & Stack", ar: "الترسانة التقنية والأدوات" },
      subtitle: {
        en: "The technologies I use to build reliable backend systems, data solutions and automation workflows.",
        ar: "التقنيات التي أستخدمها لبناء أنظمة خلفية موثوقة، وحلول بيانات، وسير عمل مؤتمت.",
      },
    },
    contact: {
      index: "06",
      command: "ping mohammed",
      title: { en: "Let's talk about your product", ar: "لنتحدث عن منتجك" },
      subtitle: {
        en: "Email, WhatsApp or a scheduled call. Pick whatever is easiest for you.",
        ar: "البريد الإلكتروني أو واتساب أو مكالمة مجدولة. اختر الأسهل لك.",
      },
    },
  },
  hero: {
    status: { en: "Open to remote roles", ar: "متاح للعمل عن بُعد" },
    whatsapp: { en: "Let's build something", ar: "لنبنِ شيئًا معًا" },
    stats: { en: "At a glance", ar: "لمحة سريعة" },
  },
  about: {
    highlights: { en: "Highlights", ar: "أبرز المحطات" },
    photoAlt: { en: "Portrait of Mohammed Salem", ar: "صورة محمد سالم" },
    photoSoon: { en: "Photo coming soon", ar: "الصورة قريبًا" },
  },
  experience: {
    mostRecent: { en: "Most recent", ar: "الأحدث" },
    training: { en: "Training and education", ar: "التدريب والتعليم" },
  },
  projects: {
    more: { en: "More projects", ar: "مشاريع أخرى" },
    problem: { en: "The problem", ar: "المشكلة" },
    contribution: { en: "My contribution", ar: "مساهمتي" },
    role: { en: "Role", ar: "الدور" },
    context: { en: "Context", ar: "السياق" },
    period: { en: "Period", ar: "الفترة" },
    stage: { en: "Stage", ar: "المرحلة" },
    stack: { en: "Stack", ar: "التقنيات" },
    links: { en: "Links", ar: "روابط" },
    figures: { en: "Project figures", ar: "أرقام المشروع" },
  },
  caseStudy: {
    sections: { en: "Case study sections", ar: "أقسام دراسة الحالة" },
    problem: { en: "Problem", ar: "المشكلة" },
    approach: { en: "Approach", ar: "المنهجية" },
    implementation: { en: "What I built", ar: "ما بنيته" },
    decisions: { en: "Engineering decisions", ar: "القرارات الهندسية" },
    status: { en: "Status", ar: "الحالة" },
    learned: { en: "What I learned", ar: "ما تعلمته" },
    mine: { en: "My work", ar: "عملي" },
    team: { en: "Team decision", ar: "قرار الفريق" },
    more: { en: "More projects", ar: "مشاريع أخرى" },
  },
  process: {
    aiAssisted: { en: "AI-assisted", ar: "بمساعدة الذكاء الاصطناعي" },
    principles: { en: "Principles", ar: "المبادئ" },
  },
  skills: {
    toolkit: { en: "Toolkit", ar: "الأدوات" },
    hint: { en: "Pick an area to filter", ar: "اختر مجالًا للتصفية" },
    filter: { en: "Filter technologies by area", ar: "تصفية التقنيات حسب المجال" },
    all: { en: "All technologies", ar: "كل التقنيات" },
    /** {n} is the number of technologies. */
    total: { en: "{n} technologies", ar: "{n} تقنية" },
    /** {shown} of {n} technologies are on screen. */
    showing: { en: "Showing {shown} of {n}", ar: "عرض {shown} من {n}" },
    focus: { en: "Focus", ar: "التركيز" },
  },
  contact: {
    headlineLead: { en: "Have a ", ar: "لديك " },
    headlineAccent: { en: "product", ar: "منتج" },
    headlineTail: { en: " in mind?", ar: " في بالك؟" },
    body: {
      en: "Whether you're hiring a backend or full-stack engineer, or need someone to turn requirements into a working product, I'd like to hear about it.",
      ar: "سواء كنت توظّف مهندس واجهة خلفية أو مهندسًا متكاملًا، أو تبحث عمّن يحوّل المتطلبات إلى منتج يعمل، يسعدني أن أسمع منك.",
    },
    whatsappCta: { en: "Message me on WhatsApp", ar: "راسلني على واتساب" },
    email: { en: "Email", ar: "البريد الإلكتروني" },
    phone: { en: "Phone", ar: "الهاتف" },
    copy: { en: "Copy email", ar: "نسخ البريد" },
    copied: { en: "Copied", ar: "تم النسخ" },
    whatsapp: { en: "WhatsApp", ar: "واتساب" },
    bookingPrompt: { en: "Prefer a call?", ar: "تفضّل مكالمة؟" },
    bookingSubject: { en: "Call request", ar: "طلب مكالمة" },
    pickTime: { en: "Pick a time", ar: "اختر موعدًا" },
    emailToSchedule: { en: "Email me to schedule one", ar: "راسلني لتحديد موعد" },
    findMe: { en: "Find me online", ar: "تجدني على" },
    availabilityLabel: { en: "Availability", ar: "الإتاحة" },
    availability: { en: "Open to remote roles", ar: "متاح للعمل عن بُعد" },
    availabilityBody: {
      en: "Based in Palestine · Available for remote work",
      ar: "مقيم في فلسطين · متاح للعمل عن بُعد",
    },
  },
  common: {
    source: { en: "Source:", ar: "المصدر:" },
    pending: { en: "To be confirmed.", ar: "بانتظار التأكيد." },
  },
  notFound: {
    title: { en: "Page not found", ar: "الصفحة غير موجودة" },
    body: {
      en: "There is nothing at this address. The home page has the projects, experience and contact details.",
      ar: "لا يوجد شيء على هذا العنوان. تجد في الصفحة الرئيسية المشاريع والخبرات ووسائل التواصل.",
    },
  },
} satisfies Record<string, unknown>;

export type Dictionary = ReturnType<typeof getDictionary>;

export function getDictionary(locale: Locale) {
  return localize(dictionary, locale);
}

// Re-exported for content files that need the L type.
export type { L };
