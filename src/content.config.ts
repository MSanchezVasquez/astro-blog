import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),

    difficulty: z.enum(["básico", "intermedio", "avanzado"]).default("básico"),
    isDraft: z.boolean().default(false),
    framework: z.string().optional(),
  }),
});
// Exporta un solo objeto `collections` para registrar tus colecciones
export const collections = { blog };
