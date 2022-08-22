import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get()
  status() {
    return 'Server is running';
  }
}
