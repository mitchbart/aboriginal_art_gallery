import { Request, Response } from 'express';
import { Prisma } from '../../generated/prisma';
import { ExhibitionService } from '../services/exhibitionService';

// Get all exhibitions
export async function getExhibitions(req: Request, res: Response) {
  try {
    const exhibitions = await ExhibitionService.getAllExhibitions();

    res.json({
      status: true,
      message: 'Exhibitions successfully fetched',
      data: exhibitions,
    });

  } catch (e) {
    console.error(e);
    res.status(500).json({
      status: false,
      message: 'Internal server error'
    });
  }
}

// Get currently active exhibitions
export async function getActiveExhibitions(req: Request, res: Response) {
  try {
    const now = new Date(); // Get the current date
    const activeExhibitions = await ExhibitionService.getActiveExhibitions(now);
  
    res.json({
      status: true,
      message: 'Active exhibitions successfully fetched',
      data: activeExhibitions,
    });

  } catch (e) {
    console.error(e);
    res.status(500).json({
      status: false,
      message: 'Internal server error'
    });
  }
}

// Get a singular exhibition
export async function getExhibition(req: Request, res: Response) {
  try {
    const { exhibitionid } = req.params;
    const exhibition = await ExhibitionService.getExhibition(exhibitionid);

    res.json({
      status: true,
      message: 'Exhibition successfully fetched',
      data: exhibition,
    });

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('Error finding artist:', e)
      if (e.code === 'P2025') {
        res.status(404).json({
          status: false,
          message: 'Exhibition not found',
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

// Add a new exhibition
export async function createExhibition(req: Request, res: Response) {
  try {
    const exhibition = await ExhibitionService.createExhibition(req.body);

    res.status(201).json({
      status: true,
      message: 'Exhibition successfully created',
      data: exhibition,
    });

  } catch (e) {
    console.error(e);
    res.status(500).json({
      status: false,
      message: 'Internal server error'
    });
  }
}

// Update an exhibition
export async function updateExhibition(req: Request, res: Response) {
  try {
    const { exhibitionid } = req.params;
    const updatedExhibition = await ExhibitionService.updateExhibition(exhibitionid, req.body);

    res.json({
      status: true,
      message: 'Exhibition successfully updated',
      data: updatedExhibition,
    });

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('Error updating exhibition:', e)
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

// Delete an exhibition
export async function deleteExhibition(req: Request, res: Response) {
  try {
    const { exhibitionid } = req.params;
    await ExhibitionService.deleteExhibition(exhibitionid);

    res.json({
      status: true,
      message: 'Exhibition successfully deleted',
    });

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('Error deleting exhibition:', e)
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