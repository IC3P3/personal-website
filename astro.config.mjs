// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://neifler.de",
    i18n: {
        defaultLocale: "de",
        locales: ["de", "en"],
        routing: {
            prefixDefaultLocale: true,
        },
    },
    integrations: [sitemap()],

    vite: {
        plugins: [tailwindcss()],
    },
});
