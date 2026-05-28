import hero from "~/assets/img/hero.jpg";
import hakkimizda from "~/assets/img/hakkimizda.jpg";
import kurumsal from "~/assets/img/kurumsal.jpg";
import bireysel from "~/assets/img/bireysel.jpg";
import grup from "~/assets/img/grup.jpg";
import yaklasim from "~/assets/img/yaklasim.jpg";
import portre from "~/assets/img/portre.jpg";
import detay from "~/assets/img/detay.jpg";
import doku from "~/assets/img/doku.jpg";
import ayrac from "~/assets/img/ayrac.jpg";

import type { ImageMetadata } from "astro";

export const siteImages = {
  hero,
  hakkimizda,
  kurumsal,
  bireysel,
  grup,
  yaklasim,
  portre,
  detay,
  doku,
  ayrac,
} satisfies Record<string, ImageMetadata>;

export type SiteImageName = keyof typeof siteImages;
