import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const skills = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/skills" }),
    schema: z.object({
        title: z.object({
            de: z.string(),
        }),
        items: z.array(
            z.object({
                name: z.string(),
                level: z.enum(["proficient", "learning", "used"]),
            }),
        ),
    }),
});

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        locale: z.string(),
        title: z.string(),
        description: z.string(),
        tech: z.array(z.string()),
        links: z.object({
            github: z.url().optional(),
            forgejo: z.url().optional(),
            live: z.url().optional(),
        }),
        type: z.enum(["web", "app"]).default("web"),
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
        summary: z.array(z.string()).optional(),
        order: z.number(),
    }),
});

export const collections = { skills, projects, experience };
