# Sunrise Villa: notes for Claude

Read `docs/sunrise-villa.md` before writing copy or making project decisions. It is the source of
truth for client, property, policies and decisions.

## Stack

- Astro 7, static output, TypeScript strict. No UI framework; add React islands only for real
  interactivity.
- Plain CSS: tokens in `src/styles/tokens.css`, scoped `<style>` in components. No Tailwind.
- Content collections (`src/content.config.ts`) with Zod 4 from `astro/zod`.
- i18n: RO default at `/`, EN at `/en/`, DE at `/de/`. Slugs are translated (`src/i18n/routes.ts`); link with `pageUrl()`,
  never hand-written paths. Every user-facing string goes through
  `src/i18n/ui.ts` or a localised content field. Never hardcode Romanian in a component.

## Design rules (port design)

The site ports the look of the old WordPress site (decision 32 in the docs). The earlier "new
design" (Fraunces, square corners, sweeps) was rejected and is archived; don't use its rules.

- Source of truth for layout: the port canvas, snapshot in `tools/port/canvas/` (phone `*-phone` /
  `Main`, desktop `*-desktop`). See `tools/port/README.md`.
- One responsive implementation per page: phone layout below 900px, desktop at 900px and up.
- Use the tokens in `src/styles/tokens.css` (`tan`, `tan-deep`, `espresso`, `sand`, `background`,
  `ink`, `border`, `on-dark`, ...). No raw hex in components.
- Tan is never small text on light grounds. Links and labels on light use `tan-deep`.
- On tan, all text is `espresso`.
- Rounded system: `radius-sm` (4px) buttons and inputs, 12–16px cards, photos and tiles. Soft
  shadows on overlapping cards. Icons sit in tan circles with soft rings.
- System font stack, bold headings. Body text is 17px minimum for readers (30+ audience).
- Reuse the shared components: `Header`, `Footer` (includes the click-to-load map), `FloatingContact`
  (from `Base`), `Button`, `Carousel`, `PairCard`, `SectionHead`.

## Conventions

- Code and comments in English. Site copy in Romanian first; EN/DE are drafts until reviewed.
- German copy currently uses Swiss spelling (ss, no ß). Open question: most German-speaking guests
  come from Germany/Austria, where ß is standard. Decide before the DE version goes live.
- Do not commit credentials. `.env` files are gitignored.
- `legacy/` is reference only; nothing there is built.
