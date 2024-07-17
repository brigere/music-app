import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { HashingService } from './hashing/hashing.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserSignInDTO } from '../dto/user-singin.dto';
import jwtConfig from 'src/config/jwt.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly hashingService: HashingService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>
  ) {}

  async singUp(createUserDto: CreateUserDto) {
    const defaultRole = 'USER';
    const password = await this.hashingService.hash(createUserDto.password);

    try {
      const user: User = await this.userRepository.save({
        firstName: createUserDto.fisrtName,
        lastName: createUserDto.lastName,
        email: createUserDto.email,
        password: password,
        role: defaultRole,
      });
      return {
        id: user.id,
        firtName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
    } catch (error) {
      return error;
    }
  }

  async singIn(userSignInDTO: UserSignInDTO) {
    const user = await this.userRepository.findOne({
      where: {
        email: userSignInDTO.email,
      },
      select: {
        password: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('User does not exist');
    }

    const result = await this.hashingService.compare(
      userSignInDTO.password,
      user.password,
    );

    if (!result) {
      throw new UnauthorizedException(`User or email is incorrect`);
    }

    return true;
  }
}
