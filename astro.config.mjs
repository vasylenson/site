import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

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
    fonts: [
        {
            provider: fontProviders.google(),
            name: "Nanum Gothic",
            cssVariable: "--font-nanum-gothic",
        },
        {
            provider: fontProviders.google(),
            name: "Nanum Gothic Coding",
            cssVariable: "--font-nanum-gothic-mono",
        },
        {
            provider: fontProviders.google(),
            name: "Nanum Myeongjo",
            cssVariable: "--font-nanum-myeongjo",
        },
    ],
});
