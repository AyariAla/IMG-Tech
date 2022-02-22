import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { SignInCredentialsDto } from './dto/sign-in-credentials.dto';
@Injectable()
export class AuthService {
  constructor(
    private userRepository: UsersRepository,
    private jwtservice: JwtService,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.createUser(authCredentialsDto);
  }

  async signIn(
    signInCredentialsDto: SignInCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { email , password } = signInCredentialsDto;
    const user = await this.userRepository.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const pyload: JwtPayload = { email };
      const accessToken = await this.jwtservice.sign(pyload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('please check your login credentials');
    }
  }
}
