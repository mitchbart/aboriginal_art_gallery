import { Prisma, ArtStyleType } from '../../generated/prisma';
import prisma from '../client';

export class ArtistService {

  // Get all artists including artefacts
  static async getAllArtists() {
    return await prisma.artist.findMany({
      include: {
        artefacts: true
      }
    });
  }

  // Get all artists who create a particular artstyle
  static async getArtistByArtstyle(style: string) {
    return await prisma.artist.findMany({
      where: {
        artStyles: {
          has: style as ArtStyleType,
        }
      },
      include: {
        artefacts: true
      }
    });
  }

  // Get singular artist including artefacts
  static async getArtist(id: string) {
    // https://www.prisma.io/docs/orm/reference/prisma-client-reference#finduniqueorthrow
    return await prisma.artist.findUniqueOrThrow({
      where: { id },
      include: {
        artefacts: true
      }
    });
  }

  // Create a new artist
  static async createArtist(artistData: Prisma.ArtistCreateInput) {
    return await prisma.artist.create({
      data: artistData
    });
  }

  // Update an artist
  static async updateArtist(id: string, updateData: Prisma.ArtistUpdateInput) {
    return await prisma.artist.update({
      where: { id },
      data: updateData
    });
  }

  // Delete an artist
  static async deleteArtist(id: string) {
    return await prisma.artist.delete({
      where: { id }
    });
  }
}