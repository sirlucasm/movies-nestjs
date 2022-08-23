import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcryptjs';
import { User } from 'src/models/user/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string) {
    let user: User | undefined;

    try {
      user = await this.userService.findOneOrFail({ where: { email }});
    } catch(_) {
      return null;
    }

    const validPassword = compareSync(password, user.password);
    if (!validPassword) return null;

    return user;
  }

  async authenticate(user: User) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user
    };
  }
}
