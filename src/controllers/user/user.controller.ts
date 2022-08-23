import {
  Body,
  CacheKey,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put
} from '@nestjs/common';
import { CreateUserSchema, UpdateUserSchema } from 'src/schemas/user.schema';
import { UserService } from 'src/services/user/user.service';

@Controller('users')
export class UserController {
  constructor (private userService: UserService) {}

  @CacheKey('users')
  @Get()
  async index() {
    return await this.userService.findAll();
  }

  @Post()
  async create(@Body() body: CreateUserSchema) {
    return await this.userService.create(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.userService.findOneOrFail({ where: { id } });
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateUserSchema
  ) {
    return await this.userService.update(id, body);
  }

  @Delete()
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.userService.delete(id);
  }
}
