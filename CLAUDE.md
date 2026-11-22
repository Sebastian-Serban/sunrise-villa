# Sunrise Villa: notes for Claude

Read `docs/sunrise-villa.md` before writing copy or making project decisions. It is the source of
truth for client, property, policies and decisions.

## Stack

- Astro 7, static output, TypeScript strict. No UI framework; add React islands only for real
  interactivity.
- Plain CSS: tokens in `src/styles/tokens.css`, scoped `<style>` in components. No Tailwind.
- Content collections (`src/content.config.ts`) with Zod 4 from `astro/zod`.
- i18n: RO default at `/`, EN at `/en/`, DE at `/de/`. Every user-facing string goes through
  `src/i18n/ui.ts` or a localised content field. Never hardcode Romanian in a component.

## Design rules (from the design system)

- Use token names exactly as in the design system: `surface`, `sand`, `tan`, `espresso`, `ink`, ...
- Tan is never text on light grounds (2.5:1). Links and labels on light use `tan-deep`.
- On tan, all text is `espresso`.
- Square system: `radius-none` for photos and sections, `radius-sm` for buttons and inputs.
- No gradients, glassmorphism, drop shadows, rounded cards or icons in circles.
- Body text is 17px minimum for readers (30+ audience).
- Section transitions use `<Sweep>`; the cursive line (`line` prop) only on big transitions.

## Conventions

- Code and comments in English. Site copy in Romanian first; EN/DE are drafts until reviewed.
- German copy currently uses Swiss spelling (ss, no ß). Open question: most German-speaking guests
  come from Germany/Austria, where ß is standard. Decide before the DE version goes live.
- Do not commit credentials. `.env` files are gitignored.
- `legacy/` is reference only; nothing there is built.
