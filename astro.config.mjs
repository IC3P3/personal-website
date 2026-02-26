// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), sitemap(), robotsTxt()],

  vite: {
    plugins: [tailwindcss()]
  }
});