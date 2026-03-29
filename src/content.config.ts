import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    links: z.object({
      github: z.string().url().optional(),
      forgejo: z.string().url().optional(),
      live: z.string().url().optional(),
    }),
    type: z.enum(["web", "app"]).default("web"),
    order: z.number(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
