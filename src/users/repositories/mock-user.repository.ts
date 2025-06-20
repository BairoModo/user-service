import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../interfaces/user.repository.interface';
import { User } from '../entities/user.entity';

@Injectable()
export class MockUserRepository implements IUserRepository {
  private users: User[] = [];

  async findById(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }

  async findAll(): Promise<User[]> {
    return [...this.users];
  }

  async create(user: Partial<User>): Promise<User> {
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as User;
    
    this.users.push(newUser);
    return newUser;
  }

  async update(id: string, userData: Partial<User>): Promise<User | null> {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return null;

    this.users[index] = {
      ...this.users[index],
      ...userData,
      updatedAt: new Date(),
    };

    return this.users[index];
  }

  async delete(id: string): Promise<boolean> {
    const initialLength = this.users.length;
    this.users = this.users.filter(user => user.id !== id);
    return this.users.length !== initialLength;
  }
} 