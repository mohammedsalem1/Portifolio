import type { CaseStudy, SmallProject } from "./types";

const SKILL_SWAP_REPO = "https://github.com/mohammedsalem1/Skill-Swap-platform";
const NOBOUND_SITE = "https://noboundhires.com/";
const QUIZORA_REPO = "https://github.com/mohammedsalem1/Quizora";

const CONFIRMED_BY_MOHAMMED = { label: { en: "Confirmed by Mohammed", ar: "بتأكيد من محمد" } };
const NOBOUND_SOURCE = { label: { en: "noboundhires.com", ar: "noboundhires.com" }, href: NOBOUND_SITE };

export const featuredProjects: CaseStudy[] = [
  {
    slug: "nobound-hires",
    name: "NoBound Hires",
    summary: {
      en: "Employment infrastructure for the MENA region: companies employ, contract, onboard and pay people in markets other providers skip.",
      ar: "بنية توظيف لمنطقة الشرق الأوسط وشمال أفريقيا: تتيح للشركات توظيف الأشخاص والتعاقد معهم وتأهيلهم ودفع رواتبهم في أسواق يتجاهلها المزوّدون الآخرون.",
    },
    role: {
      en: "Product Engineer, AI-assisted product development",
      ar: "مهندس منتجات، تطوير منتجات بمساعدة الذكاء الاصطناعي",
    },
    context: { en: "Alif Studio", ar: "Alif Studio" },
    period: { en: "Jun 2026 to Sep 2026", ar: "يونيو 2026 إلى سبتمبر 2026" },
    stage: { en: "Early access", ar: "وصول مبكر" },
    stack: ["Next.js", "NestJS", "Claude Code"],
    links: [{ label: { en: "noboundhires.com", ar: "noboundhires.com" }, href: NOBOUND_SITE }],
    card: {
      problem: {
        en: "Hiring in countries such as Palestine, Jordan, Sudan or Syria is hard because bank transfers into them are difficult.",
        ar: "التوظيف في دول مثل فلسطين والأردن والسودان وسوريا صعب، لأن التحويلات البنكية إليها معقّدة.",
      },
      contribution: {
        en: "Worked on the MVP of the employer of record platform: a Next.js front end and a NestJS back end, built with Claude Code.",
        ar: "عملت على النسخة الأولى (MVP) من منصة صاحب العمل المسجّل: واجهة أمامية بـ Next.js وواجهة خلفية بـ NestJS، بُنيت باستخدام Claude Code.",
      },
    },
    figures: [],
    problem: {
      status: "confirmed",
      body: [
        {
          en: "Companies that want to hire in countries such as Palestine, Jordan, Sudan or Syria run into a practical problem: bank transfers into these countries are difficult.",
          ar: "تواجه الشركات التي تريد التوظيف في دول مثل فلسطين والأردن والسودان وسوريا مشكلة عملية: التحويلات البنكية إلى هذه الدول صعبة.",
        },
        {
          en: "NoBound Hires is an employer of record platform. A company can hire an employee or a contractor there without setting up its own local entity. Palestine is the first market. Egypt, Jordan, Saudi Arabia, Syria and Sudan are listed as coming.",
          ar: "NoBound Hires منصة تعمل بصفة صاحب العمل المسجّل (Employer of Record)، فتستطيع الشركة توظيف موظف أو متعاقد هناك دون تأسيس كيان محلي خاص بها. فلسطين هي السوق الأولى، ومصر والأردن والسعودية وسوريا والسودان مدرجة كأسواق قادمة.",
        },
      ],
      sources: [NOBOUND_SOURCE, CONFIRMED_BY_MOHAMMED],
    },
    approach: {
      status: "confirmed",
      body: [
        {
          en: "I worked on the MVP as Product Engineer: taking the product idea and turning it into a working implementation.",
          ar: "عملت على النسخة الأولى (MVP) بصفتي مهندس منتجات: أخذت فكرة المنتج وحوّلتها إلى تطبيق يعمل.",
        },
        {
          en: "The front end is Next.js and the back end is NestJS. I built with Claude Code as my development tool.",
          ar: "الواجهة الأمامية مبنية بـ Next.js والواجهة الخلفية بـ NestJS، واستخدمت Claude Code أداةً للتطوير.",
        },
      ],
      sources: [CONFIRMED_BY_MOHAMMED],
    },
    implementation: {
      status: "pending",
      body: [
        {
          en: "The product covers the employment flow end to end: employ, bilingual Arabic and English contracts, onboarding with identity and document checks, payroll, funding, payment and records.",
          ar: "يغطي المنتج مسار التوظيف كاملًا: التوظيف، وعقود ثنائية اللغة بالعربية والإنجليزية، والتأهيل مع التحقق من الهوية والوثائق، والرواتب، والتمويل، والدفع، والسجلات.",
        },
      ],
      pendingNote: {
        en: "Which parts of the MVP I built myself, in detail.",
        ar: "الأجزاء التي بنيتها بنفسي من النسخة الأولى، بالتفصيل.",
      },
      sources: [NOBOUND_SOURCE],
    },
    decisions: {
      status: "pending",
      items: [],
      pendingNote: {
        en: "The engineering decisions that mattered on this product.",
        ar: "القرارات الهندسية المؤثرة في هذا المنتج.",
      },
    },
    outcome: {
      status: "confirmed",
      body: [
        {
          en: "NoBound Hires is in early access. Palestine opens first, and the site takes early-access sign-ups from companies and from people looking for work.",
          ar: "NoBound Hires في مرحلة الوصول المبكر. تنطلق فلسطين أولًا، ويستقبل الموقع طلبات التسجيل المبكر من الشركات ومن الباحثين عن عمل.",
        },
      ],
      sources: [NOBOUND_SOURCE],
    },
    learned: {
      status: "pending",
      body: [],
      pendingNote: {
        en: "What I took away from building this MVP.",
        ar: "ما خرجت به من بناء هذه النسخة الأولى.",
      },
      sources: [],
    },
  },
  {
    slug: "skill-swap",
    name: "Skill Swap",
    summary: {
      en: "A platform where people exchange skills instead of paying: offer what you know in return for what you want to learn.",
      ar: "منصة يتبادل فيها الناس المهارات بدل الدفع: تقدّم ما تعرفه مقابل ما تريد تعلّمه.",
    },
    role: { en: "Backend Team Lead", ar: "قائد فريق الواجهة الخلفية" },
    context: {
      en: "Gaza Sky Geeks Code2Career capstone, team of four",
      ar: "مشروع التخرج في برنامج Code2Career من Gaza Sky Geeks، فريق من أربعة",
    },
    period: { en: "Dec 2025 to Mar 2026", ar: "ديسمبر 2025 إلى مارس 2026" },
    stage: { en: "Source public, deployment offline", ar: "الكود منشور، والنشر متوقف" },
    stack: ["NestJS 11", "TypeScript", "Prisma", "PostgreSQL", "JWT (Passport)", "Swagger"],
    links: [{ label: { en: "Source on GitHub", ar: "الكود على GitHub" }, href: SKILL_SWAP_REPO }],
    card: {
      problem: {
        en: "Learning a new skill usually costs money. Skill Swap lets two people trade what they know instead.",
        ar: "تعلّم مهارة جديدة يكلّف المال عادةً. يتيح Skill Swap لشخصين تبادل ما يعرفانه بدلًا من ذلك.",
      },
      contribution: {
        en: "Led a team of four on the back end. Wrote the reviews and gamification modules, built registration and password reset, and merged 31 of the 34 pull-request merges.",
        ar: "قدت فريقًا من أربعة في الواجهة الخلفية. كتبت وحدتي التقييمات ونظام النقاط والشارات، وبنيت التسجيل واستعادة كلمة المرور، ونفّذت 31 من أصل 34 عملية دمج لطلبات السحب.",
      },
    },
    figures: [
      { value: "164", label: { en: "commits, 138 of them mine", ar: "commit، منها 138 لي" } },
      { value: "41", label: { en: "pull requests", ar: "طلب سحب (Pull Request)" } },
      { value: "18", label: { en: "data models", ar: "نموذج بيانات" } },
      { value: "9", label: { en: "schema migrations", ar: "ترحيلًا للمخطط (Migration)" } },
    ],
    problem: {
      status: "confirmed",
      body: [
        {
          en: "Learning a new skill usually costs money. Skill Swap lets people trade instead: you offer a skill you have in return for one you want to learn.",
          ar: "تعلّم مهارة جديدة يكلّف المال عادةً. يتيح Skill Swap للناس المقايضة بدلًا من ذلك: تقدّم مهارة تملكها مقابل مهارة تريد تعلّمها.",
        },
        {
          en: "To work as a product it needed accounts, a catalogue of skills, swap requests between two people, scheduled sessions, reviews after a session, and an admin side.",
          ar: "ليعمل كمنتج، احتاج إلى حسابات، وكتالوج للمهارات، وطلبات تبادل بين شخصين، وجلسات مجدولة، وتقييمات بعد كل جلسة، ولوحة إدارة.",
        },
      ],
      sources: [{ label: { en: "Repository README and modules", ar: "ملف README ووحدات المستودع" }, href: SKILL_SWAP_REPO }],
    },
    approach: {
      status: "confirmed",
      body: [
        {
          en: "We were a team of four and I was team lead. We split the product into modules: auth, users, skills, swaps, sessions, reviews, gamification and admin.",
          ar: "كنا فريقًا من أربعة وكنت قائد الفريق. قسّمنا المنتج إلى وحدات: المصادقة، والمستخدمين، والمهارات، والتبادلات، والجلسات، والتقييمات، والنقاط والشارات، والإدارة.",
        },
        {
          en: "Everyone worked on feature branches. Changes went through pull requests into a develop branch, and from there to main. I performed 31 of the 34 pull-request merges in the history, including my teammates' branches.",
          ar: "عمل كل منا على فروع مستقلة للميزات، ومرّت التغييرات عبر طلبات سحب إلى فرع develop ثم إلى main. نفّذت 31 من أصل 34 عملية دمج في سجل المشروع، ومنها فروع زملائي.",
        },
      ],
      sources: [
        { label: { en: "README: team and team lead", ar: "README: الفريق وقائده" }, href: SKILL_SWAP_REPO },
        { label: { en: "Git history", ar: "سجل Git" }, href: `${SKILL_SWAP_REPO}/commits/main` },
      ],
    },
    implementation: {
      status: "confirmed",
      body: [
        {
          en: "I wrote the reviews and gamification modules and the seed script.",
          ar: "كتبت وحدتي التقييمات ونظام النقاط والشارات، وسكربت البيانات الأولية (Seed).",
        },
        {
          en: "In auth I built registration with email verification codes and the forgot and reset password flow, then refactored the module. A teammate wrote the JWT guard and the login endpoint.",
          ar: "في المصادقة بنيت التسجيل برموز تحقق عبر البريد، ومسار نسيان كلمة المرور وإعادة تعيينها، ثم أعدت هيكلة الوحدة. أما حارس JWT ونقطة تسجيل الدخول فكتبهما زميل في الفريق.",
        },
        {
          en: "I worked with my teammates on skills discovery, swap requests, sessions and the admin panel, and I wrote almost all of the nine schema migrations.",
          ar: "عملت مع زملائي على اكتشاف المهارات وطلبات التبادل والجلسات ولوحة الإدارة، وكتبت تقريبًا كل ترحيلات المخطط التسعة.",
        },
        {
          en: "By git blame, about 42% of the code on main today is mine. It is a team codebase, and I am its largest contributor.",
          ar: "بحسب git blame، نحو 42% من الكود الحالي في main من كتابتي. إنه كود فريق، وأنا أكبر المساهمين فيه.",
        },
      ],
      sources: [
        { label: { en: "Git history and blame", ar: "سجل Git و blame" }, href: `${SKILL_SWAP_REPO}/commits/main` },
        { label: { en: "Pull requests", ar: "طلبات السحب" }, href: `${SKILL_SWAP_REPO}/pulls?q=is%3Apr` },
      ],
    },
    decisions: {
      status: "confirmed",
      items: [
        {
          title: { en: "PostgreSQL instead of MySQL", ar: "PostgreSQL بدلًا من MySQL" },
          body: {
            en: "The project started on MySQL. To deploy the API on Render I moved the schema and the Prisma datasource to PostgreSQL.",
            ar: "بدأ المشروع على MySQL. ولنشر الـ API على Render نقلت المخطط ومصدر بيانات Prisma إلى PostgreSQL.",
          },
          owner: "mine",
          sources: [{ label: { en: "Pull requests #38 and #39", ar: "طلبا السحب #38 و #39" }, href: `${SKILL_SWAP_REPO}/pull/39` }],
        },
        {
          title: { en: "Points as a ledger, not a balance", ar: "النقاط كسجل حركات، لا كرصيد" },
          body: {
            en: "Each award is a row with an amount, a reason and a type. A user's total is the sum of their rows, so every point traces back to the action that earned it.",
            ar: "كل منحة نقاط سطر فيه قيمة وسبب ونوع، ومجموع المستخدم هو حاصل جمع سطوره، فتُعرف كل نقطة بالإجراء الذي كسبها.",
          },
          owner: "mine",
          sources: [
            {
              label: { en: "gamification.service.ts", ar: "gamification.service.ts" },
              href: `${SKILL_SWAP_REPO}/blob/main/src/modules/gamification/gamification.service.ts`,
            },
          ],
        },
        {
          title: { en: "One review per person per swap", ar: "تقييم واحد لكل شخص في كل تبادل" },
          body: {
            en: "A review belongs to a swap request. The service rejects a second review from the same person for the same swap, and writing a review earns points.",
            ar: "يرتبط كل تقييم بطلب تبادل، وترفض الخدمة تقييمًا ثانيًا من الشخص نفسه للتبادل نفسه، وكتابة التقييم تمنح نقاطًا.",
          },
          owner: "mine",
          sources: [
            {
              label: { en: "reviews.service.ts", ar: "reviews.service.ts" },
              href: `${SKILL_SWAP_REPO}/blob/main/src/modules/reviews/reviews.service.ts`,
            },
          ],
        },
        {
          title: { en: "Routes are private by default", ar: "المسارات خاصة افتراضيًا" },
          body: {
            en: "A global JWT guard protects every route, and public ones are marked explicitly. A teammate wrote the guard. I built registration, verification and password reset on top of it.",
            ar: "حارس JWT عام يحمي كل المسارات، وتُعلَّم المسارات العامة صراحةً. كتب الحارسَ زميلٌ في الفريق، وبنيت فوقه التسجيل والتحقق وإعادة تعيين كلمة المرور.",
          },
          owner: "team",
          sources: [{ label: { en: "main.ts", ar: "main.ts" }, href: `${SKILL_SWAP_REPO}/blob/main/src/main.ts` }],
        },
        {
          title: { en: "Validation at the boundary", ar: "التحقق عند حدود النظام" },
          body: {
            en: "A global validation pipe strips and rejects unknown fields, and shared exception filters give every error the same shape.",
            ar: "أداة تحقق عامة تحذف الحقول غير المعروفة وترفضها، ومرشّحات استثناءات مشتركة تعطي كل خطأ الشكل نفسه.",
          },
          owner: "team",
          sources: [{ label: { en: "main.ts", ar: "main.ts" }, href: `${SKILL_SWAP_REPO}/blob/main/src/main.ts` }],
        },
      ],
    },
    outcome: {
      status: "confirmed",
      body: [
        {
          en: "The API is documented with Swagger and was deployed on Render during the program. That deployment is not online today. The source is public on GitHub.",
          ar: "الـ API موثّق بـ Swagger وكان منشورًا على Render خلال البرنامج. هذا النشر غير متاح حاليًا، والكود منشور على GitHub.",
        },
      ],
      sources: [{ label: { en: "Repository README", ar: "ملف README في المستودع" }, href: SKILL_SWAP_REPO }],
    },
    learned: {
      status: "pending",
      body: [],
      pendingNote: {
        en: "What I took away from leading this team.",
        ar: "ما خرجت به من قيادة هذا الفريق.",
      },
      sources: [],
    },
  },
];

export const moreProjects: SmallProject[] = [
  {
    name: "Quizora",
    summary: {
      en: "A timed quiz platform for a tutoring centre. Teachers write multiple-choice quizzes, and students take each one once, on their phones. The interface is Arabic, right to left.",
      ar: "منصة اختبارات موقوتة لمركز تدريس. يكتب المعلمون اختبارات اختيار من متعدد، ويؤديها الطلاب مرة واحدة من هواتفهم. الواجهة عربية من اليمين إلى اليسار.",
    },
    detail: {
      en: "Built in 16 phases with Claude Code. I wrote the brief, chose between the options it laid out, approved each phase and merged every pull request. The repository records every decision and how the AI's work was checked.",
      ar: "بُني على 16 مرحلة باستخدام Claude Code. كتبت المتطلبات، واخترت بين البدائل التي عرضها، ووافقت على كل مرحلة، ودمجت كل طلب سحب. ويوثّق المستودع كل قرار وكيف تم التحقق من عمل الذكاء الاصطناعي.",
    },
    stack: ["NestJS", "Prisma", "PostgreSQL", "Next.js 16", "Tailwind"],
    links: [
      { label: { en: "Source on GitHub", ar: "الكود على GitHub" }, href: QUIZORA_REPO },
      { label: { en: "Decisions log", ar: "سجل القرارات" }, href: `${QUIZORA_REPO}/blob/master/DECISIONS.md` },
      { label: { en: "AI usage log", ar: "سجل استخدام الذكاء الاصطناعي" }, href: `${QUIZORA_REPO}/blob/master/AI_USAGE.md` },
    ],
    sources: [{ label: { en: "AI_USAGE.md", ar: "AI_USAGE.md" }, href: `${QUIZORA_REPO}/blob/master/AI_USAGE.md` }],
  },
  {
    name: "Food Delivery",
    summary: {
      en: "A team back-end project covering orders, payments and the delivery lifecycle, with the order flow built as a chain of handlers.",
      ar: "مشروع واجهة خلفية جماعي يغطي الطلبات والمدفوعات ودورة التوصيل، ومسار الطلب فيه مبني كسلسلة من المعالِجات (Chain of Responsibility).",
    },
    detail: { en: "I contributed 71 of the 306 commits.", ar: "ساهمت بـ 71 من أصل 306 commit." },
    stack: ["Express", "Prisma", "PostgreSQL", "Stripe"],
    links: [
      { label: { en: "Source on GitHub", ar: "الكود على GitHub" }, href: "https://github.com/mohammedsalem1/Food-delivery" },
    ],
    sources: [
      { label: { en: "Git history", ar: "سجل Git" }, href: "https://github.com/mohammedsalem1/Food-delivery" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return featuredProjects.find((project) => project.slug === slug);
}
