import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';

// Validation middleware
export const validateSchema = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  // Parse request body 
  const { success, error } = schema.safeParse(req.body);
  // Handle non-compliant request body
  if (!success) {
    res.status(400).json({
      status: false,
      message: error.errors
        .map((t) => `${t.path[0] ?? ''}: ${t.message}`)
        .join(', '),
    });
    // End response and return 
    res.end();
    return;
  }
  // Continue if valid
  next();
};