import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { MongoUserRepository } from './repositories/mongodb-user.repository';
import { MockUserRepository } from './repositories/mock-user.repository';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'IUserRepository',
      useClass: process.env.NODE_ENV === 'test' 
        ? MockUserRepository 
        : MongoUserRepository,
    }
  ],
  exports: ['IUserRepository', UsersService],
})
export class UsersModule {}
