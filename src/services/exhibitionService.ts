import prisma from '../client';
import { Prisma } from '../../generated/prisma';

export class ExhibitionService {

  // Get all exhibitions including artefacts
  static async getAllExhibitions() {
    return await prisma.exhibition.findMany({
      include: {
        artefacts: true
      }
    });
  }

  // Get all active exhibitions
  static async getActiveExhibitions(now: Date) {
    return await prisma.exhibition.findMany({
      where: {
        // Prisma query syntax to check if current date between startDate and endDate
        AND: [
          { startDate: { lte: now} },
          { endDate: { gte: now }},
        ],
      },
      include: {
        artefacts: true
      }
    })
  }

  // Get singular exhibition including artefacts
  static async getExhibition(id: string) {
    return await prisma.exhibition.findUniqueOrThrow({
      where: { id },
      include: {
        artefacts: true
      }
    });
  }

  // Create a new exhibition
  static async createExhibition(exhibitionData: Prisma.ExhibitionCreateInput) {
    return await prisma.exhibition.create({
      data: exhibitionData
    });
  }

  // Update an exhibition
  static async updateExhibition(id: string, updateData: Prisma.ExhibitionUpdateInput) {
    return await prisma.exhibition.update({
      where: { id },
      data: updateData
    });
  }

  // Delete an exhibition
  static async deleteExhibition(id: string) {
    return await prisma.exhibition.delete({
      where: { id }
    });
  }
}