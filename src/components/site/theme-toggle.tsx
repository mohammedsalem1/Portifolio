"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";

/**
 * Switches between the drawing (light) and the blueprint (dark).
 * Both icons and both labels are always rendered and CSS shows the right
 * pair from data-theme, so server and client markup match.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="inline-flex size-11 items-center justify-center rounded-sheet text-ink transition-colors duration-150 hover:bg-ink hover:text-ground"
    >
      <MoonIcon aria-hidden="true" className="size-5 dark:hidden" />
      <SunIcon aria-hidden="true" className="hidden size-5 dark:block" />
      <span className="sr-only dark:hidden">Switch to dark theme</span>
      <span className="sr-only hidden dark:block">Switch to light theme</span>
    </button>
  );
}
