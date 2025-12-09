// Importa el cargador glob
import { glob } from "astro/loaders";
// Importa utilidades de `astro:content`
import { z, defineCollection } from "astro:content";
// Define un `loader` y un `schema` para cada colección
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
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
