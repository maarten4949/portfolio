// 1. Import utilities from `astro:content`
import { defineCollection, reference } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Import Zod
import { z } from "astro/zod";

// 4. Define your collection(s)
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1).max(100),
      description: z.string().min(1).max(500),
      longDescription: z.string().min(1).max(5000),
      image: image(),
      tags: z.array(z.string().min(1).max(100)).min(1).max(10),
      links: z
        .array(
          z.object({
            url: z.string().url().min(1).max(200),
            label: z.string().min(1).max(100),
            isPrimary: z.boolean().default(false),
          }),
        )
        .min(1)
        .max(10),
    }),
});
const technologies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/technologies" }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1).max(100),
      order: z.number().min(1).max(100),
      description: z.string().min(1).max(500),
      experience: z.string().min(1).max(5000),
      projects: z.array(reference("projects")),
      image: image(),
    }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = {
  projects,
  technologies,
};
