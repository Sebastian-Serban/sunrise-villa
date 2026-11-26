// @ts-check

// Subset ranges as published by Fontsource (where the font files come from). Romanian needs latin-ext (ă, â, î, ș, ț).
const LATIN =
	"U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";
const LATIN_EXT =
	"U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF";
const FONTS = "./src/assets/fonts";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

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
	// Self-hosted variable fonts. Astro generates the @font-face rules, preload links (<Font> in
	// Base.astro) and size-matched fallbacks, so text doesn't jump when the real font arrives.
	fonts: [
		{
			name: "Fraunces",
			cssVariable: "--font-fraunces",
			provider: fontProviders.local(),
			fallbacks: ["Georgia", "serif"],
			options: {
				variants: [
					{
						src: [`${FONTS}/fraunces-latin-opsz-normal.woff2`],
						weight: "100 900",
						style: "normal",
						unicodeRange: [LATIN],
					},
					{
						src: [`${FONTS}/fraunces-latin-ext-opsz-normal.woff2`],
						weight: "100 900",
						style: "normal",
						unicodeRange: [LATIN_EXT],
					},
					{
						src: [`${FONTS}/fraunces-latin-opsz-italic.woff2`],
						weight: "100 900",
						style: "italic",
						unicodeRange: [LATIN],
					},
					{
						src: [`${FONTS}/fraunces-latin-ext-opsz-italic.woff2`],
						weight: "100 900",
						style: "italic",
						unicodeRange: [LATIN_EXT],
					},
				],
			},
		},
		{
			name: "Instrument Sans",
			cssVariable: "--font-instrument-sans",
			provider: fontProviders.local(),
			fallbacks: ["system-ui", "sans-serif"],
			options: {
				variants: [
					{
						src: [`${FONTS}/instrument-sans-latin-wght-normal.woff2`],
						weight: "400 700",
						style: "normal",
						unicodeRange: [LATIN],
					},
					{
						src: [`${FONTS}/instrument-sans-latin-ext-wght-normal.woff2`],
						weight: "400 700",
						style: "normal",
						unicodeRange: [LATIN_EXT],
					},
				],
			},
		},
	],
	image: {
		// Responsive images by default: srcset/sizes and object-fit styles from <Image>
		layout: "constrained",
	},
});
