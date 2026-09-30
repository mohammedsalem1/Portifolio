"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, switchLocalePath } from "@/i18n/config";
import { cn } from "@/lib/cn";

/**
 * Links to the same page in the other language. The label is written in the
 * target language, so each reader finds their own.
 */
export function LangSwitch({
  to,
  label,
  description,
  className,
}: {
  to: Locale;
  /** "العربية" or "English". */
  label: string;
  /** Accessible description, in the current language. */
  description: string;
  className?: string;
}) {
  const pathname = usePathname() ?? "/";

  return (
    <Link
      href={switchLocalePath(pathname, to)}
      hrefLang={to}
      lang={to}
      aria-label={description}
      className={cn(
        "inline-flex h-10 items-center rounded-sheet px-3 text-small font-semibold text-ink transition-colors duration-200 hover:bg-surface-2",
        className,
      )}
    >
      {label}
    </Link>
  );
}
