# Sunrise Villa - Project Knowledge Base

## Project Overview

| Field | Value |
|-------|-------|
| Project | Marketing website for Sunrise Villa |
| Type | Pensiune (Guesthouse) |
| Location | Băile Felix, Romania |
| Domain | sunrisevilla-felix.com |
| Timeline | WordPress site live since ~2025. Rebuild in code (Astro, static) in progress since Nov 2026. |
| Budget | Minimize paid tools. Free preferred, paid only when clearly justified. |

### Status (24 Nov 2026)

The client saw the new design (mock site) and **rejected it**: they prefer the look of the current
WordPress site. They are fully on board with leaving WordPress for Astro.

Direction now: **port the current site's look to Astro, close to 1:1**. Keep everything the client
would recognise (colours, fonts, section order, layouts, photos, copy, button and card styles).
Quietly fix what is broken or weak (spacing, alignment, type scale, contrast, image quality, speed).
Mobile gets designed properly regardless: the client judges the site on their phone first.
The new-design work (design system, sweeps/curves, Fraunces/Instrument Sans) is archived, not deleted.
The structural Astro work (pages, i18n, translated slugs, content collections, form, map, fonts setup,
images) carries over.

**25 Nov 2026:** audit done, port canvas built (phone + desktop, all pages), preview site published for
the client ("Sunrise Villa · previzualizare site"). Waiting for Sebastian to share it and for client
feedback before touching Astro.

### Pages (new site)

| Page | RO | EN | DE | Canvas | Mock site | Astro |
|------|----|----|----|--------|-----------|-------|
| Homepage | `/` | `/en/` | `/de/` | done | done | done |
| Rooms | `/camere/` | `/en/rooms/` | `/de/zimmer/` | done | done | done |
| Gallery (+ viewer) | `/galerie/` | `/en/gallery/` | `/de/galerie/` | done | done | done |
| Contact | `/contact/` | `/en/contact/` | `/de/kontakt/` | done | done | done |
| Privacy | `/confidentialitate/` | `/en/privacy/` | `/de/datenschutz/` | done | done | done |
| 404 | RO only | - | - | done | done | done |

The table tracks the **rejected new design**. For the port, every page goes through canvas → mock
site → Astro again in the old look.

Slugs are translated and defined once in `src/i18n/routes.ts`. EN/DE copy is a draft until reviewed.

### Where things live

| Thing | Where |
|-------|-------|
| Design system (archived, rejected design) | claude.ai artifact "Sunrise Villa" (Design System type) |
| Design canvas, rejected new design (archived) | claude.ai artifact "Sunrise Villa website" (Design type) |
| Mock site, rejected new design (archived) | claude.ai artifact "Sunrise Villa · propunere site" (public link) |
| Design canvas, port of the current look | claude.ai artifact "Sunrise Villa · port design actual" (Design type), https://claude.ai/artifact/Fdt9n2JNGXJVzt9EYTNjvx, pages Telefon and Desktop |
| Port tooling (canvas snapshot, images, preview build) | `tools/port/` in the repo, see its README |
| Preview site of the port, for the client | claude.ai artifact "Sunrise Villa · previzualizare site" (https://claude.ai/artifact/8KfhfsYNd17pCHuxHx8gmi), to be shared by Sebastian |
| Old site styles | live site + child theme CSS in `legacy/wordpress-child-theme/style.css` |
| Code | github.com/Sebastian-Serban/sunrise-villa, branch `astro` |

**Workflow for changes:** design canvas first, then mock site, then Astro, and Astro only after both
Sebastian and the client approve. For the port: audit of the live site (signature to keep / issues to
fix) comes before the canvas.

---

## Client

| Field | Value |
|-------|-------|
| Owner | Cristina Iacob (+ husband) |
| Type | Non-technical. Never logged into WordPress; asks Sebastian for changes. |
| Languages | Romanian, English |
| Phone | +40 771 734 907 |
| Email (personal) | pensiunea.sunrise@gmail.com |
| Email (business) | contact@sunrisevilla-felix.com |
| WhatsApp | +40 771 734 907 (same number) |
| Facebook | https://www.facebook.com/p/SunriseVilla-100057196700621 |
| Instagram | https://www.instagram.com/sunrisevilla |
| TikTok | https://www.tiktok.com/@sunrise.villa6 |
| Booking.com | https://www.booking.com/Share-49dqhZ |
| Old website | pensiuneasunrisevilla.ro (2014-era, replaced) |

**Assets status:**
- Logo: script "SV" monogram in a triple ring, vector SVG in the repo (`src/assets/logo.svg`).
- Photography: professional photos + drone footage. Web versions are compressed copies; originals still needed for the final build.
- Video: B-roll from YouTube (client lost the account), cleaned up with ffmpeg. Original media still to be requested.

---

## Property

### Basic Info

| Field | Value |
|-------|-------|
| Name | Sunrise Villa |
| Stars | 3 |
| Built | 2014 |
| Address | Str. Mihai Eminescu 41, 417495 Sânmartin, Băile Felix, Bihor County, Romania |
| Postal code | 417495 |
| Locality | Sânmartin |
| Region | Bihor |
| Distance to Băile Felix center | ~2 km |
| Distance to Oradea / Airport | ~8 km |
| Booking.com score | 9.9/10 |
| Google | 4.8 from 113 reviews |

### Rooms

- 10 rooms total. The client is restructuring: how many rooms of each type is **not settled**. Don't state per-type counts.
- Three types, all 20 m² with private bathroom:
  - **Cameră dublă**: double bed, 2 persons, extra bed on request
  - **Cameră twin**: 2 single beds, 2 persons, extra bed on request
  - **Cameră triplă**: double bed + single bed, 3 persons
- Maximum 3 persons per room.

All rooms include:
- Air conditioning
- Flat-screen TV with cable
- Private bathroom: shower, hairdryer, free toiletries
- Fridge / minibar
- Heating via convector
- Wardrobe, desk, carpeted floor
- High chair available for children

### Amenities

**Outdoor:** outdoor pool (heating is being built in: until it's done, call it neither "seasonal" nor "heated"), sun loungers, outdoor shower, garden with BBQ/grill, gazebo (foișor), sun terrace, smoking area

**Indoor:** dining room (suitable for group meals, celebrations, events)

**Services:** free WiFi throughout property, free private parking, luggage storage, airport shuttle (paid, on request), breakfast (paid, on request - *provisional*), special diet menus on request, wake-up service, meeting/banquet facilities

**Staff languages:** Romanian, German, English

### Policies

| Policy | Details |
|--------|---------|
| Check-in | 14:00 - 22:00 (advance notice of arrival time required) |
| Check-out | By 11:00 |
| Reception hours | 07:00 - 22:00 (as on the old site) |
| Children | All ages welcome |
| Extra beds | On request, in double and twin rooms |
| Single occupancy | On request |
| Pets | Not allowed |
| Parties | No hen/stag parties |
| Payment | Bank transfer (50% advance to confirm, remainder by arrival day). Invoice and receipt issued. |
| Languages | Romanian, German, English |

### Cancellation Policy

- Free cancellation up to 14 days before check-in
- 50% refund for cancellations 7-14 days before check-in
- No refund for cancellations less than 7 days before check-in

---

## Pricing

**No prices on the website.** The client wants guests to call for rates and availability. Every room and contact block points to phone/WhatsApp instead.

Internal reference only (old site showed these; not confirmed):

| Room type | Off-season (1 Oct - 30 Jun) | Season (1 Jul - 30 Sep) |
|-----------|-----------|--------|
| Cameră dublă | 230 lei/night | 270 lei/night |
| Cameră twin | 230 lei/night (older notes: 220) | 270 lei/night (older notes: 260) |
| Cameră triplă | unknown | unknown |
| Extra bed | 60 lei/night | 60 lei/night |
| Full villa rental | 800 €/night | 1,000 €/night |

### Group Packages ⚠️ PROVISIONAL - origin is client's course document, not confirmed for actual use

All packages for up to 20 persons, include accommodation in all 10 rooms + breakfast + airport transfer (round trip) + full facility access. Catering optional at extra cost.

| Package | Duration | Price |
|---------|----------|-------|
| Special | 3 days | 2,800 € |
| Experience | 5 days | 4,200 € (previously 4,700 €) |
| Premium | 7 days | 5,800 € (previously 6,500 €) |

Experience and Premium also include a guided tour of Oradea (German-speaking guide).

---

## Location

Băile Felix is Romania's largest and most popular thermal spa resort.

### Lacul cu Nuferi (Water Lily Lake)

Worth prominent mention on the website. Free entry, 100,000+ visitors/year, unique in Europe.

- Nufărul Termal (Nymphaea lotus var. Thermalis) - natural monument since 1931, Tertiary-era relic, unique to this region
- Nufărul Alb (White Water Lily) - blooms year-round
- Lotusul Sacru (Sacred Lotus) - pink flowers, June-August only
- Chiparosul de Baltă (Bald Cypress)

Water lilies open during the day, close at evening. Lotus only June-August.

### Nearby Attractions

| Attraction | Distance | Type |
|------------|----------|------|
| Lacul cu Nuferi | Băile Felix center | Natural reserve |
| Băile 1 Mai / Pețea thermal reserve | 2 km | Thermal resort |
| Complex Apollo-Felix | Nearby | Thermal pools, waterpark |
| Aquapark President | 4.2 km | Water park |
| Aquapark Nymphaea | 8 km | Water park |
| Felixarium | Nearby | Attraction |
| Oradea city center / Cetatea Oradea | ~8 km | City, architecture, culture |
| Palatul Vulturul Negru | ~8 km | Art Nouveau architecture |
| Biserica cu Lună | ~8 km | Historic monument |
| Oradea International Airport | ~8 km | Transport |
| Peștera Vadu Crișului | Day trip | Cave |
| Pădurea Craiului / Munții Apuseni | Day trip | Nature |

Attraction photos came from the old site: check licences and which aquapark photo is which before launch.

### Location Positioning

Core angle: close enough to everything, far enough from the noise. 2 km from center means no resort traffic, no bustle - guests get quiet without sacrificing access.

---

## Positioning & Audience

**Core line:** "Liniște, la doar 2 km de agitație." ("Quiet, 2 km from the crowds.")

**Feel:** boutique, calm, expensive but not bougie.

**Target guests:** people 30+: couples, families (not the main focus), small groups, middle-aged/older travelers, wellness seekers, nature lovers, German/Austrian/Swiss visitors.

**Not targeting:** party groups, nightlife seekers, bare-minimum backpackers.

**Key messages:**
1. Peaceful location, away from resort noise
2. Close to thermal baths, aquaparks, water lily lake
3. Personal, family-run hospitality
4. High quality, fair value - 9.9 rating does the talking
5. Private outdoor space (pool, garden, BBQ) exclusively for guests

---

## Tone & Copy

- Language: Romanian first; EN and DE are drafts until reviewed. Code/comments: English.
- Voice: calm, welcoming, warm. Emphasizes rest, nature, escape.
- Never salesy or corporate. Confident but humble - let the reviews speak.
- Body text 17px minimum (30+ audience).

---

## Design System

### Port design (current look, in use)

Taken from the live site and its child theme CSS (`legacy/wordpress-child-theme/style.css`), with quiet fixes.

| Token | Hex | Use |
|-------|-----|-----|
| tan | #C2926D | Buttons, icon circles, headings on dark, H1 in heroes |
| tan-deep | #8B5E3C | Links and small labels on light (contrast fix) |
| espresso | #2D2926 | Header, dark sections, footer |
| sand | #E8E1D7 | Cards (rooms, spaces, reviews) |
| background | #F5F5F5 | Page |
| ink | #2F2F2D | Body text |
| border / border-strong | #D4C9BC / #A89880 | Card and input borders |
| text on dark | #D8D1C7 | Body text on espresso (lighter than the old grey, contrast fix) |

- Type: system font stack (-apple-system, Segoe UI, Roboto…), bold 700 headings. Body 17px (old site 16px).
  H2 36px desktop / 30px phone, centred on desktop like the old site.
- Buttons: tan with espresso text, 4px radius, 44px tall (old site had small buttons); outline variant with tan border.
- Radii: photos and cards 16px, small cards 12px, tiles 10–16px. Soft shadows on overlapping cards.
- Facilities: tan circles with two soft rings (box-shadow), 3×2 on desktop, 2 columns on phone.
- Carousels: round tan arrows; scroll-snap with peeking cards on phone.
- Header: espresso bar, logo badge in a tan tab hanging down at the left, centred nav, outline "Rezervare acum".
- Floating contact buttons (phone, WhatsApp, mail) kept, smaller (44–46px).
- Google map only loads after a click (no cookie banner needed).

Desktop layouts follow the old desktop site: hero text on the left; rooms and common spaces as photo +
overlapping sand card, two per view in a carousel; "Acasă, departe de casă" as a full-width photo with a
dark card; attractions 2 large + 3 small tiles with labels always visible; reviews as centred sand cards
with initials; contact and contact form on espresso.

Phone fixes: hero buttons visible, aquapark and reviews as horizontal swipe, compact facilities grid,
room photos as swipe, gallery in two columns with a viewer.

Rooms page copy is the old copy, trimmed (shared amenities shown once in an "În fiecare cameră" box,
no per-room labels, no repeated facilities sentence).

### Design System (rejected new design)

> **Archived.** This section describes the new design the client rejected (24 Nov 2026). Do not use
> the rules below for new work.

Source of truth was the "Sunrise Villa" design system artifact. Tokens are mirrored in `src/styles/tokens.css`.

### Colors

| Token | Hex | Use |
|-------|-----|-----|
| surface | #F7F3EE | Page background |
| surface-raised | #FDFBF8 | Cards, inputs |
| sand | #E8E1D7 | Alternate sections, chips |
| espresso | #2D2926 | Dark sections, primary buttons |
| espresso-hover | #1F1C1A | |
| espresso-raised | #3A3531 | Cards on dark |
| ink | #2F2F2D | Body text |
| ink-muted | #645E59 | Secondary text |
| tan | #C2926D | Brand colour, fills, accents on dark |
| tan-hover | #D2A783 | |
| tan-deep | #8B5E3C | Links and labels on light grounds |
| on-dark / on-dark-muted | #F7F3EE / #B8AEA3 | Text on espresso |
| line / line-strong / line-dark | #D4C9BC / #8F806D / #4A433D | Borders |
| success / error | #4F6B51 / #A0522D | Form states |

Rules:
- Tan is never text on light grounds (2.5:1). Links and labels on light use tan-deep.
- On tan, all text is espresso.
- Square system: 0 radius for photos and sections, 2px for buttons and inputs.
- No gradients, glassmorphism, drop shadows, rounded cards or icons in circles.

### Typography

- Display: Fraunces (variable, optical size), self-hosted.
- Body: Instrument Sans (variable), self-hosted.
- Body text 17px.

### Signature motif: curves vs. grid

Loose cursive curves (from the logo script) set against a rigid 12-column grid.
- Diagonal "sweeps" between sections, filling the next section's colour (tan, sand, espresso).
- A hand-drawn cursive line with a loop rides along the big transitions and draws itself in on scroll.
- Current curves are placeholders; final versions get hand-drawn.

### Buttons

Primary (espresso), tan, ghost (outline) and ghost-on-dark. Square-ish (2px radius).

### Icons

Lucide (`@lucide/astro`), stroke-based, 1.5 stroke width.

---

## Homepage

> The section order and subpage descriptions below are from the rejected new design. Content
> decisions in them (three rooms, no prices, enquiry button, pages) still stand; layouts will follow
> the old site.

### Section Order (rejected new design)

Hero (video background + booking bar) → Facts strip (9.9, 4.8, 2 km, 8 km) → Rooms (3 cards) → Spaces (photos, gallery carousel, tour video) → Facilities (on tan) → Seasons (summer / autumn-winter) → Surroundings (lake + attractions) → Reviews (on espresso) → FAQ → Contact (tan split + form) → Footer (schematic map, socials)

Mobile: sticky bottom dock (Sună · WhatsApp · Rezervă), full-screen menu.

### Reviews

- Static curated quotes from real reviews, one featured
- 9.9/10 shown as a large display number
- Link to Google Reviews below

---

## Subpages

- **Camere:** photo hero, then each room type with a 3-photo switcher, chips and amenities, ending in one "Întreabă de camera …" button that opens the contact form with the message pre-filled (`?camera=dubla|twin|tripla`). Tan "În toate camerele" strip, then straight into the footer. No prices, no repeated Call/WhatsApp block (the footer and mobile dock cover that).
- **Galerie:** masonry grid of 33 photos with filters (Camere, Grădina și piscina, Interior, Din dronă) and a full-screen viewer with thumbnails. No CTA band before the footer. Final version gets the full ~50 photos.
- **Contact:** "Bine de știut" cards (extra bed, single occupancy, payment and cancellation), "Cum ajungi" with drone photo, then the contact block (with reception hours) + form directly before the footer, like on the homepage.
- **Politica de confidențialitate:** the old site's text in a plain single column. Removed what no longer applies (WordPress cookies, Optimole, Loginizer, embedded Google Maps); added "perioada dorită" to the form fields. The new site sets no cookies, so no cookie banner.
- **404:** tan curve shape, "Pagina asta a plecat la băi."

---

## Email Setup

### Architecture

| Component | Details |
|-----------|---------|
| Business email | contact@sunrisevilla-felix.com (hosted on ClausWeb) |
| Personal email | pensiunea.sunrise@gmail.com (Cristina's Gmail) |
| Contact form (new site) | `public/contact.php`: PHP `mail()` from contact@ to contact@ with Reply-To = guest. Honeypot spam check. Needs testing on ClausWeb. |
| Contact form (WordPress) | Contact Form 7 + GoSMTP Pro via ClausWeb's mail server |
| DNS auth | SPF, DKIM, DMARC all valid and configured in cPanel |

### Email Flow

**Direct email to contact@**: Lands in ClausWeb mailbox → Gmail pulls via POP3 → Cristina sees in Gmail with "Sunrise Villa" label → replies as contact@

**Contact form submission**: form sends from contact@ to contact@ → Gmail pulls via POP3 → Cristina replies → Reply-To header sends reply to the guest directly

### Gmail Configuration

- Accounts and Import > "Check mail from other accounts": contact@sunrisevilla-felix.com via POP3 (mail.sunrisevilla-felix.com, port 995, SSL)
- Accounts and Import > "Send mail as": contact@sunrisevilla-felix.com via SMTP (mail.sunrisevilla-felix.com, port 465, SSL)
- "Reply from the same address the message was sent to" enabled
- Gmail filter auto-labels incoming business mail as "Sunrise Villa"

### Notes

- ClausWeb blocks email forwarding to Gmail/Yahoo/Outlook (anti-spam policy)
- Gmail POP3 polling interval is not configurable; frequency increases with mail volume
- "Check mail now" button in Gmail settings forces immediate pull

---

## SEO

### Current (WordPress, Rank Math)

| Setting | Value |
|---------|-------|
| Business type | LodgingBusiness |
| Site language | Romanian (ro-RO) |
| Timezone | Europe/Bucharest |
| Google Search Console | Connected |

### New site

- `@astrojs/sitemap` with ro/en/de alternates, canonical + hreflang in the layout.
- Keep the old page URLs (or 301 them) so Search Console history isn't lost.
- Page meta from the WordPress site needs updating: it mentions "camere duble și twin" (now three types), "priveliște la piscină" and prices nowhere, but check before reuse.
- LodgingBusiness structured data still to add.

---

## Technical Stack

### New site (in progress)

| Component | Choice |
|-----------|--------|
| Framework | Astro 7, static output, TypeScript strict |
| Styling | Plain CSS: tokens in `src/styles/tokens.css`, scoped `<style>` per component. No Tailwind. |
| Content | Content collections (rooms, attractions, reviews, faq, gallery, legal) with Zod 4; localized fields `{ ro, en, de }`, legal texts as Markdown per language |
| i18n | Astro built-in i18n; UI strings in `src/i18n/ui.ts`; translated slugs in `src/i18n/routes.ts` (links via `pageUrl()`) |
| Images | `astro:assets` (`<Image>`, `getImage`), constrained layout |
| Fonts | Self-hosted woff2 in `src/assets/fonts/` via Astro fonts API (preload + size-matched fallbacks) |
| Icons | `@lucide/astro` via `AppIcon` |
| Interactivity | Small custom elements (booking bar, carousel, mobile menu); no UI framework |
| Lint/format | ESLint (typescript-eslint, astro, jsx-a11y-x) + Prettier; CI runs lint + build |
| Hosting | Undecided: ClausWeb (FTP) or Cloudflare Pages. contact.php needs PHP, so ClausWeb unless the form moves. |

### Current live site (WordPress, being replaced)

| Component | Details |
|-----------|---------|
| Hosting | ClausWeb (clausweb.ro), cPanel |
| Staging | staging.sunrisevilla-felix.com (Softaculous) |
| WordPress install | /wp subdirectory, Site Address = root domain. Don't change the WordPress Address. |
| Theme | Blocksy (parent) + child theme (CSS kept in `legacy/` in the repo) |
| Page builder | Spectra blocks (free) |
| Plugins | BackupPly Pro, Contact Form 7 (+ Country & Phone Field), Cookie Admin Pro, GoSMTP Pro, Optimole, SpeedyCache, Loginizer Pro, Rank Math SEO |

Backups: BackupPly Pro → Google Drive, daily, files + DB.

---

## Booking Flow

- Guests call or WhatsApp for rates and availability (client's choice).
- Contact form for written enquiries.
- "Rezervă" → Booking.com share link. Hero booking bar pre-fills dates/guests once `BOOKING_PROPERTY_URL` (full Booking.com hotel URL) is set; until then it uses the share link.
- Future: direct booking with availability calendar.

---

## Reviews & Social Proof

- 9.9/10 on Booking.com, 4.8 from 113 Google reviews; consistent praise for cleanliness, staff, value
- Booking.com Traveller Review Award 2026
- Reviews are the strongest conversion tool: keep them prominent

---

## Open Questions

1. Room count per type: client is restructuring
2. Pool heating: when it's done, decide how to describe the pool
3. Breakfast: available paid - confirm details
4. Group packages / full villa rental: real offerings or just from the client's course?
5. German spelling: site DE copy uses Swiss spelling (ss); most guests are from Germany/Austria where ß is standard. Decide before DE goes live.
6. Deployment target: ClausWeb vs. Cloudflare Pages
7. Original photos and video files from the client
8. Triple room beds: old site says "trei paturi", our data says double + single. Ask the client.
9. Parking: old rooms page says "în apropierea pensiunii", homepage says "în incinta pensiunii". Port uses "în incinta" for now.
10. Which photo is the real "Bufet" photo (port uses a placeholder)
11. Phone vs old site: gallery uses mixed tile sizes and the phone contact form/section is light, while the old site uses equal tiles and dark. Align if the client notices.

---

## TODOs

- [ ] Set `BOOKING_PROPERTY_URL`
- [ ] Test `contact.php` on ClausWeb
- [ ] Get original photos and video, replace compressed copies
- [ ] Check attraction photo licences
- [x] Audit the live site: signature to keep, issues to fix, extracted styles (phone + desktop)
- [x] New design canvas: old look, fixed, phone first (+ desktop)
- [x] Preview site of the port
- [ ] Share the preview with the client, collect feedback
- [ ] After approval: swap the Astro visual layer to the port design
- [ ] Review EN/DE copy
- [ ] Structured data (LodgingBusiness) + per-page meta
- [ ] 301 redirects for old WordPress URLs
- [ ] Verify Google Business Profile website URL

---

## Decisions Log

| # | Decision | Rationale | Date |
|---|----------|-----------|------|
| 1 | Blocksy + Spectra as stack | Free, capable enough. Avoids paid page builder cost. | Early sessions |
| 2 | Child theme for all custom CSS | Spectra WYSIWYG CSS preview is broken | Early sessions |
| 3 | Unsynced patterns for client editing | Client is non-technical | Early sessions |
| 4 | Single knowledge base file | Simpler update workflow | 2026-04-11 |
| 5 | No separate design-system.md (superseded by the design system artifact) | Typography and colours weren't locked yet | 2026-04-11 |
| 6 | Booking.com Share URL as CTA target | Lands directly on the property page | 2026-04-11 |
| 7 | Fill-based SVGs only for Icon Block (WordPress only) | Stroke-based SVGs distort in the Icon Block | 2026-04-12 |
| 8 | Staging via Softaculous on ClausWeb | Host supports it natively | 2026-04-12 |
| 9 | Backuply → Google Drive only | Server has only 4GB NVMe | 2026-04-12 |
| 10 | Static reviews, no plugin | Easier to maintain, client can't break it | 2026-04-19 |
| 11 | Cut "De ce să alegi" section | Redundant; reviews do the job better | 2026-04-19 |
| 12 | Combined CTA + Contact section | Warmer than a cold CTA, more actionable than contact info alone | 2026-04-19 |
| 13 | WordPress subdirectory fix | WP in /wp, root index.php points to it | 2026-05-03 |
| 14 | Contact Form 7 over Spectra form | Reply-To support | 2026-05-03 |
| 15 | Email via ClausWeb SMTP, not Gmail | ClausWeb blocks outbound SMTP ports | 2026-05-03 |
| 16 | Gmail POP3 for business email | ClausWeb blocks forwarding to Gmail | 2026-05-03 |
| 17 | LodgingBusiness schema type | Correct category for a guesthouse | 2026-05-03 |
| 18 | Ditch WordPress, rebuild in code | Client never edits; WP maintenance, plugin load and security issues outweigh benefits. Changes go through Sebastian. | 2026-11-20 |
| 19 | Astro, static output | SEO-friendly static HTML, zero JS by default, content collections for structured data | 2026-11-20 |
| 20 | ~~New design system: Fraunces + Instrument Sans, square system, curves-vs-grid motif~~ (superseded by 32) | Boutique and calm without generic gradients and rounded cards | 2026-11-20 |
| 21 | ~~Prominent sweeps and tan fills between sections~~ (superseded by 32) | The curves should be the site's signature, not decoration | 2026-11-20 |
| 22 | Astro built-in i18n, RO at root | Use the framework's way; localized JSON fields for structured content | 2026-11-21 |
| 23 | Gallery as a swiper (scroll-snap + arrows) | Hidden scrollbar, consistent image ratio, no library | 2026-11-23 |
| 24 | Three room types incl. triple | Old site has a triple room; max 3 persons per room | 2026-11-23 |
| 25 | No prices on the website | Client wants guests to call | 2026-11-23 |
| 26 | Don't call the pool seasonal or heated | Heating is being built in | 2026-11-23 |
| 27 | Privacy policy: old text, cut to what applies | New site sets no cookies and uses no external services | 2026-11-23 |
| 28 | Workflow: canvas → mock site → Astro | Design decisions are made visually first | 2026-11-23 |
| 29 | Translated URL slugs (`/en/rooms/`, `/de/zimmer/` ...) | Better for EN/DE visitors and search; one map in `routes.ts` keeps links and hreflang right | 2026-11-23 |
| 30 | One enquiry button per room instead of repeated Call/WhatsApp blocks | The same block three times was noise; the button carries the room into the contact form | 2026-11-23 |
| 31 | ~~Contact block always sits directly before the footer~~ (layout rule of the rejected design) | The tan contact shape is cut flat at the bottom and only flows into the footer's straight edge | 2026-11-23 |
| 32 | Client rejected the new design; port the current site's look to Astro, close to 1:1, fixing bugs and weak spots quietly, phone first | Client prefers their current site's look ("vibes"); still wants off WordPress | 2026-11-24 |
| 33 | Keep the floating contact buttons, smaller, instead of a bottom bar | Recognisable from the old site; smaller covers less text | 2026-11-25 |
| 34 | Google map loads on click, as in the rejected design | No cookie banner needed | 2026-11-25 |
| 35 | Aquapark section as horizontal swipe on phone | Two big cards stacked took too much height | 2026-11-25 |
| 36 | Desktop port follows the old desktop layouts, not a scaled-up phone layout | A scaled-up phone version felt off and less recognisable | 2026-11-25 |
| 37 | Rooms page uses the old copy, trimmed; shared amenities shown once | Client should recognise the text; repeating identical lists per room was noise | 2026-11-25 |
