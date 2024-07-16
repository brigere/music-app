import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../dto/create-user.dto';
import { AuthService } from './auth.service';
import { UserSignInDTO } from '../dto/user-singin.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @Post('sing-up')
  singUp(@Body() createUserDto: CreateUserDto) {
    return this.authservice.singUp(createUserDto);
  }

  @Post('sing-in')
  singIn(@Body() userSignInDTO: UserSignInDTO) {
    return this.authservice.singIn(userSignInDTO);
  }
}
