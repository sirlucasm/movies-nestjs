import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  async allUsers() {
    console.log('oioi');
    return { data: 'ola' };
  }
}
