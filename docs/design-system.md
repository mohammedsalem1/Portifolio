# Design system

The site should feel like a product built by an engineer: minimal and
editorial, with a quiet technical atmosphere and motion that explains rather
than decorates. One identity, applied the same way in both languages and both
themes.

## Colour

A neutral base, one strong red accent for action and emphasis, one cool accent
used sparingly for "live" signals. No blue ground, no gradient text. (The
accent was amber until 2026-09-30; he chose red for a bolder look.)

| Token | Light | Dark | Use |
|---|---|---|---|
| `ground` | `#F4F5F6` | `#0D0E11` | Page background |
| `surface` | `#FCFCFD` | `#15171B` | Panels, cards |
| `surface-2` | `#EBEDF0` | `#1C1F24` | Tags, tinted cells |
| `ink` | `#121417` | `#ECEDEF` | Text (16.5:1 or better) |
| `muted` | `#565D67` | `#9AA1AB` | Secondary text (6:1 or better) |
| `line` | ink at 9% | white at 7% | Decorative hairlines only |
| `line-strong` | `#7A818B` | `#6B727C` | Interactive borders (3.6:1 or better) |
| `accent` | `#DC3139` | `#DC3139` | Fills, strokes and glows; white text on it is 4.6:1 |
| `accent-ink` | `#B42229` | `#FF5A61` | The accent used as text (6:1 or better) |
| `accent-2` | `#0B756E` | `#63C7BB` | Teal: availability, "most recent", prompts |

- `accent` is for fills and lines (buttons, brackets, circuit traces, the
  caret). Red text always uses `accent-ink`, which is lighter in dark mode and
  deeper in light mode.
- The primary button, the contact card and the WhatsApp buttons carry a soft
  glow; in dark mode so do the surname and the numbers in the hero. In the Technical Arsenal, each technology card glows in its own
  icon colour on hover; that is the only other glow.
- Technology icons: brand marks from Simple Icons (CC0), kept as path data in
  `src/components/icons/brand-paths.ts`; Phosphor (fill weight) where no mark
  exists (Excel, AWS, KoboToolbox, ODK) and for concepts (REST, SQL, CI/CD).
  Each card sets `--brand-light` and `--brand-dark`, since many brand colours
  vanish on one of the two grounds (black marks in dark, yellow in light).

## Background

`.backdrop` (fixed, behind everything): a 56px grid that fades out from the
top, and two slow radial glows (red and teal). Transform-only drift, paused
with reduced motion. Never interactive, never over content.

## Type

| Language | Face | Notes |
|---|---|---|
| English | Mona Sans (variable width) | Display 800, tight tracking |
| Arabic | IBM Plex Sans Arabic | Its Latin companion sets NestJS, PostgreSQL etc. No tracking, more line height |
| Code | JetBrains Mono | Real identifiers only: commands, routes, module names, dates in the timeline |

Classes: `.type-display` (hero only), `.type-title` (section and page titles),
`.type-heading`, `text-lede`, `text-body`, `text-small`, `.type-code`.

## Layout

- `.container-page` (75rem), `.section-y` between sections.
- Every section uses `<Section id index command title subtitle>`: a number,
  a shell command in mono, a large title, a subtitle. The command is code, so
  it stays left to right in Arabic.
- Two radii only: `rounded-sheet` (4px, controls) and `rounded-panel` (10px,
  panels). Nothing pill-shaped.
- Logical properties everywhere (`ps-*`, `ms-*`, `start-*`, `border-s`), so
  Arabic mirrors without extra CSS. Directional arrows use `.flip-rtl`.
- LTR code inside RTL text: put `dir="ltr"` on an inline span, never on the
  paragraph, so alignment still follows the page.

## Motion

All transform, opacity and a light entry blur. Everything is off under
`prefers-reduced-motion`.

| Where | What |
|---|---|
| Hero | One staggered entrance (`.enter` with `--i`); the role line types itself; circuit traces draw around the portrait, one scan passes over it twice; stats count up once; the code card floats |
| Scroll | `[data-reveal]` elements rise in as they enter the viewport (one shared IntersectionObserver) |
| Experience | The entry crossing the middle of the screen becomes active; the progress line grows to it |
| Navigation | The current section is marked by an accent underline |
| Hover | Small lifts on cards, arrows that move toward where the link goes |
| Technical Arsenal | Cards stagger in once; a filter change is a view transition (cards glide, others scale and fade, the panel resizes) |
| Sound | Optional 8-bit ticks on hover and a coin on press (Web Audio, no files); muted from the header |

No scroll listeners. The only endless motion is the slow "Focus" ticker under
the Technical Arsenal (paused on hover), the typing role line, the floating
code card and the availability pulses; all of it stops under reduced motion,
where the role line shows the title and the ticker wraps instead of scrolling.

The hero portrait is `public/images/profile.jpg`, faded into the page by two
intersecting mask gradients (`.hero-photo`), so its own background never shows
a hard edge. A cut-out PNG would need only the bottom fade.

## Accessibility

- Landmarks, one `h1` per page, `lang` and `dir` set per locale, `hreflang` alternates.
- Visible focus everywhere. Icon-only controls have names.
- Tabs pattern for the pipeline (arrow keys follow reading direction).
- Native `<dialog>` for the mobile menu (focus trap, Escape, focus return).
- Contrast at least 4.5:1 for text in both themes.

## Copy

- Plain, specific, first person. Verbs over adjectives.
- No em or en dashes.
- Every claim traces to `src/content`. Unconfirmed items are `pending` and show
  a "To be confirmed" marker.
