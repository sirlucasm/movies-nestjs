import { Body, CacheKey, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateMovieSchema } from 'src/schemas/movie.schema';
import { MovieService } from 'src/services/movie/movie.service';

@ApiTags('movies')
@UseGuards(AuthGuard('jwt'))
@Controller('movies')
export class MovieController {
  constructor (private movieService: MovieService) {}

  @CacheKey('movies')
  @ApiOkResponse({ description: 'Returns a movie catalog array' })
  @Get()
  async index() {
    return await this.movieService.findAll();
  }

  @Post()
  async create(@Body() body: CreateMovieSchema) {
    return await this.movieService.create(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.movieService.findOneOrFail({ where: { id } });
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: CreateMovieSchema
  ) {
    return await this.movieService.update(id, body);
  }

  @Delete()
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.movieService.delete(id);
  }
}
