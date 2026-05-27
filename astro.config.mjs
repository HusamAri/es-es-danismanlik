import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.SITE_URL || "https://husamari.github.io";
const base = process.env.BASE_PATH || "/es-es-danismanlik";

export default defineConfig({
  site,
  base,
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
    assets: "_assets",
  },
  prefetch: {
    defaultStrategy: "viewport",
  },
});
