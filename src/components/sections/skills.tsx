import {
  BracketsAngleIcon,
  ChartLineUpIcon,
  CloudArrowUpIcon,
  DatabaseIcon,
  LightningIcon,
  SquaresFourIcon,
  TerminalWindowIcon,
} from "@phosphor-icons/react/dist/ssr";
import { TechIcon } from "@/components/icons/tech-icon";
import { Section } from "@/components/ui/section";
import { getContent } from "@/content";
import type { StackCategoryId } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";
import { type ExplorerCategory, type ExplorerItem, StackExplorer } from "./stack-explorer";

const categoryIcons: Record<StackCategoryId, typeof DatabaseIcon> = {
  backend: TerminalWindowIcon,
  data: DatabaseIcon,
  devops: CloudArrowUpIcon,
  analytics: ChartLineUpIcon,
  automation: LightningIcon,
  frontend: BracketsAngleIcon,
};

/** A focus area is drawn with its category's icon, or the TypeScript mark. */
function FocusIcon({ id }: { id: StackCategoryId | "typescript" }) {
  if (id === "typescript") return <TechIcon id="typescript" className="size-3.5" />;
  const Icon = categoryIcons[id];
  return <Icon aria-hidden="true" weight="bold" className="size-3.5" />;
}

export function Skills({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const { stack, stackCategories, stackFocus } = getContent(lang);

  const items: ExplorerItem[] = stack.map((tech) => ({
    id: tech.icon,
    name: tech.name,
    type: tech.type,
    category: tech.category,
    color: tech.color,
    icon: <TechIcon id={tech.icon} className="size-[1.375rem]" />,
  }));

  const categories: ExplorerCategory[] = stackCategories.map((category) => {
    const Icon = categoryIcons[category.id];
    return { id: category.id, name: category.name, icon: <Icon weight="bold" /> };
  });

  return (
    <Section id="skills" {...t.sections.skills}>
      <StackExplorer
        items={items}
        categories={categories}
        allIcon={<SquaresFourIcon weight="bold" />}
        labels={t.skills}
      >
        {/* The areas the toolkit adds up to, as a slow ticker. It pauses on
            hover and, with reduced motion, sits still and wraps. */}
        <div
          style={{ viewTransitionName: "stack-focus" }}
          className="relative flex items-center gap-4 border-t border-line bg-surface-2/30 px-5 py-3.5 md:px-7"
        >
          <span className="type-code flex shrink-0 items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-accent-2 rtl:tracking-normal">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent-2" />
            {t.skills.focus}
          </span>
          <div className="marquee min-w-0 flex-1 overflow-hidden">
            <div className="marquee-track flex w-max">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  aria-hidden={copy === 1 ? true : undefined}
                  className={cn("flex shrink-0 items-center gap-8 pe-8", copy === 1 && "marquee-copy")}
                >
                  {stackFocus.map((area) => (
                    <li
                      key={area.label}
                      className="type-code flex items-center gap-2 text-[0.6875rem] whitespace-nowrap uppercase tracking-[0.12em] text-muted rtl:tracking-normal"
                    >
                      <span className="text-accent-2">
                        <FocusIcon id={area.icon} />
                      </span>
                      {area.label}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </StackExplorer>
    </Section>
  );
}
