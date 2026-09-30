# Mohammed Salem, portfolio

Personal site for Mohammed Salem, Product Engineer. English and Arabic, light
and dark, one home page and a case study page per featured project.

## Stack

- Next.js 16 (App Router, every page statically generated)
- React 19 and TypeScript
- Tailwind CSS 4, with the design tokens in `src/app/globals.css`
- next-themes for light and dark
- Phosphor icons
- No animation library: CSS plus small IntersectionObserver hooks

## Commands

```bash
pnpm install   # once
pnpm dev       # http://localhost:3000 (redirects to /en)
pnpm build     # production build
pnpm start     # serve the production build
pnpm lint      # ESLint
```

## Languages

- Routes: `/en/...` and `/ar/...`. `/` redirects to `/en`.
- Arabic pages render right to left (`<html lang="ar" dir="rtl">`).
- Interface words live in `src/i18n/dictionaries.ts`.
- Content strings are `{ en, ar }` pairs in `src/content`, next to the facts
  they describe, so a translation can never drift away from its source.

## CV, photo and booking

All in `src/config/site.ts`:

| What | How to turn it on |
|---|---|
| CV | Put the PDF at `public/cv/Mohammed-Salem-CV.pdf`. "Download CV" and "View CV" appear automatically. |
| Photo | Put a portrait at `public/images/profile.jpg` (4:5). The About section replaces its placeholder. |
| Booking | Set `NEXT_PUBLIC_BOOKING_URL` (Cal.com, Calendly...). Until then "Book a call" opens an email. |
| WhatsApp | `whatsappNumber` in the same file (international format, digits only). |

## Editing content

All copy lives in `src/content`. Components only lay it out.

| File | What it holds |
|---|---|
| `profile.ts` | Name, role, tagline, about text, facts, highlights |
| `projects.ts` | The two featured case studies and "More projects" |
| `experience.ts` | Roles, training and education |
| `skills.ts` | Skill groups, each linked to the work that shows it |
| `process.ts` | The hero pipeline, the workflow steps, the principles |

The rule for this site: nothing is published without a source.

Every block of copy carries its `sources` and a `status`:

- `confirmed`: backed by a repository, a document, the live product, or
  confirmed by Mohammed.
- `pending`: not confirmed yet. The site shows a "To be confirmed" marker next
  to it, so an open question never reads as a fact.

To settle a pending item, write the confirmed text (both languages) in `body`,
add where it comes from to `sources`, change `status` to `"confirmed"` and
remove `pendingNote`.

## Structure

```text
src/app/[lang]     locale layout, home page, case studies, share image
src/app            global 404, sitemap, robots, icon, fonts, global CSS
src/components     hero, sections, case-study, site (header, footer), ui
src/config         contact details, CV, photo and booking settings
src/content        all copy and data, with types in types.ts
src/i18n           locales, dictionaries, the localize helper
docs               design-system.md
```

## Deploying

Set `NEXT_PUBLIC_SITE_URL` to the public address, for example
`https://example.com`. It is used for canonical and language links, the
sitemap and the share image. On Vercel the production address is picked up
automatically if the variable is not set.
