import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        locale: z.string(),
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
    }),
});

const experience = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
    schema: z.object({
        locale: z.string(),
        type: z.enum(["work", "education"]),
        title: z.string(),
        organization: z.string(),
        location: z.string(),
        start: z.string(),
        end: z.string().optional(),
        cv: z.array(z.string()).optional(),
        order: z.number(),
    }),
});

export const collections = { projects, experience };
