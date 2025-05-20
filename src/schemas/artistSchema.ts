import { z } from 'zod';
import { ArtStyleType } from '../../generated/prisma';

// Convert to zod enum
const artStyleEnum = z.nativeEnum(ArtStyleType);

export const createArtistSchema = z.object({
  name: z.string().min(1).max(100),
  aboriginalName: z.string().max(100).optional().nullable(),
  tribe: z.string().max(100).optional().nullable(),
  region: z.string().max(100).optional().nullable(),
  biography: z.string().min(10).max(1000),
  birthYear: z.number().int().max(new Date().getFullYear()).optional().nullable(),
  deathYear: z.number().int().max(new Date().getFullYear()).optional().nullable(),
  artStyles: z.array(artStyleEnum).min(1).max(10),
  imageUrl: z.string().url().optional().nullable(),
}).strict();

// Create a partial schema from createArtistSchema where all properties are optional
export const updateArtistSchema = createArtistSchema.partial();