// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://sunrisevilla-felix.com',
	i18n: {
		locales: ['ro', 'en', 'de'],
		defaultLocale: 'ro',
		routing: {
			// Romanian lives at /, English at /en/, German at /de/
			prefixDefaultLocale: false,
		},
	},
	image: {
		// Serve modern formats; Astro picks AVIF/WebP per browser via <Picture>
		layout: 'constrained',
	},
});
