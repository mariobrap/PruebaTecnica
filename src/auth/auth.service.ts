import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto } from './dto/login.dto';
import { generateToken } from 'src/common/utils/Jwt.util';

@Injectable()
export class AuthService {

  constructor(){}

  signIn(loginDto: LoginDto){
    const token = generateToken(loginDto);
    return {token}
  }
}
