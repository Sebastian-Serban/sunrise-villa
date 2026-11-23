import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

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
	loader: glob({ pattern: "*.json", base: "./src/content/rooms" }),
	schema: ({ image }) =>
		z.object({
			order: z.number().int(),
			name: localized,
			beds: localized,
			description: localized,
			sizeM2: z.number().positive(),
			maxPersons: z.number().int().positive(),
			image: image(),
			imageAlt: localized,
		}),
});

/** Nearby attractions for the "Împrejurimi" section. */
const attractions = defineCollection({
	loader: glob({ pattern: "*.json", base: "./src/content/attractions" }),
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

/**
 * Guest reviews. Quotes stay in the language they were written in and are
 * shown as-is on every language version: never translate a real review.
 */
const reviews = defineCollection({
	loader: file("./src/content/reviews.json"),
	schema: z.object({
		order: z.number().int(),
		author: z.string(),
		text: z.string(),
		/** The big quote next to the score. Exactly one review should have it. */
		featured: z.boolean().default(false),
		source: z.enum(["booking", "google"]),
	}),
});

/** FAQ entries. Answers state policies, so keep them in sync with docs/sunrise-villa.md. */
const faq = defineCollection({
	loader: file("./src/content/faq.json"),
	schema: z.object({
		order: z.number().int(),
		question: localized,
		answer: localized,
	}),
});

export const collections = { rooms, attractions, reviews, faq };
