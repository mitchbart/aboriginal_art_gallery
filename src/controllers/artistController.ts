// Note - first controller made so comments and links more frequent in this file

import { Request, Response } from "express";
import prisma from "../client";
import { Prisma } from '../../generated/prisma'; // For error types

// Get all artists
export async function getArtists(req: Request, res: Response) {
  try {
    // Get all artists, include artefacts
    const artists = await prisma.artist.findMany({
      include: {
        artefacts: true,
      },
    });

    // Response contains all artists
    res.json({
      status: true,
      message: "Artists successfully fetched",
      data: artists,
    });

  } catch (e) {
    // Catch any other errors and output to console
    console.error(e);
    res.status(500).json({
      status: false,
      message: 'Internal server error'
    });
  }
}

// Get a singular artist
export async function getArtist(req: Request, res: Response) {
  try {
    // Get id from params
    const { artistid } = req.params;
    
    // Find artist based on id - include artefacts
    // https://www.prisma.io/docs/orm/reference/prisma-client-reference#finduniqueorthrow
    const artist = await prisma.artist.findUniqueOrThrow({
      where: {
        id: artistid,
      },
      include: {
        artefacts: true,
      },
    });

    // Response
    res.json({
      status: true,
      message: "Artist successfully fetched",
      data: artist,
    });

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('Error finding artist:', e)
      // Return 404 if artist not found
      // https://www.prisma.io/docs/orm/reference/error-reference#error-codes
      if (e.code === 'P2025') {
        res.status(404).json({
          status: false,
          message: 'Artist not found',
        });
        return;
      }
    }
    
    res.status(500).json({
      status: false,
      message: 'Internal server error',
    });
  }
}

// Add a new artist
export async function createArtist(req: Request, res: Response) {
  try {
    // Create artist from request body
    const artist = await prisma.artist.create({
      data: req.body,
    });

    // Return status 201 created
    res.status(201).json({
      status: true,
      message: "Artist successfully created",
      data: artist,
    });
    
  } catch (e) {
    console.error(e);
    res.status(500).json({
      status: false,
      message: 'Internal server error'
    });
  }
}

// Update an artist
export async function updateArtist(req: Request, res: Response) {
  try {
    // Get id from params
    const { artistid } = req.params;

    // Update the artist
    const updatedArtist = await prisma.artist.update({
      where: {
        id: artistid,
      },
      data: req.body,
    });

    // Response
    res.json({
      status: true,
      message: 'Artist successfully updated',
      data: updatedArtist,
    });

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('Error updating artist:', e)
      // Return 404 if artist not found
      if (e.code === 'P2025') {
        res.status(404).json({
          status: false,
          message: e.code,
        });
        return;
      }
    }
    
    res.status(500).json({
      status: false,
      message: 'Internal server error',
    });
  }
}

// Delete an artist
export async function deleteArtist(req: Request, res: Response) {
  try {
    // Get id from params
    const { artistid } = req.params;

    // Delete requested artist
    await prisma.artist.delete({
      where: {
        id: artistid,
      }
    });

    // Response
    res.json({
      status: true,
      message: 'Artist successfully deleted',
    });

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('Error deleting artist:', e)
      // Return 404 if artist not found
      if (e.code === 'P2025') {
        res.status(404).json({
          status: false,
          message: e.code,
        });
        return;
      }
    }
    
    res.status(500).json({
      status: false,
      message: 'Internal server error',
    });
  }
}