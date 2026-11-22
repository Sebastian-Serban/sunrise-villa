import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** A string translated into every site language. RO is the source. */
const localized = z.object({
	ro: z.string(),
	en: z.string(),
	de: z.string(),
});

/**
 * Rooms. One JSON file per room type in src/content/rooms/.
 * Facts (size, persons) live once; only text is localised.
 */
const rooms = defineCollection({
	loader: glob({ pattern: '*.json', base: './src/content/rooms' }),
	schema: ({ image }) =>
		z.object({
			order: z.number().int(),
			name: localized,
			beds: localized,
			description: localized,
			sizeM2: z.number().positive(),
			maxPersons: z.number().int().positive(),
			/** Lei per night. Leave out until the client confirms prices. */
			priceFrom: z.number().positive().optional(),
			image: image(),
			imageAlt: localized,
		}),
});

/** Nearby attractions for the "Împrejurimi" section. */
const attractions = defineCollection({
	loader: glob({ pattern: '*.json', base: './src/content/attractions' }),
	schema: ({ image }) =>
		z.object({
			order: z.number().int(),
			name: z.string(),
			/** Shown large, e.g. "4,2 km". Localised because "nearby" is a word. */
			distance: localized,
			summary: localized,
			url: z.url().optional(),
			image: image(),
			imageAlt: localized,
		}),
});

export const collections = { rooms, attractions };
