export const languages = {
	ro: 'Română',
	en: 'English',
	de: 'Deutsch',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ro';

/** Localised string, one value per language. Used by content collections and UI. */
export type Localized = Record<Lang, string>;

export const BOOKING_URL = 'https://www.booking.com/Share-49dqhZ';
export const PHONE = '+40 771 734 907';
export const PHONE_HREF = 'tel:+40771734907';
export const WHATSAPP_HREF = 'https://wa.me/40771734907';
export const EMAIL = 'contact@sunrisevilla-felix.com';
export const ADDRESS = 'Str. Mihai Eminescu 41, Sânmartin, Băile Felix';

/**
 * UI strings. Romanian is the source; EN/DE are drafts until the client reviews them.
 * Keys are grouped by where they appear.
 */
export const ui = {
	ro: {
		'meta.title': 'Sunrise Villa ★★★ | Pensiune în Băile Felix',
		'meta.description':
			'Pensiune cu 10 camere în Băile Felix, la 2 km de centrul stațiunii. Piscină privată, grădină, parcare gratuită. Nota 9.9 pe Booking.com.',
		'nav.rooms': 'Camere',
		'nav.spaces': 'Spații comune',
		'nav.area': 'Împrejurimi',
		'nav.contact': 'Contact',
		'nav.menu': 'Meniu',
		'nav.close': 'Închide',
		'cta.book': 'Rezervă',
		'cta.bookOnBooking': 'Rezervă pe Booking.com',
		'cta.seeRooms': 'Vezi camerele',
		'hero.kicker': 'Pensiune ★★★ în Băile Felix',
		'hero.title.before': 'Liniște, la doar 2 km de',
		'hero.title.accent': 'agitație.',
		'hero.lead':
			'Zece camere liniștite, o piscină doar pentru oaspeți și o grădină cu foișor. Aproape de băile termale, departe de zgomotul stațiunii.',
		'rooms.label': 'Camere',
		'rooms.title': 'Zece camere, două feluri de a dormi bine.',
		'rooms.lead': 'Toate au 20 m², baie proprie și vedere spre piscină.',
		'rooms.persons': 'persoane',
		'rooms.details': 'Detalii cameră',
		'footer.tagline':
			'Pensiune de 3 stele în Sânmartin, Băile Felix. Liniște, la 2 km de agitație.',
	},
	en: {
		'meta.title': 'Sunrise Villa ★★★ | Guesthouse in Băile Felix',
		'meta.description':
			'A 10-room guesthouse in Băile Felix, 2 km from the resort centre. Private pool, garden, free parking. Rated 9.9 on Booking.com.',
		'nav.rooms': 'Rooms',
		'nav.spaces': 'Shared spaces',
		'nav.area': 'Surroundings',
		'nav.contact': 'Contact',
		'nav.menu': 'Menu',
		'nav.close': 'Close',
		'cta.book': 'Book',
		'cta.bookOnBooking': 'Book on Booking.com',
		'cta.seeRooms': 'See the rooms',
		'hero.kicker': '★★★ guesthouse in Băile Felix',
		'hero.title.before': 'Quiet, just 2 km from the',
		'hero.title.accent': 'crowds.',
		'hero.lead':
			'Ten quiet rooms, a pool just for guests and a garden with a gazebo. Close to the thermal baths, away from the resort noise.',
		'rooms.label': 'Rooms',
		'rooms.title': 'Ten rooms, two ways to sleep well.',
		'rooms.lead': 'All are 20 m², with a private bathroom and a view of the pool.',
		'rooms.persons': 'guests',
		'rooms.details': 'Room details',
		'footer.tagline': '3-star guesthouse in Sânmartin, Băile Felix. Quiet, 2 km from the crowds.',
	},
	de: {
		'meta.title': 'Sunrise Villa ★★★ | Pension in Băile Felix',
		'meta.description':
			'Pension mit 10 Zimmern in Băile Felix, 2 km vom Kurortzentrum. Privater Pool, Garten, kostenlose Parkplätze. Bewertet mit 9.9 auf Booking.com.',
		'nav.rooms': 'Zimmer',
		'nav.spaces': 'Gemeinschaftsräume',
		'nav.area': 'Umgebung',
		'nav.contact': 'Kontakt',
		'nav.menu': 'Menü',
		'nav.close': 'Schliessen',
		'cta.book': 'Buchen',
		'cta.bookOnBooking': 'Auf Booking.com buchen',
		'cta.seeRooms': 'Zimmer ansehen',
		'hero.kicker': '★★★ Pension in Băile Felix',
		'hero.title.before': 'Ruhe, nur 2 km vom',
		'hero.title.accent': 'Trubel.',
		'hero.lead':
			'Zehn ruhige Zimmer, ein Pool nur für Gäste und ein Garten mit Pavillon. Nah an den Thermalbädern, weit weg vom Lärm des Kurorts.',
		'rooms.label': 'Zimmer',
		'rooms.title': 'Zehn Zimmer, zwei Arten, gut zu schlafen.',
		'rooms.lead': 'Alle mit 20 m², eigenem Bad und Blick auf den Pool.',
		'rooms.persons': 'Personen',
		'rooms.details': 'Zimmerdetails',
		'footer.tagline': '3-Sterne-Pension in Sânmartin, Băile Felix. Ruhe, 2 km vom Trubel.',
	},
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)['ro'];

// Compile-time guard: every language must define every key Romanian defines.
const _complete: Record<Lang, Record<UiKey, string>> = ui;
void _complete;

export function useTranslations(lang: Lang) {
	return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/** Narrow Astro.currentLocale (string | undefined) to a site language. */
export function getLang(locale: string | undefined): Lang {
	return locale && locale in languages ? (locale as Lang) : defaultLang;
}
