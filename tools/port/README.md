# Port design: canvas snapshot and client preview

Tooling for the port of the current WordPress look (decision 32 in `docs/sunrise-villa.md`).
Nothing here is part of the Astro build.

## What lives where

| Thing | Where |
|-------|-------|
| Design canvas (source of truth for the port design) | claude.ai artifact "Sunrise Villa · port design actual", https://claude.ai/artifact/Fdt9n2JNGXJVzt9EYTNjvx (slug `76863d75-b861-4852-95ff-686758d0e5a9`), pages Telefon and Desktop |
| Client preview site | claude.ai artifact "Sunrise Villa · previzualizare site", https://claude.ai/artifact/8KfhfsYNd17pCHuxHx8gmi (slug `3b4b357d-a0c6-4a45-96f7-cfdadbdadde5`) |
| `canvas/` | Snapshot of the canvas files (`project/*.dc.html` + `canvas.json`), taken 26 Nov 2026 |
| `img/` | The images the canvas uses, at web size (1000–1200px) |
| `site.js` | Preview interactions: phone menu, carousels and dots, gallery filters and viewer, map placeholder, form stub |
| `build_site.py` | Turns the canvas snapshot into the preview site in `dist/` |

## Canvas artboards

One artboard per page and width. Phone artboards are 390px wide; desktop artboards are fluid pages shown at 1440px.

| Page | Phone | Desktop |
|------|-------|---------|
| Acasă | `Main.dc.html` | `Home-desktop.dc.html` |
| Camere | `Rooms-phone.dc.html` | `Rooms-desktop.dc.html` |
| Galerie | `Gallery-phone.dc.html` (+ `Gallery-viewer-phone.dc.html`) | `Gallery-desktop.dc.html` (+ `Gallery-viewer-desktop.dc.html`) |
| Contact | `Contact-phone.dc.html` | `Contact-desktop.dc.html` |
| Confidențialitate | `Privacy-phone.dc.html` | `Privacy-desktop.dc.html` |
| 404 | `NotFound-phone.dc.html` | `NotFound-desktop.dc.html` |

Images in the canvas are uploads (`/_blob/<id>`); `build_site.py` holds the map from blob id to file in `img/`.
A new image added on the canvas needs its file in `img/` and an entry in that map.

## Rebuild and republish the preview after a canvas change

1. Read the changed artboards from the canvas (artifact `read_file` on `project/<name>.dc.html`) and save them over the files in `canvas/`.
2. `python3 tools/port/build_site.py` writes `dist/` (gitignored).
3. Publish `dist/*.html` (and `dist/img/*` if images changed) to the preview artifact with `publish_files`, mode `patch`, slug above, `base_version` from `get_artifact`.
4. Commit the new canvas snapshot.

## How the preview is built

- Each page holds both versions: the phone artboard shows below 900px, the desktop artboard above.
- Links are mapped by link text and `aria-label` (nav, buttons, phone, WhatsApp, email, socials, Booking.com share link).
- On desktop the homepage carousels get their remaining items added at build time (triple room, Sala de mese and Bufet, three more reviews), because the canvas shows only what fits in one view.
- Floating contact buttons become `position: fixed`.

## Preview limits (tell the client)

- The Google map can't load inside the preview; the button shows a note and a link to Google Maps. The real site loads the map on click.
- The contact form doesn't send anything.
- "Vezi detalii" on the aquaparks and the attraction tiles have no target yet.
