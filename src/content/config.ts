import { defineCollection, z } from "astro:content";

const faqCollection = defineCollection({
  type: "data",
  schema: z.object({
    q: z.string(),
    a: z.string(),
    order: z.number().default(99),
    category: z.enum(["genel", "bireysel", "kurumsal", "ucretlendirme"]).default("genel"),
  }),
});

export const collections = {
  faq: faqCollection,
};
