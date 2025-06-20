import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserRepository } from '../interfaces/user.repository.interface';
import { User } from '../entities/user.entity';

@Injectable()
export class MongoUserRepository implements IUserRepository {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}

  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async create(user: Partial<User>): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async update(id: string, user: Partial<User>): Promise<User | null> {
    return this.userModel
      .findByIdAndUpdate(id, user, { new: true })
      .exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.userModel.deleteOne({ _id: id }).exec();
    return result.deletedCount > 0;
  }
} 