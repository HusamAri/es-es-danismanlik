import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://es-esdanismanlik.com",
  trailingSlash: "never",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "tr",
        locales: { tr: "tr-TR" },
      },
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "auto",
  },
  prefetch: {
    defaultStrategy: "viewport",
  },
});
