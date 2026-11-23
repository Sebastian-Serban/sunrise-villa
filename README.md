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
npm run lint      # ESLint incl. accessibility rules for .astro templates
```

## Structure

```
src/
  assets/            images (optimised at build time) and the logo SVG
  components/        Header, Sweep (curved section divider), HomePage (composes the page)
    sections/        one component per homepage section: Hero, Rooms, Spaces, ...
  content/           rooms/, attractions/ (one JSON per item), reviews.json, faq.json
  content.config.ts  schemas for the content above
  i18n/ui.ts         UI strings (RO, EN, DE), contact constants, getLang()
  layouts/Base.astro <html> shell: meta, hreflang, fonts, stroke draw-in
  pages/             index.astro (RO at /), en/ and de/ mirror it
  styles/            tokens.css (design system), global.css
docs/sunrise-villa.md  project knowledge base: client, property, decisions
legacy/                old WordPress child-theme CSS, reference only
```

## Languages

Romanian is the default and lives at `/`. English and German live at `/en/` and `/de/`.
Routing uses Astro's built-in i18n: components read the language from `Astro.currentLocale` and
build links with `getRelativeLocaleUrl` / `getAbsoluteLocaleUrl` from `astro:i18n`. A new page is
added once in `src/pages/` and mirrored in `en/` and `de/` as a one-line wrapper.

UI strings are in `src/i18n/ui.ts` (the pattern from Astro's i18n recipe). Structured content (rooms,
attractions) carries `{ ro, en, de }` per text field so facts like size and price exist once; the
build fails if a language is missing. Long-form pages would use one file per language instead.

## Editing content

- Room or attraction text: edit the JSON in `src/content/`.
- Photos: put originals in `src/assets/` and reference them from the JSON. Astro resizes them and
  serves WebP automatically, so don't pre-compress.
- Prices: the client doesn't want prices on the site; guests call for rates.

## Design

Design tokens mirror the Sunrise Villa design system (colours, Fraunces + Instrument Sans, spacing,
square radii). The curved dividers and the cursive line in `Sweep.astro` are the site's signature.
Their shapes are placeholders until the hand-drawn set exists.

Fonts are self-hosted via Fontsource, so no requests go to Google (GDPR).

## Contact form

`public/contact.php` is copied to the site root and handles the form on ClausWeb's PHP: honeypot,
validation, `mail()` to contact@ with Reply-To set to the guest, then a redirect back to
`?sent=1` or `?error=1`. It only runs on the real hosting, not in `npm run dev`.

## Before launch

- `BOOKING_PROPERTY_URL` in `src/i18n/ui.ts`: the full Booking.com hotel URL. Until it's set, the
  booking bar ignores the chosen dates and opens the share link.
- Privacy policy page, linked from the footer (GDPR).
- Replace the photos in `src/assets/` with the originals.
- Videos live in `public/video/` (about 26 MB). If the repo gets heavy, move them to the hosting
  and keep them out of git.
