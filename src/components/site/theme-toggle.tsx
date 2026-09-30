"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";

/**
 * Switches between light and dark. Both icons and both labels are rendered
 * and CSS shows the right pair from data-theme, so server and client markup
 * match and nothing flashes.
 */
export function ThemeToggle({ toDark, toLight }: { toDark: string; toLight: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="group inline-flex size-10 items-center justify-center rounded-sheet text-ink transition-colors duration-200 hover:bg-surface-2"
    >
      <MoonIcon
        aria-hidden="true"
        className="size-[1.15rem] transition-transform duration-300 group-hover:-rotate-12 dark:hidden"
      />
      <SunIcon
        aria-hidden="true"
        className="hidden size-[1.15rem] transition-transform duration-300 group-hover:rotate-45 dark:block"
      />
      <span className="sr-only dark:hidden">{toDark}</span>
      <span className="sr-only hidden dark:block">{toLight}</span>
    </button>
  );
}
