import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Movie } from 'src/models/movie/movie.entity';
import { MovieService } from 'src/services/movie/movie.service';
import { MovieController } from './movie.controller';

describe('MovieController', () => {
  let movieController: MovieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieController],
      providers: [
        MovieService,
        {
          provide: getRepositoryToken(Movie),
          useFactory: () => ({
            find: jest.fn(() => []),
            findOneOrFail: jest.fn(() => ({}))
          })
        }
      ]
    }).compile();

    movieController = module.get<MovieController>(MovieController);
  });

  it('should be defined', () => {
    expect(movieController).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of User', async () => {
      const movies = await movieController.index();
      expect(movies).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('should return an object of User by id', async () => {
      const movies = await movieController.show('4e7e2977-e06d-4256-aa3b-74ec760d3aa8');
      expect(movies).toEqual({});
    });
  });
});
