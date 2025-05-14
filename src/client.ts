// Create a prisma client instance - used for database interaction

import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();
export default prisma;