/** Join class names, skipping falsy values. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/** True for links that leave the site. */
export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href) || href.startsWith("mailto:");
}
