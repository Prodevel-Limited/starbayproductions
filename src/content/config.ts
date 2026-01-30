import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum(['Audio', 'Corporate', 'Worship', 'Media', 'Technical', 'International']),
    description: z.string(),
    specs: z.array(z.string()),
    equipment: z.array(z.string()).optional(),
    icon: z.string(),
    order: z.number(),
  }),
});

const stories = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    eventType: z.string(),
    location: z.string(),
    date: z.date(),
    quote: z.string(),
    image: z.string(),
    impact: z.string(),
  }),
});

export const collections = {
  services,
  stories,
};
