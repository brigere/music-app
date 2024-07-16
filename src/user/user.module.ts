import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { HashingService } from './auth/hashing/hashing.service';
import { BcryptService } from './auth/bcrypt/bcrypt.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController, AuthController],
  providers: [
    UserService,
    AuthService,
    {
      provide: HashingService,
      useClass: BcryptService,
    },
  ],
})
export class UserModule {}
