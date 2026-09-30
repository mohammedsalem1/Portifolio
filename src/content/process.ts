import type { Principle, WorkflowStep } from "./types";

const QUIZORA_AI_LOG = "https://github.com/mohammedsalem1/Quizora/blob/master/AI_USAGE.md";

export const workflowStatement = {
  en: "AI is a development multiplier, not a replacement for engineering judgment.",
  ar: "الذكاء الاصطناعي يضاعف سرعة التطوير، لكنه لا يحل محل الحكم الهندسي.",
};

export const workflow: WorkflowStep[] = [
  {
    name: { en: "Problem", ar: "المشكلة" },
    body: {
      en: "Write down who it is for and what must be true when it works. On Quizora that was a written brief in 16 phases.",
      ar: "أكتب لمن هو المنتج وما الذي يجب أن يتحقق عندما يعمل. في Quizora كان ذلك وثيقة متطلبات من 16 مرحلة.",
    },
    aiAssisted: false,
  },
  {
    name: { en: "Research", ar: "البحث" },
    body: {
      en: "Read what already exists: the requirements, the data and the constraints.",
      ar: "أقرأ ما هو موجود: المتطلبات والبيانات والقيود.",
    },
    aiAssisted: false,
  },
  {
    name: { en: "AI-assisted exploration", ar: "الاستكشاف بمساعدة الذكاء الاصطناعي" },
    body: {
      en: "Claude Code lays out options with their trade-offs. I choose between them.",
      ar: "يعرض Claude Code البدائل ومزايا كل منها وعيوبه، وأنا أختار بينها.",
    },
    aiAssisted: true,
  },
  {
    name: { en: "Architecture", ar: "البنية" },
    body: {
      en: "Settle the data model and the rules first. On Quizora the data model was reviewed and approved before implementation.",
      ar: "أحسم نموذج البيانات والقواعد أولًا. في Quizora رُوجع نموذج البيانات واعتُمد قبل التنفيذ.",
    },
    aiAssisted: false,
  },
  {
    name: { en: "Implementation", ar: "التنفيذ" },
    body: {
      en: "Small commits, one phase at a time. Every change arrives as a pull request that I read before merging.",
      ar: "تغييرات صغيرة، مرحلة بعد مرحلة. كل تغيير يصل كطلب سحب أقرؤه قبل دمجه.",
    },
    aiAssisted: true,
  },
  {
    name: { en: "Testing", ar: "الاختبار" },
    body: {
      en: "Tests are written with the code, then protections are broken on purpose to prove the tests can fail.",
      ar: "تُكتب الاختبارات مع الكود، ثم تُكسر الحمايات عمدًا للتأكد من أن الاختبارات قادرة على الفشل.",
    },
    aiAssisted: true,
  },
  {
    name: { en: "Iteration", ar: "التكرار" },
    body: {
      en: "Each phase ends with a report and an approval before the next one begins.",
      ar: "تنتهي كل مرحلة بتقرير وموافقة قبل أن تبدأ التالية.",
    },
    aiAssisted: false,
  },
  {
    name: { en: "Deployment", ar: "النشر" },
    body: {
      en: "Skill Swap's API went to Render. NoBound Hires is in early access.",
      ar: "نُشر الـ API الخاص بـ Skill Swap على Render، و NoBound Hires في مرحلة الوصول المبكر.",
    },
    aiAssisted: false,
  },
];

export const workflowSource = {
  label: { en: "Quizora AI usage log", ar: "سجل استخدام الذكاء الاصطناعي في Quizora" },
  href: QUIZORA_AI_LOG,
};

export const automationNote = {
  en: "Automation: I completed Gaza Sky Geeks' n8n training in June 2026 and built small workflows there, such as a form that routes orders by amount and sends the right email.",
  ar: "الأتمتة: أتممت تدريب n8n من Gaza Sky Geeks في يونيو 2026، وبنيت خلاله سير عمل صغيرة، مثل نموذج يوجّه الطلبات حسب قيمتها ويرسل البريد المناسب.",
};

export const principles: Principle[] = [
  {
    title: { en: "Understand the problem", ar: "افهم المشكلة" },
    body: { en: "Who is it for, and what has to be true when it works.", ar: "لمن هو، وما الذي يجب أن يتحقق عندما يعمل." },
  },
  {
    title: { en: "Design the solution", ar: "صمّم الحل" },
    body: { en: "Data model and rules before endpoints and screens.", ar: "نموذج البيانات والقواعد قبل نقاط الـ API والواجهات." },
  },
  {
    title: { en: "Build deliberately", ar: "ابنِ بتأنٍّ" },
    body: { en: "Small changes, each one reviewed.", ar: "تغييرات صغيرة، يُراجَع كل منها." },
  },
  {
    title: { en: "Use AI intelligently", ar: "استخدم الذكاء الاصطناعي بذكاء" },
    body: { en: "Let it propose and draft. Keep the decisions.", ar: "دعه يقترح ويكتب المسودة، واحتفظ بالقرار." },
  },
  {
    title: { en: "Test what matters", ar: "اختبر ما يهم" },
    body: {
      en: "Cover the rules the product depends on, and check the tests can fail.",
      ar: "غطِّ القواعد التي يعتمد عليها المنتج، وتأكد أن الاختبارات قادرة على الفشل.",
    },
  },
  {
    title: { en: "Ship and iterate", ar: "أطلق وحسّن" },
    body: { en: "Put it in front of people, then improve it.", ar: "ضعه بين أيدي الناس، ثم حسّنه." },
  },
];
