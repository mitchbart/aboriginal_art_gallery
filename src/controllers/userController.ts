import { Request, Response } from 'express';
import prisma from '../client';
import { Prisma } from '../../generated/prisma';
// Auth and encryption
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// Get all users
export async function getUsers(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany();

    res.json({
      status: true,
      message: 'Users successfully fetched',
      data: users,
    });

  } catch (e) {
    console.error(e);
    res.status(500).json({
      status: false,
      message: 'Internal server error'
    });
  }
}

// Get a singular user
export async function getUser(req: Request, res: Response) {
  try {
    const { userid } = req.params;

    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id: userid,
      }
    });

    res.json({
      status: true,
      message: 'User successfully fetched',
      data: user,
    });

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('Error finding user:', e)
      if (e.code === 'P2025') {
        res.status(404).json({
          status: false,
          message: 'User not found',
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

// Create new user
export async function registerUser(req: Request, res: Response) {
  try {
    const user = await prisma.user.create({
      data: req.body
    });

    res.status(201).json({
        status: true,
        message: 'User successfully registered',
        data: user,
      });

  } catch (e) {
    console.error(e);
    res.status(500).json({
      status: false,
      message: 'Internal server error'
    });
  }
}

// User login endpoint
export async function loginUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    // Find user with email
    const user = await prisma.user.findUniqueOrThrow({
      where: { email },
      omit: { hashedPassword: false } // Omitted globally by client
    });

    // Check password matches
    const match = await bcrypt.compare(password, user.hashedPassword);

    // Return 401 unauthorized if password incorrect
    if (!match) {
      res.status(401).json({
        status: false,
        message: 'Invalid password'
      });
      return;
    }

    res.json({
      status: true,
      message: 'User login successful',
      data: user
    });

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('Error finding user:', e)
      if (e.code === 'P2025') {
        res.status(404).json({
          status: false,
          message: 'User not found',
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
