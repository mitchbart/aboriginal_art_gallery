import prisma from '../client';
import bcrypt from 'bcrypt';

export class UserService {
  
  // Get all users
  static async getAllUsers() {
    return await prisma.user.findMany();
  }

  // Get user by id
  static async getUserById(id: string) {
    return await prisma.user.findUniqueOrThrow({
      where: { id }
    });
  }

  // Get user by email
  static async getUserByEmail(email: string) {
    return await prisma.user.findUniqueOrThrow({
      where: { email },
      omit: { hashedPassword: false } // Undo global omission from client.ts
    });
  }

  // Create user
  static async createUser(userData: any) {
    return await prisma.user.create({
      data: userData
    });
  }



}