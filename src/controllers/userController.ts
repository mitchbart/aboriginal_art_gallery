import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import prisma from '../client';
import { Prisma } from '../../generated/prisma';
// Auth and encryption
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
    const user = await UserService.createUser(req.body);

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
    const user = await UserService.getUserByEmail(email);

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

    // Return 204 no content
    res.status(204).json();

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

// Update user details
// export async function updateUserDetails(req: Request, res: Response) {
//   try {
//     const { userid } = req.params;

//     // Update the user
//     const updatedUser = await prisma.user.update({
//       where: {
//         id: userid,
//       },
//       data: req.body,
//     });

//     // Response
//     res.json({
//       status: true,
//       message: 'User successfully updated',
//       data: updatedUser,
//     });

//   } catch (e) {
//     if (e instanceof Prisma.PrismaClientKnownRequestError) {
//       console.error('Error updating user:', e)
//       // Return 404 if user not found
//       if (e.code === 'P2025') {
//         res.status(404).json({
//           status: false,
//           message: e.code,
//         });
//         return;
//       }
//     }
    
//     res.status(500).json({
//       status: false,
//       message: 'Internal server error',
//     });
//   }
// }

// Update user email
// export async function updateUserEmail(req: Request, res: Response) {
//   try {
//     // New email and password provided in body
//     const { newEmail, password } = req.body;
//     // User id determined from params
//     const { userid } = req.params;
//     // Place new email into its own varaiable
//     const updateData = { email: newEmail }

//     // Check password is valid
//     const user = await prisma.user.findUniqueOrThrow({
//       where: {
//         id: userid,
//       },
//       omit: { hashedPassword: false } // Omitted globally by client
//     });

//     // Check password matches
//     const match = await bcrypt.compare(password, user.hashedPassword);

//     // Return 401 unauthorized if password incorrect
//     if (!match) {
//       res.status(401).json({
//         status: false,
//         message: 'Invalid password'
//       });
//       return;
//     }

//     // Update the user email
//     const updatedUser = await prisma.user.update({
//       where: {
//         id: userid,
//       },
//       data: updateData,
//     });

//     res.json({
//       status: true,
//       message: 'User email update successful',
//       data: updatedUser
//     });

//   } catch (e) {
//     if (e instanceof Prisma.PrismaClientKnownRequestError) {
//       console.error('Error finding user:', e)
//       if (e.code === 'P2025') {
//         res.status(404).json({
//           status: false,
//           message: 'User not found',
//         });
//         return;
//       }
//       // Catch if email not unique
//       // https://www.prisma.io/docs/orm/reference/error-reference
//       if (e.code === 'P2002') {
//         res.status(409).json({
//           status: false,
//           message: 'Account with this email already exists',
//         });
//         return;
//       }
//     }
    
//     res.status(500).json({
//       status: false,
//       message: 'Internal server error',
//     });
//   }
// }


// Update user password

// Delete user