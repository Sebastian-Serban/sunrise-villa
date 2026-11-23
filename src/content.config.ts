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
			/** Fragment id on the rooms page and value of ?camera= on the contact page. */
			anchor: z.string().regex(/^[a-z]+$/),
			name: localized,
			beds: localized,
			/** Short text for the homepage card. */
			description: localized,
			/** Longer text for the rooms page. */
			intro: localized,
			/** Label of the enquiry button on the rooms page. */
			ask: localized,
			/** Pre-filled contact form message when coming from that button. */
			enquiry: localized,
			sizeM2: z.number().positive(),
			maxPersons: z.number().int().positive(),
			/** Whether an extra bed can be added on request. */
			extraBed: z.boolean(),
			/** First photo is the cover (homepage card, rooms page main image). */
			photos: z.array(z.object({ image: image(), alt: localized })).min(1),
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

/** Photos for the gallery page. Order in gallery.json is the display order for "all". */
const gallery = defineCollection({
	loader: file("./src/content/gallery.json"),
	schema: ({ image }) =>
		z.object({
			order: z.number().int(),
			image: image(),
			category: z.enum(["camere", "gradina", "interior", "drona"]),
			/** Portrait crop in the grid. */
			tall: z.boolean().default(false),
			alt: localized,
		}),
});

/** Legal pages as Markdown, one file per language: src/content/legal/<page>/<lang>.md */
const legal = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		updated: z.string(),
	}),
});

export const collections = { rooms, attractions, reviews, faq, gallery, legal };
