import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { Prisma } from '../../generated/prisma';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Get all users
export async function getUsers(req: Request, res: Response) {
  try {
    const users = await UserService.getAllUsers();

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

    const user = await UserService.getUserById(userid);

    res.json({
      status: true,
      message: 'User successfully fetched',
      data: user,
    });

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('Prisma error:', e)
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
    const user = await UserService.createUser(req.body);

    res.status(201).json({
      status: true,
      message: 'User successfully registered',
      data: user,
    });

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('Prisma error:', e)
      // Unique constraint failure, return 409 conflict
      // https://www.prisma.io/docs/orm/reference/error-reference
      if (e.code === 'P2002') {
        res.status(409).json({
          status: false,
          message: 'User name and email must be unique',
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

// User login endpoint
export async function loginUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const user = await UserService.getUserByEmail(email);

    // Validate password provided in request body
    const match = await UserService.verifyPassword(password, user.hashedPassword)

    // Return 401 unauthorized if password incorrect
    if (!match) {
      res.status(401).json({
        status: false,
        message: 'Invalid password'
      });
      return;
    }

    // JWT auth - started adding but havent finished, come back this if time

    // Generate JWT token
    // const jwtSecret = process.env.JWT_SECRET;
    // if (!jwtSecret) {
    //   throw new Error('JWT_SECRET environment variable must be configured');
    // }

    // const payload = {
    //   userId: user.id,
    //   email: user.email,
    //   role: user.role
    // }

    // const token = jwt.sign(payload, jwtSecret, {
    //   expiresIn: '24h'
    // });

    // Return successful login
    res.json({
      status: true,
      message: 'Login successful',
      data: {
        //token,
        // Choose user fields so hashed password isnt returned
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role
        }
      }
    });

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('Prisma error:', e)
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

// Update user details
export async function updateUserDetails(req: Request, res: Response) {
  try {
    const { userid } = req.params;
    const updatedUser = await UserService.updateUser(userid, req.body);

    // Response
    res.json({
      status: true,
      message: 'User successfully updated',
      data: updatedUser,
    });

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('Prisma error:', e)
      // Return 404 if user not found
      if (e.code === 'P2025') {
        res.status(404).json({
          status: false,
          message: e.code,
        });
        return;
      }
      // Unique constraint failure, return 409 conflict
      if (e.code === 'P2002') {
        res.status(409).json({
          status: false,
          message: 'User name must be unique',
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

// Update user email
export async function updateUserEmail(req: Request, res: Response) {
  try {
    // New email and password provided in body
    const { newEmail, password } = req.body;

    // User id determined from params
    const { userid } = req.params;

    // Get user and hashed password
    const user = await UserService.getUserWithPassword(userid);

    // Validate password provided in request body
    const match = await UserService.verifyPassword(password, user.hashedPassword)

    // Return 401 unauthorized if password incorrect
    if (!match) {
      res.status(401).json({
        status: false,
        message: 'Invalid password'
      });
      return;
    }

    // Update email
    const updatedUser = await UserService.updateEmail(userid, newEmail);

    res.json({
      status: true,
      message: 'User email update successful',
      data: updatedUser
    });

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('Prisma error:', e)
      if (e.code === 'P2025') {
        res.status(404).json({
          status: false,
          message: 'User not found',
        });
        return;
      }
      // Catch if email not unique
      // Unique constraint failure, return 409 conflict
      if (e.code === 'P2002') {
        res.status(409).json({
          status: false,
          message: 'Account with this email already exists',
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

// Update user password
export async function updateUserPassword(req: Request, res: Response) {
  try {
    // New password and password provided in body
    const { newPassword, password } = req.body;

    // User id determined from params
    const { userid } = req.params;

    // Get user and hashed password
    const user = await UserService.getUserWithPassword(userid);

    // Validate password provided in request body
    const match = await UserService.verifyPassword(password, user.hashedPassword)

    // Return 401 unauthorized if password incorrect
    if (!match) {
      res.status(401).json({
        status: false,
        message: 'Invalid password'
      });
      return;
    }

    // Update email
    const updatedUser = await UserService.updatePassword(userid, newPassword);

    res.json({
      status: true,
      message: 'User password update successful',
      data: updatedUser
    });

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('Prisma error:', e)
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

// Delete a user
export async function deleteUser(req: Request, res: Response) {
  try {
    const { userid } = req.params;
    await UserService.deleteUser(userid);

    res.json({
      status: true,
      message: 'User successfully deleted',
    });

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('Prisma error:', e)
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