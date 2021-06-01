import { MoviesService } from './movies.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  describe('getAll', () => {
    it('should return array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    it('should be return movie', () => {
      service.create({
        title: 'Hello world',
        year: 2021,
        genres: ['action', 'drama'],
      });

      const movie = service.getOne(1);
      expect(movie).toBeDefined();
    });

    it('should be check movie property ', () => {
      service.create({
        title: 'Hello world',
        year: 2021,
        genres: ['action', 'drama'],
      });

      const movie = service.getOne(1);
      expect(movie.genres).toBeInstanceOf(Array);
      expect(typeof movie.title).toBe('string');
      expect(typeof movie.year).toBe('number');
    });
  });
});
