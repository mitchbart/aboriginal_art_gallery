import { z } from 'zod';

export const createExhibitionSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().min(10).max(2000),
  theme: z.string().max(100).optional().nullable(),
  startDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  endDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  location: z.string().min(1).max(200),
  artefactIds: z.array(z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId format")).default([]),
  imageUrl: z.string().url().optional().nullable(),
  admissionFee: z.number().nonnegative().optional().default(0),
}).strict();

// Create a partial schema from createExhibitionSchema where all properties are optional
export const updateExhibitionSchema = createExhibitionSchema.partial();