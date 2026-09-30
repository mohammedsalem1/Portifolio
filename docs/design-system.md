# Design system

The site should feel like a product built by an engineer, not a resume placed
inside a website. One identity, applied the same way everywhere.

## Identity: the drawing and the blueprint

| | Light: drafting sheet | Dark: blueprint |
|---|---|---|
| Ground | Paper `#F4F6F8` | Prussian `#0B2545` |
| Text and rules | Prussian ink `#0B2545` | Chalk `#E8F0F8` |
| Secondary text | Slate `#4A5D75` | Mist `#A9BDD3` |
| Amber `#FFB020` | A highlighter: fill only, with ink on top | A signal: fill, stroke or text |

The two modes are the same drawing in two states, not an inversion. In light
mode amber never appears as text or as a lone border (1.7:1 on paper). In dark
mode it can (8.4:1 on Prussian).

Rules:

- One accent (amber). No second accent, no gradients, no glows, no shadows.
- One radius: `rounded-sheet` (2px) on buttons, tags, frames and focus rings.
- Depth comes from `bg-surface` plus a rule, never from a drop shadow.
- The dot grid (`.diagram-ground`) appears only inside diagram frames.

## Tokens

Defined in `src/app/globals.css`. Use the Tailwind names, never raw hex.

| Token | Tailwind | Use |
|---|---|---|
| `--ground` | `bg-ground` | Page background |
| `--surface` | `bg-surface` | Raised sheet, diagram frames |
| `--ink` | `text-ink`, `bg-ink` | Body text, headings |
| `--muted` | `text-muted` | Secondary text |
| `--line` | `border-line` | Decorative hairlines only |
| `--line-strong` | `border-line-strong` | Rules, interactive borders |
| `--signal` | `bg-signal` | Primary action, active pipeline stage |
| `--on-signal` | `text-on-signal` | Text on amber |
| `--focus` | (automatic) | Focus outline |

Do not use Tailwind's `dark:` color overrides for anything a token already
covers. Reach for `dark:` only for a behavioural difference between the modes.

## Type

Mona Sans for everything. JetBrains Mono only for real identifiers: routes,
module names, file names, counts. Never mono for decoration.

| Class | Use |
|---|---|
| `.type-display` | Hero headline only |
| `.type-title` | Section titles (h2) and case-study h1 |
| `.type-heading` | h3 inside sections |
| `text-lede` | One intro sentence under a title |
| `text-body` | Default body |
| `text-small` | Metadata, sources, captions |
| `.type-code` | Identifiers, in mono |

Body line length stays under about 68 characters (`max-w-[42rem]`).

## Layout

- `.container-page`: 75rem max width, 1.25rem gutter, 2rem from 640px.
- `.section-y`: vertical padding between sections.
- Each section uses `<Section id title lede>` from `src/components/ui/section.tsx`.
- Every multi-column layout collapses to one column below 768px.
- Hero uses `min-h-[100dvh]` logic carefully: never `h-screen`.

Each home section has its own layout family. Do not repeat one:

| Section | Layout |
|---|---|
| Hero | Asymmetric split: identity left, pipeline schematic right |
| About | Large statement text, then a three-row fact list |
| Featured projects | Two full-width sheets, each composed differently |
| More projects | Two rows separated by one rule |
| Process | A numbered line of eight steps (it is a real sequence) |
| Experience | Timeline rows: period column, then content |
| Skills | Definition list: group, technologies, where to see them |
| Contact | One large line of type and three links |

## Components

- `ButtonLink` (`primary`, `secondary`): 44px minimum height. One primary per view.
- `Tag`, `TagList`: bordered, never filled.
- `TextLink`, `SourceLine`: underlined links; "Source:" lines show where a claim comes from.
- `PendingMark`: dashed box for content that is not confirmed yet.

One label per intent across the site: "View projects" and "Contact".

## Motion

One orchestrated moment: the hero pipeline draws once on load, then rests.
Everything else is a response to the visitor (hover, focus, opening the menu).

- Animate `transform` and `opacity` only.
- No infinite loops, no parallax, no scroll listeners, no cursor effects.
- `prefers-reduced-motion: reduce` shows the final state with no animation.

## Accessibility

- Semantic landmarks: `header`, `nav`, `main`, `footer`, one `h1` per page.
- Every interactive element is reachable by keyboard and shows the focus outline.
- Icon-only buttons have an accessible name.
- Text contrast is at least 4.5:1 in both themes.
- Touch targets are at least 44 by 44 pixels.
- Nothing depends on hover alone.

## Copy

- Plain, specific, first person in About and case studies.
- Verbs over adjectives: built, designed, wrote, merged.
- No em dashes or en dashes anywhere in visible text. Use a period, a comma or "to".
- No uppercase tracked-out labels above headings. No decorative dots. No scroll cues.
- Every claim traces to a source in `src/content`. Unconfirmed items are `pending`.
