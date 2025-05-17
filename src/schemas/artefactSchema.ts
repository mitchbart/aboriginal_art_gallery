import { z } from 'zod';

export const createArtefactSchema = z.object({
  title: z.string().min(1).max(200),
  // Regex for mongodb objectid - https://stackoverflow.com/questions/20988446/regex-for-mongodb-objectid
  artistId: z.string().min(1).regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId format"),
  exhibitionIds: z.array(z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId format")).default([]),
  creationYear: z.number().int().min(0).max(new Date().getFullYear()).optional().nullable(),
  description: z.string().max(2000).optional().nullable(),
  dimensions: z.object({
    height: z.number().positive().optional(),
    width: z.number().positive().optional(),
    depth: z.number().positive().optional(),
    unit: z.enum(['cm', 'mm', 'in', 'm']).optional(),
  }).optional().nullable(),
  artStyle: z.string().min(1).max(100),
  imageUrl: z.string().url(),
}).strict();

// Create a partial schema from createArtefactSchema where all properties are optional
export const updateArtefactSchema = createArtefactSchema.partial();