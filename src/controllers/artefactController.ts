import { Request, Response } from 'express';
import { Prisma } from '../../generated/prisma';
import { ArtefactService } from '../services/artefactService';

// Get all artefacts
export async function getArtefacts(req: Request, res: Response) {
  try {
    const artefacts = await ArtefactService.getAllArtefacts();

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
    const artefact = await ArtefactService.getArtefact(artefactid);

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

// Get the exhibitions an artefact has appeared in
export async function getArtefactExhibitions(req: Request, res: Response) {
  try {
    const { artefactid } = req.params;

    // Check the artefact exists - throws error if not found
    await ArtefactService.getArtefact(artefactid);

    // Get the exhibitions that include the artefact
    const exhibitions = await ArtefactService.getArtefactExhibitions(artefactid);

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
    const artefact = await ArtefactService.createArtefact(req.body);
    
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
    const updatedArtefact = await ArtefactService.updateArtefact(artefactid, req.body);

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
    await ArtefactService.deleteArtefact(artefactid);

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