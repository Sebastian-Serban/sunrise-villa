// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://sunrisevilla-felix.com",
	i18n: {
		locales: ["ro", "en", "de"],
		defaultLocale: "ro",
		routing: {
			// Romanian lives at /, English at /en/, German at /de/
			prefixDefaultLocale: false,
		},
	},
	integrations: [
		sitemap({
			// Adds hreflang alternates for every language version of each page
			i18n: {
				defaultLocale: "ro",
				locales: { ro: "ro-RO", en: "en", de: "de" },
			},
		}),
	],
	image: {
		// Responsive images by default: srcset/sizes and object-fit styles from <Image>
		layout: "constrained",
	},
});
