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
			/** Text of the homepage card. */
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

/**
 * Things around the villa, shown on the homepage in two places:
 * - kind "aquapark": the discount cards ("Reduceri la aquaparkuri")
 * - kind "attraction": the photo tiles ("Relaxare la Felix, aventură în Oradea")
 */
const attractions = defineCollection({
	loader: glob({ pattern: "*.json", base: "./src/content/attractions" }),
	schema: ({ image }) =>
		z.object({
			kind: z.enum(["aquapark", "attraction"]),
			order: z.number().int(),
			name: localized,
			/** Aquapark cards: the text on desktop. */
			summary: localized.optional(),
			/** Aquapark cards: the shorter text on phones. */
			summaryShort: localized.optional(),
			/** Attraction tiles: the line under the name (only shown on the large tiles). */
			caption: localized.optional(),
			/** Attraction tiles: large (tall) tile on desktop. */
			large: z.boolean().default(false),
			/** Link to the place. Cards and tiles are plain (not clickable) until it is set. */
			url: z.url().optional(),
			image: image(),
			/** Cards need it; tiles have their name as a visible label, so they leave it empty. */
			imageAlt: localized.optional(),
		}),
});

/** Common spaces on the homepage (Spații comune). */
const spaces = defineCollection({
	loader: file("./src/content/spaces.json"),
	schema: ({ image }) =>
		z.object({
			order: z.number().int(),
			name: localized,
			text: localized,
			image: image(),
			alt: localized,
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
		/** Where it was posted, when known. */
		source: z.enum(["booking", "google"]).optional(),
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

export const collections = { rooms, attractions, spaces, reviews, faq, gallery, legal };
