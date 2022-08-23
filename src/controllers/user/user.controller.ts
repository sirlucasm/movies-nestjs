import { CacheKey, Controller, Get } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';

@Controller('users')
export class UserController {
  constructor (private userService: UserService) {}

  @CacheKey('user')
  @Get()
  async allUsers() {
    return await this.userService.find();
  }
}
