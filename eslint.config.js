// @ts-check
import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import prettier from "eslint-config-prettier";
import globals from "globals";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
	{ ignores: ["dist/", ".astro/", "legacy/", "node_modules/"] },
	js.configs.recommended,
	...tseslint.configs.recommended,
	...astro.configs.recommended,
	// Accessibility rules for Astro templates (alt text, labels, ARIA, ...)
	...astro.configs["jsx-a11y-recommended"],
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
			],
		},
	},
	// Must stay last: turns off rules that conflict with Prettier
	prettier,
);
