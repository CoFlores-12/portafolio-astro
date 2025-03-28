import { defineCollection, z } from 'astro:content';

export const collections = {
  work: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
	  img: z.string(),
	  img_alt: z.string().optional(),
      tags: z.array(z.string()),
      images: z.array(
        z.object({
          src: z.string(),
          alt: z.string().optional(),
          caption: z.string().optional(),
        })
      ).optional(), 
    }),
  }),
};
