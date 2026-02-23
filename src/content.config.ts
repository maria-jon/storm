import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const portfolio = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/portfolio', pattern: '**/*.md' }),
	// Type-check frontmatter using a schema
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			date: z.coerce.date(),
			//cover: image(),
			cover: z.string(),
			coverAlt: z.string(),
			tags: z.array(z.string()).optional(),
			//additionalImgs: z.array(image()).optional(),
			additionalImgs: z.array(z.string()).optional(),
			link: z.string().optional(),
			linkText: z.string().optional(),
			available: z.boolean().default(false),
			availableText: z.string().optional(),
		}),
});

const about = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/about', pattern: '**/*.md' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			id: z.number(),
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			date: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			cover: image(),
			coverAlt: z.string(),
			additionalImgs: image().optional(),
			link: z.string().optional(),
		}),
});

export const collections = { 
	blog: blog, 
	portfolio: portfolio,
	about: about,
};
