# Sunrise Villa

Website for Sunrise Villa, a 3-star guesthouse in Băile Felix, Romania ([sunrisevilla-felix.com](https://sunrisevilla-felix.com)).

Static site built with [Astro](https://astro.build), replacing the previous WordPress site.

## Getting started

Requires Node 22 (see `.nvmrc`).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check + static build into dist/
npm run preview   # serve dist/ locally
```

## Structure

```
src/
  assets/            images (optimised at build time) and the logo SVG
  components/        Header, Sweep (curved section divider), HomePage, ...
  content/           rooms/ and attractions/ as JSON, one file per item
  content.config.ts  schemas for the content above
  i18n/ui.ts         UI strings (RO, EN, DE), contact constants, path helpers
  layouts/Base.astro <html> shell: meta, hreflang, fonts, stroke draw-in
  pages/             index.astro (RO at /), [lang]/index.astro (/en/, /de/)
  styles/            tokens.css (design system), global.css
docs/sunrise-villa.md  project knowledge base: client, property, decisions
legacy/                old WordPress child-theme CSS, reference only
```

## Languages

Romanian is the default and lives at `/`. English and German live at `/en/` and `/de/`.
UI strings are in `src/i18n/ui.ts`. Content files carry `{ ro, en, de }` for every text field, and the
build fails if a language is missing.

## Editing content

- Room or attraction text: edit the JSON in `src/content/`.
- Photos: put originals in `src/assets/` and reference them from the JSON. Astro resizes them and
  serves WebP automatically, so don't pre-compress.
- Prices: add `priceFrom` to a room once the client confirms them.

## Design

Design tokens mirror the Sunrise Villa design system (colours, Fraunces + Instrument Sans, spacing,
square radii). The curved dividers and the cursive line in `Sweep.astro` are the site's signature.
Their shapes are placeholders until the hand-drawn set exists.

Fonts are self-hosted via Fontsource, so no requests go to Google (GDPR).
