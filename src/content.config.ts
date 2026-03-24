import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';
/*
export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
*/
/*
export const collections = {
  docs: defineCollection({ 
    loader: docsLoader(), 
    //
    schema: docsSchema({
 	  //extend method to keep all the standard files and allow
	  //extra data for the news object
      extend: ({ image }) => z.object({
        //news variables
		    title: z.string(),
        author: z.string().optional(),
        publishDate: z.coerce.date().optional(),
        coverImage: image().optional(),
      }),
    }), 
  }),
};
*/

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: () =>
        z.object({
          author: z.string().optional(),
          publishDate: z.coerce.date().optional(),
          coverImage: z.string().optional(),
        }),
    }),
  }),
};

//export const collections = { docs };
