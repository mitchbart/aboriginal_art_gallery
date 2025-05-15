import { Request, Response } from "express";
import prisma from "../client";

// Get all artefacts
export async function getArtefacts(req: Request, res: Response) {
  try {
    // Find all artefacts and return
    const artefacts = await prisma.artefact.findMany({
      include: {
        artist: true,
        exhibitions: true,
      },
    });
    res.json({
      status: true,
      message: "Artefacts successfully fetched",
      data: artefacts,
    });
  } catch (error) {
    // Catch any other errors and output to console
    console.error(error);
    res.status(500).json({
      status: false,
      message: 'Unknown error while fetching artefacts'
    });
  }
}

// Get a singular artefact
export async function getArtefact(req: Request, res: Response) {
  try {
    const { artefactid } = req.params;
    // Find artefact based on id
    const artefact = await prisma.artefact.findFirst({
      where: {
        id: artefactid,
      },
      include: {
        artist: true,
        exhibitions: true,
      }
    });
    // If no artefact found, return 404 not found
    if (!artefact) {
      res.status(404).json({
        status: false,
        message: "Artefact not found",
      })
      return;
    }
    // Artefact response
    res.json({
      status: true,
      message: "Artefact successfully fetched",
      data: artefact,
    });
  } catch (error) {
    // Catch any other errors and output to console
    console.error(error);
    res.status(500).json({
      status: false,
      message: 'Unknown error fetching artefact'
    });
  }
}

// Add a new artefact
export async function createArtefact(req: Request, res: Response) {
  try {
    const artefact = await prisma.artefact.create({
      data: req.body,
    });
    // Return status 201 created
    res.status(201).json({
      status: true,
      message: "Artefact successfully created",
      data: artefact,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: 'Unknown error adding new artefact'
    });
  }
}

// Update an artefact
export async function updateArtefact(req: Request, res: Response) {
  try {
    const { artefactid } = req.params;

    const artefact = await prisma.artefact.findFirst({
      where: {
        id: artefactid,
      }
    });

    if (!artefact) {
      res.status(404).json({
        status: false,
        message: 'Artefact not found',
      });
      return;
    }

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

  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: 'Error updating artefact',
    });
  }
}

// Delete an artefact
export async function deleteArtefact(req: Request, res: Response) {
  const { artefactid } = req.params;
  try {
    const artefact = await prisma.artefact.findFirst({
      where: {
        id: artefactid,
      }
    });

    if (!artefact) {
      res.status(404).json({
        status: false,
        message: 'Artefact not found',
      });
      return;
    }

    await prisma.artefact.delete({
      where: {
        id: artefactid,
      }
    }),

    res.json({
      status: true,
      message: 'Artefact successfully deleted',
    });

  } catch (error) {
    console.error(error);
    res.status(501).json({
      status: false,
      message: 'Error deleting artefact',
    });
  }
}