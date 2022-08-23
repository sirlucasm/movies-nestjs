import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieController } from 'src/controllers/movie/movie.controller';
import { Movie } from 'src/models/movie/movie.entity';
import { MovieService } from 'src/services/movie/movie.service';

@Module({
  imports: [TypeOrmModule.forFeature([ Movie ])],
  controllers: [MovieController],
  providers: [MovieService]
})
export class MovieModule {}
