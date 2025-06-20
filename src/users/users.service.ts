import { Injectable, Inject } from '@nestjs/common';
import { IUserRepository } from './interfaces/user.repository.interface';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async findById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async create(userData: Partial<User>): Promise<User> {
    return this.userRepository.create(userData);
  }

  async update(id: string, userData: Partial<User>): Promise<User | null> {
    return this.userRepository.update(id, userData);
  }

  async delete(id: string): Promise<boolean> {
    return this.userRepository.delete(id);
  }
}
