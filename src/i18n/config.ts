export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Arabic reads right to left; everything else here reads left to right. */
export function dirOf(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

/**
 * Prefix an internal link with the locale. External links, mailto: and
 * hash-only links pass through untouched.
 *   ("ar", "/projects/x") -> "/ar/projects/x"
 *   ("ar", "/#about")     -> "/ar#about"
 */
export function localeHref(locale: Locale, href: string): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  if (href === "/") return `/${locale}`;
  if (href.startsWith("/#")) return `/${locale}${href.slice(1)}`;
  return `/${locale}${href}`;
}

/** Swap the locale segment of a path: /en/projects/x -> /ar/projects/x. */
export function switchLocalePath(pathname: string, to: Locale): string {
  const parts = pathname.split("/");
  if (parts.length > 1 && isLocale(parts[1])) {
    parts[1] = to;
    return parts.join("/") || `/${to}`;
  }
  return `/${to}${pathname === "/" ? "" : pathname}`;
}
