/**
 * Translated URL slugs. Every page has one slug per language; the route files in
 * src/pages/ (and en/, de/) must use exactly these names.
 * Links and hreflang go through pageUrl()/pageAbsoluteUrl(), never hand-written paths.
 */
import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from "astro:i18n";
import type { Lang } from "./ui";

export const routes = {
	home: { ro: "", en: "", de: "" },
	rooms: { ro: "camere", en: "rooms", de: "zimmer" },
	gallery: { ro: "galerie", en: "gallery", de: "galerie" },
	contact: { ro: "contact", en: "contact", de: "kontakt" },
	privacy: { ro: "confidentialitate", en: "privacy", de: "datenschutz" },
} as const satisfies Record<string, Record<Lang, string>>;

export type Page = keyof typeof routes;

/** Site-relative URL of a page in a language, e.g. pageUrl("de", "rooms") → "/de/zimmer/". */
export function pageUrl(lang: Lang, page: Page): string {
	return getRelativeLocaleUrl(lang, routes[page][lang]);
}

/** Absolute URL, for canonical and hreflang links. */
export function pageAbsoluteUrl(lang: Lang, page: Page): string {
	return getAbsoluteLocaleUrl(lang, routes[page][lang]);
}
