import {
  Body,
  CacheKey,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOkResponse } from '@nestjs/swagger';
import { CreateUserSchema, UpdateUserSchema } from 'src/schemas/user.schema';
import { UserService } from 'src/services/user/user.service';

@Controller('users')
export class UserController {
  constructor (private userService: UserService) {}

  @CacheKey('users')
  @ApiOkResponse({ description: 'Returns a users array' })
  @Get()
  async index() {
    return await this.userService.findAll();
  }

  @Post()
  async create(@Body() body: CreateUserSchema) {
    return await this.userService.create(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.userService.findOneOrFail({ where: { id } });
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateUserSchema
  ) {
    return await this.userService.update(id, body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete()
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.userService.delete(id);
  }
}
