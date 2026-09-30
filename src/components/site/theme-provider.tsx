"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Sets data-theme on <html> before paint, so there is no flash.
 * Follows the system setting until the visitor picks a theme.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
