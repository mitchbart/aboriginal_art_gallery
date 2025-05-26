// Create a prisma client instance - used for database interaction

import { PrismaClient } from '../generated/prisma';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient({
  // Omit hashedPassword globally
  // https://www.prisma.io/docs/orm/prisma-client/queries/excluding-fields
  omit: {
    user: {
      hashedPassword: true
    }
  },
}).$extends({
  // Automatically hash password with bcrypt
  // https://stackoverflow.com/questions/77435838/hash-password-in-prisma-orm
  query: {
    user: {
      $allOperations({ operation, args, query }) {
        if ((operation === 'create' || operation === 'update') && args.data.hashedPassword) {
          args.data.hashedPassword = bcrypt.hashSync(args.data.hashedPassword as string, 10)
        }
        return query(args)
      }
    }
  },
  // Exhibitions isCurrentlyActive has been made a computed field by prisma
  // Added becuase I initially thought I could use this to filter the database
  // Ended up up using a different method in exhibitionRoutes
  // Left this in incase it's useful for the frontend
  // Prisma computed fields - https://www.prisma.io/docs/orm/prisma-client/queries/computed-fields
  result: {
    exhibition: {
      isCurrentlyActive: {
        needs: { startDate: true, endDate: true },
        compute(exhibition) {
          const now = new Date();
          return now >= exhibition.startDate && now <= exhibition.endDate;
        }
      }
    }
  }
});

export default prisma;