
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
// import { Role } from 'apps/firstsvc/src/DTO/role.enum';
import { User } from 'apps/firstsvc/src/Entities/user.entity';
import { Repository } from 'typeorm';
import { SignInDto } from './Dto/signIn.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly  userRepository:Repository<User>,
    private jwtService: JwtService
  ) {}

  async signIn(
    credentials:SignInDto
  ): Promise<{ access_token: string }> {
    const {email , password} = credentials
    const user = await this.userRepository.findOne({where:{email:email}});
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { name: user.name, roles: user.role};
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
