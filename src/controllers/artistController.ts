import { Request, Response } from "express";
import prisma from "../client";

// Get all artists
export async function getArtists(req: Request, res: Response) {
  const artists = await prisma.artist.findMany();

  res.json({
    status: true,
    message: "Artists successfully fetched",
    data: artists,
  });
}

// Get a singular artist
export async function getArtist(req: Request, res: Response) {
  const { artistid } = req.params;
  const artist = await prisma.artist.findFirst({
    where: {
      id: artistid,
    },
  });

  res.json({
    status: true,
    message: "Artist successfully fetched",
    data: artist,
  });
}

// Add a new artist
export async function createArtist(req: Request, res: Response) {
  try {
    const artist = await prisma.artist.create({
      data: req.body,
    });

    res.status(201).json({
      status: true,
      message: "Artist successfully created",
      data: artist,
    });

  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'server error'
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

    // Why doesnt this work? Look into it once everything is up and running
    // const artist = await getArtist(req, res);

    if (!artist) {
      res.status(401).json({
        status: false,
        message: 'Artist not found',
      });
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
    console.log(error);
    res.status(500).json({
      status: false,
      message: 'server error',
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
      res.status(401).json({
        status: false,
        message: 'Artist not found',
      });
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

  } catch {
    res.status(501).json({
      status: false,
      message: 'server error',
    });
  }
}