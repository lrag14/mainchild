import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    isDraft: z.boolean(),
    publishedDate: z.string().transform((str) => new Date(str)), // updated from publishDate
    tags: z.array(z.string()),
    image: z.string().optional(),
    canonicalURL: z.string().url(),
  }),
});

export const collections = {
  blog: blogCollection,
};
