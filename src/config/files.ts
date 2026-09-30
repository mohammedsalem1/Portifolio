import { existsSync } from "node:fs";
import { join } from "node:path";
import { site } from "./site";

// Server-only: looks in the public folder, so dropping a file in is all it
// takes to switch the CV buttons and the photo on. These are functions, not
// constants, so the dev server sees a new file on the next page load; a
// production build checks once, when the pages are generated.

function publicFileExists(path: string): boolean {
  return existsSync(join(process.cwd(), "public", path));
}

export const hasCv = () => publicFileExists(site.cvPath);
export const hasPhoto = () => publicFileExists(site.photoPath);
export const hasCutout = () => publicFileExists(site.cutoutPath);
