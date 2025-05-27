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

  // Get user with password
  static async getUserWithPassword(id: string) {
    return await prisma.user.findUniqueOrThrow({
      where: { id },
      omit: { hashedPassword: false }
    })
  }

  // Create user
  static async createUser(userData: any) {
    return await prisma.user.create({
      data: userData
    });
  }

  // Update user
  static async updateUser(id: string, updateData: any) {
    return await prisma.user.update({
      where: { id },
      data: updateData
    });
  }

  // Update email
  static async updateEmail(id: string, newEmail: string) {
    return await prisma.user.update({
      where: { id },
      data: { email: newEmail }
    });
  }

  // Update password
  static async updatePassword(id: string, newPassword: string) {
    return await prisma.user.update({
      where: { id },
      data: { hashedPassword: newPassword }
    })
  }

  // Delete user
  static async deleteUser(id: string) {
    return await prisma.user.delete({
      where: { id }
    });
  }

  // Verify password with bcrypt
  static async verifyPassword(plainPassword: string, hashedPassword: string) {
    return await bcrypt.compare(plainPassword, hashedPassword)
  }
}