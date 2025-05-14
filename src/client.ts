// Create a prisma client instance - used for database interaction

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;