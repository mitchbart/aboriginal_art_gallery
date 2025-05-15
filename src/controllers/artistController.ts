import { Request, Response } from "express";
import prisma from "../client";

// Get all artists
export async function getArtists(req: Request, res: Response) {
  try {
    // Find all artists and return
    const artists = await prisma.artist.findMany({
      include: {
        artefacts: true,
      },
    });
    res.json({
      status: true,
      message: "Artists successfully fetched",
      data: artists,
    });
  } catch (error) {
    // Catch any other errors and output to console
    console.error(error);
    res.status(500).json({
      status: false,
      message: 'Unknown error while fetching artists'
    });
  }
}

// Get a singular artist
export async function getArtist(req: Request, res: Response) {
  try {
    const { artistid } = req.params;
    // Find artist based on id
    const artist = await prisma.artist.findFirst({
      where: {
        id: artistid,
      },
      include: {
        artefacts: true,
      },
    });
    // If no artist found, return 404 not found
    if (!artist) {
      res.status(404).json({
        status: false,
        message: "Artist not found",
      })
      return;
    }
    // Artist response
    res.json({
      status: true,
      message: "Artist successfully fetched",
      data: artist,
    });
  } catch (error) {
    // Catch any other errors and output to console
    console.error(error);
    res.status(500).json({
      status: false,
      message: 'Unknown error fetching artist'
    });
  }
}

// Add a new artist
export async function createArtist(req: Request, res: Response) {
  try {
    const artist = await prisma.artist.create({
      data: req.body,
    });
    // Return status 201 created
    res.status(201).json({
      status: true,
      message: "Artist successfully created",
      data: artist,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: 'Unknown error adding new artist'
    });
  }
}

// Update an artist
export async function updateArtist(req: Request, res: Response) {
  try {
    const { artistid } = req.params;

    const artist = await prisma.artist.findFirst({
      where: {
        id: artistid,
      }
    });

    if (!artist) {
      res.status(404).json({
        status: false,
        message: 'Artist not found',
      });
      return;
    }

    const updatedArtist = await prisma.artist.update({
      where: {
        id: artistid,
      },
      data: req.body,
    });

    res.json({
      status: true,
      message: 'Artist successfully updated',
      data: updatedArtist,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: 'Error updating artist',
    });
  }
}

// Delete an artist
export async function deleteArtist(req: Request, res: Response) {
  const { artistid } = req.params;
  try {
    const artist = await prisma.artist.findFirst({
      where: {
        id: artistid,
      }
    });

    if (!artist) {
      res.status(404).json({
        status: false,
        message: 'Artist not found',
      });
      return;
    }

    await prisma.artist.delete({
      where: {
        id: artistid,
      }
    }),

    res.json({
      status: true,
      message: 'Artist successfully deleted',
    });

  } catch (error) {
    console.error(error);
    res.status(501).json({
      status: false,
      message: 'Error deleting artist',
    });
  }
}