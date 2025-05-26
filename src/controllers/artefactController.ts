import { Request, Response } from 'express';
import prisma from '../client';
import { Prisma } from '../../generated/prisma';

// Get all artefacts
export async function getArtefacts(req: Request, res: Response) {
  try {
    const artefacts = await prisma.artefact.findMany({
      include: {
        artist: true,
      },
    });

    res.json({
      status: true,
      message: 'Artefacts successfully fetched',
      data: artefacts,
    });

  } catch (e) {
    console.error(e);
    res.status(500).json({
      status: false,
      message: 'Internal server error'
    });
  }
}

// Get a singular artefact
export async function getArtefact(req: Request, res: Response) {
  try {
    const { artefactid } = req.params;

    const artefact = await prisma.artefact.findUniqueOrThrow({
      where: {
        id: artefactid,
      },
      include: {
        artist: true,
      }
    });

    res.json({
      status: true,
      message: 'Artefact successfully fetched',
      data: artefact,
    });

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('Error finding artefact:', e)
      if (e.code === 'P2025') {
        res.status(404).json({
          status: false,
          message: 'Artefact not found',
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

// Get an artefacts exhibitions
export async function getArtefactExhibitions(req: Request, res: Response) {
  try {
    const { artefactid } = req.params;

    // Check the artefact exists
    const artefact = await prisma.artefact.findUniqueOrThrow({
      where: {
        id: artefactid,
      }
    });

    // Get the exhibitions that include the artefact
    const exhibitions = await prisma.exhibition.findMany({
      where: {
        artefactIds: {
          has: artefactid,
        }
      }
    });

    // Response
    res.json({
      status: true,
      message: 'Exhibitions for this artefact successfully fetched',
      data: exhibitions,
    });    

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('Error finding artefact:', e)
      if (e.code === 'P2025') {
        res.status(404).json({
          status: false,
          message: 'Artefact not found',
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

// Add a new artefact
export async function createArtefact(req: Request, res: Response) {
  try {
    const artefact = await prisma.artefact.create({
      data: req.body,
    });
    
    res.status(201).json({
      status: true,
      message: 'Artefact successfully created',
      data: artefact,
    });

  } catch (e) {
    console.error(e);
    res.status(500).json({
      status: false,
      message: 'Internal server error'
    });
  }
}

// Update an artefact
export async function updateArtefact(req: Request, res: Response) {
  try {
    const { artefactid } = req.params;

    const updatedArtefact = await prisma.artefact.update({
      where: {
        id: artefactid,
      },
      data: req.body,
    });

    res.json({
      status: true,
      message: 'Artefact successfully updated',
      data: updatedArtefact,
    });

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('Error updating artefact:', e)
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

// Delete an artefact
export async function deleteArtefact(req: Request, res: Response) {
  try {
    const { artefactid } = req.params;

    await prisma.artefact.delete({
      where: {
        id: artefactid,
      }
    });

    res.json({
      status: true,
      message: 'Artefact successfully deleted',
    });

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('Error deleting artefact:', e)
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