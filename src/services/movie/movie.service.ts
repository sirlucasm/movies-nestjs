import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from 'src/models/movie/movie.entity';
import { CreateMovieSchema } from 'src/schemas/movie.schema';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor (
    @InjectRepository(Movie) private repository: Repository<Movie>
  ) {}

  async findAll() {
    return await this.repository.find();
  }

  async create(data: CreateMovieSchema) {
    const movie = this.repository.create(data);
    return await this.repository.save(movie);
  }

  async findOneOrFail(options?: FindOneOptions<Movie>) {
    try {
      return await this.repository.findOneOrFail(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: string, data: CreateMovieSchema) {
    const movie = await this.findOneOrFail({ where: { id } });
    this.repository.merge(movie, data);
    return await this.repository.save(movie);
  }

  async delete(id: string) {
    await this.findOneOrFail({ where: { id } });
    return await this.repository.softDelete(id);
  }
}
