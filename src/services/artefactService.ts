import prisma from '../client';

export class ArtefactService {

  // Get all artefacts
  static async getAllArtefacts() {
    return await prisma.artefact.findMany();
  }

  // Get singular artefact
  static async getArtefact(id: string) {
    return await prisma.artefact.findUniqueOrThrow({
      where: { id }
    });
  }

  // Get the exhibitions an artefact has appeared in 
  static async getArtefactExhibitions(id: string) {
    return await prisma.exhibition.findMany({
      where: {
        artefactIds: {
          has: id
        }
      }
    });
  }

  // Create a new artefact
  static async createArtefact(artefactData: any) {
    return await prisma.artefact.create({
      data: artefactData
    });
  }

  // Update an artefact
  static async updateArtefact(id: string, updateData: any) {
    return await prisma.artefact.update({
      where: { id },
      data: updateData
    });
  }

  // Delete an artefact
  static async deleteArtefact(id: string) {
    return await prisma.artefact.delete({
      where: { id }
    });
  }
}