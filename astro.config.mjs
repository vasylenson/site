import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: "https://by-marko.com",

    vite: {
        plugins: [tailwindcss()],
    },

    i18n: {
        locales: ["en-GB"],
        defaultLocale: "en-GB",
    },
});