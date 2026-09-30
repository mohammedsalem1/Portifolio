# Mohammed Salem, portfolio

Personal site for Mohammed Salem, Product Engineer. One home page and a case
study page for each featured project.

## Stack

- Next.js 16 (App Router, statically generated)
- React 19 and TypeScript
- Tailwind CSS 4, with the design tokens in `src/app/globals.css`
- next-themes for the light and dark modes
- Phosphor icons

## Commands

```bash
pnpm install   # once
pnpm dev       # development server on http://localhost:3000
pnpm build     # production build
pnpm start     # serve the production build
pnpm lint      # ESLint
```

## Editing content

All copy lives in `src/content`. Components only lay it out.

| File | What it holds |
|---|---|
| `profile.ts` | Name, role, tagline, about text, contact links, navigation |
| `projects.ts` | The two featured case studies and the "More projects" list |
| `experience.ts` | Roles, training and education |
| `skills.ts` | Skill groups, each linked to the work that shows it |
| `process.ts` | The hero pipeline, the workflow steps and the principles |

The rule for this site: nothing is published without a source.

Every block of copy carries its `sources` and a `status`:

- `confirmed`: backed by a repository, a document, the live product, or
  confirmed by Mohammed.
- `pending`: not confirmed yet. The site shows a dashed "To be confirmed" box
  next to it, so an open question never reads as a fact.

To settle a pending item, write the confirmed text in `body`, add where it
comes from to `sources`, change `status` to `"confirmed"` and remove
`pendingNote`.

To add a case study, add an entry to `featuredProjects` in `projects.ts`. The
page at `/projects/<slug>`, the sitemap entry and the home page sheet are
generated from it.

## Structure

```text
src/app            routes, metadata, share image, sitemap, robots
src/components     hero, sections, case-study, site (header, footer), ui
src/content        all copy and data, with types in types.ts
src/lib            small helpers
docs               design-system.md
```

The visual rules are in [docs/design-system.md](docs/design-system.md): the
tokens for both themes, the type classes, the layout of each section, and the
motion, accessibility and copy rules.

## Deploying

Set `NEXT_PUBLIC_SITE_URL` to the public address, for example
`https://example.com`. It is used for the canonical links, the sitemap and the
share image. On Vercel the production address is picked up automatically if
the variable is not set.
