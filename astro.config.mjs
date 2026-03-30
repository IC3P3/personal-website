// @ts-check
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

import sitemap from "@astrojs/sitemap";


import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://neifler.de",
  i18n: {
    defaultLocale: "de",
    locales: ["de"],
  },
  integrations: [svelte(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
