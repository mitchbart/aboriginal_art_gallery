import { Request, Response } from "express";
import prisma from "../client";

// Get all exhibitions
export async function getExhibitions(req: Request, res: Response) {
  try {
    // Find all exhibitions and return
    const exhibitions = await prisma.exhibition.findMany({
      include: {
        artefacts: true,
      },
    });
    res.json({
      status: true,
      message: "Exhibitions successfully fetched",
      data: exhibitions,
    });
  } catch (error) {
    // Catch any other errors and output to console
    console.error(error);
    res.status(500).json({
      status: false,
      message: 'Unknown error while fetching exhibitions'
    });
  }
}

// Get a singular exhibition
export async function getExhibition(req: Request, res: Response) {
  try {
    const { exhibitionid } = req.params;
    // Find exhibition based on id
    const exhibition = await prisma.exhibition.findFirst({
      where: {
        id: exhibitionid,
      },
      include: {
        artefacts: true,
      },
    });
    // If no exhibition found, return 404 not found
    if (!exhibition) {
      res.status(404).json({
        status: false,
        message: "Exhibition not found",
      })
      return;
    }
    // Exhibition response
    res.json({
      status: true,
      message: "Exhibition successfully fetched",
      data: exhibition,
    });
  } catch (error) {
    // Catch any other errors and output to console
    console.error(error);
    res.status(500).json({
      status: false,
      message: 'Unknown error fetching exhibition'
    });
  }
}

// Add a new exhibition
export async function createExhibition(req: Request, res: Response) {
  try {
    const exhibition = await prisma.exhibition.create({
      data: req.body,
    });
    // Return status 201 created
    res.status(201).json({
      status: true,
      message: "Exhibition successfully created",
      data: exhibition,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: 'Unknown error adding new exhibition'
    });
  }
}

// Update an exhibition
export async function updateExhibition(req: Request, res: Response) {
  try {
    const { exhibitionid } = req.params;

    const exhibition = await prisma.exhibition.findFirst({
      where: {
        id: exhibitionid,
      }
    });

    if (!exhibition) {
      res.status(404).json({
        status: false,
        message: 'Exhibition not found',
      });
      return;
    }

    const updatedExhibition = await prisma.exhibition.update({
      where: {
        id: exhibitionid,
      },
      data: req.body,
    });

    res.json({
      status: true,
      message: 'Exhibition successfully updated',
      data: updatedExhibition,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: 'Error updating exhibition',
    });
  }
}

// Delete an exhibition
export async function deleteExhibition(req: Request, res: Response) {
  const { exhibitionid } = req.params;
  try {
    const exhibition = await prisma.exhibition.findFirst({
      where: {
        id: exhibitionid,
      }
    });

    if (!exhibition) {
      res.status(404).json({
        status: false,
        message: 'Exhibition not found',
      });
      return;
    }

    await prisma.exhibition.delete({
      where: {
        id: exhibitionid,
      }
    }),

    res.json({
      status: true,
      message: 'Exhibition successfully deleted',
    });

  } catch (error) {
    console.error(error);
    res.status(501).json({
      status: false,
      message: 'Error deleting exhibition',
    });
  }
}