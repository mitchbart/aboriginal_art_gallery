// Create a prisma client instance - used for database interaction

import { PrismaClient } from '../generated/prisma';

//const prisma = new PrismaClient();

// Exhibitions isCurrentlyActive has been made a computed field by prisma
// Added becuase I initially thought I could use this to filter the database
// Endup up using a different method in exhibitionRoutes
// Left this in incase it's useful for the frontend
// Prisma computed fields - https://www.prisma.io/docs/orm/prisma-client/queries/computed-fields
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