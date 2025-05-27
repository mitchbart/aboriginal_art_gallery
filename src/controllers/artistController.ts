// Note - first controller made so comments and links more frequent in this file
import { Request, Response } from 'express';
import { ArtStyleType, Prisma } from '../../generated/prisma'; // For error types
import { ArtistService } from '../services/artistService';

// Get all artists
export async function getArtists(req: Request, res: Response) {
  try {
    // Get all artists, include artefacts
    const artists = await ArtistService.getAllArtists();

    // Response contains all artists and their artefacts
    res.json({
      status: true,
      message: 'Artists successfully fetched',
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

// Get artists who create a certain artstyle
export async function  getArtistsByArtstyle(req: Request, res: Response) {
  try {
    // Convert style to uppercase to match enum
    const { style } = req.params;
    const normalisedStyle = style.toUpperCase();

    // Check style is valid ArtStyleType enum, return 400 if invalid
    const validStyles = Object.values(ArtStyleType)
    if (!validStyles.includes(normalisedStyle as ArtStyleType)) {
      res.status(400).json({
        status: false,
        message: `Invalid art style: '${style}'. Valid styles are: ${validStyles.join(', ')}.`,
      })
    }

    // Get the artists that create the artstyle
    const artists = await ArtistService.getArtistByArtstyle(normalisedStyle);

    res.json({
      status: true,
      message: 'Artists using this style succesfully fetched',
      data: artists,
    });
        
  } catch (e) {
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
    const { artistid } = req.params;
    
    // Find artist by id - include artefacts
    const artist = await ArtistService.getArtist(artistid);

    // Response
    res.json({
      status: true,
      message: 'Artist successfully fetched',
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
    const artist = await ArtistService.createArtist(req.body);

    // Return status 201 created
    res.status(201).json({
      status: true,
      message: 'Artist successfully created',
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
    const { artistid } = req.params;

    // Update the artist
    const updatedArtist = await ArtistService.updateArtist(artistid, req.body);

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
    const { artistid } = req.params;

    // Delete requested artist
    await ArtistService.deleteArtist(artistid);

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