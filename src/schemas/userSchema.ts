import { z } from 'zod';
import { RoleType } from '../../generated/prisma';

// Convert to zod enum
const roleEnum = z.nativeEnum(RoleType);

// Registration schema
export const registerUserSchema = z.object({
  email: z.string().email("Invalid email format").min(1).max(100),
  username: z.string().min(3, "Username must be at least 3 characters").max(50).regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
  firstName: z.string().min(1).max(50).optional().nullable(),
  lastName: z.string().min(1).max(50).optional().nullable(),
  hashedPassword: z.string().min(8, "Password must be at least 8 characters").max(100),
  role: roleEnum.optional().default(RoleType.USER),
}).strict();


// Login schema
export const loginUserSchema = z.object({
  email: z.string().email("Invalid email format").min(1),
  password: z.string().min(1, "Password is required"),
}).strict();