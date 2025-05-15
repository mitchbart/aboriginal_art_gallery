import { z } from 'zod';

export const createArtistSchema = z.object({
  name: z.string().min(1).max(100),
  aboriginalName: z.string().max(100).optional().nullable(),
  tribe: z.string().max(100).optional().nullable(),
  region: z.string().max(100).optional().nullable(),
  biography: z.string().min(10).max(1000),
  birthYear: z.number().int().max(new Date().getFullYear()).optional().nullable(),
  deathYear: z.number().int().max(new Date().getFullYear()).optional().nullable(),
  artStyles: z.array(z.string()).min(1),
  imageUrl: z.string().url().optional().nullable(),
}).strict();

// Create a partial schema from createArtistSchema where all properties are optional
export const updateArtistSchema = createArtistSchema.partial();