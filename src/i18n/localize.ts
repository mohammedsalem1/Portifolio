import type { Locale } from "./config";

/**
 * A piece of copy in both languages. Content files keep each English string
 * next to its Arabic translation, and share everything that is not text
 * (links, numbers, stacks) between the two.
 */
export type L = { en: string; ar: string };

/** The same shape with every L replaced by a plain string. */
export type Resolved<T> = T extends L
  ? string
  : T extends readonly (infer U)[]
    ? Resolved<U>[]
    : T extends object
      ? { [K in keyof T]: Resolved<T[K]> }
      : T;

function isL(value: unknown): value is L {
  return (
    typeof value === "object" &&
    value !== null &&
    "en" in value &&
    "ar" in value &&
    Object.keys(value).length === 2
  );
}

/** Pick one language out of a content structure, recursively. */
export function localize<T>(value: T, locale: Locale): Resolved<T> {
  if (isL(value)) return value[locale] as Resolved<T>;
  if (Array.isArray(value)) {
    return value.map((item) => localize(item, locale)) as Resolved<T>;
  }
  if (typeof value === "object" && value !== null) {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localize(item, locale)]),
    ) as Resolved<T>;
  }
  return value as Resolved<T>;
}
