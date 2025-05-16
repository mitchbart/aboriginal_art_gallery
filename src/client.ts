// Create a prisma client instance - used for database interaction

import { PrismaClient } from '../generated/prisma';

//const prisma = new PrismaClient();

// Exhibitions isCurrentlyActive has been made a computed field by prisma
const prisma = new PrismaClient().$extends({
  result: {
    exhibition: {
      isCurrentlyActive: {
        needs: { startDate: true, endDate: true },
        compute(exhibition) {
          const now = new Date();
          return now >= exhibition.startDate && now <= exhibition.endDate;
        },
      },
    },
  },
});

export default prisma;