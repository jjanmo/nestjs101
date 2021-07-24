import { MoviesService } from './movies.service';
import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';

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

    it('should be throw 404 error', () => {
      try {
        service.getOne(888);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('delete', () => {
    it('delete a movie', () => {
      service.create({
        title: 'Hello world',
        year: 2021,
        genres: ['action', 'drama'],
      });

      const beforeDeleted = service.getAll().length;
      service.delete(1);
      const afterDeleted = service.getAll().length;
      expect(beforeDeleted).toBeGreaterThan(afterDeleted);
    });

    it('could not delete a movie and throw error', () => {
      const delelteMovie = () => service.delete(100);

      expect(delelteMovie).toThrow();
    });
  });

  describe('create', () => {
    it('create one movie', () => {
      const movie = {
        title: 'Hello world',
        year: 2021,
        genres: ['action', 'drama'],
      };
      service.create(movie);

      const movies = service.getAll();
      expect(movies.length).toBe(1);
    });

    it('movies contain movie', () => {
      const movie = {
        id: 1,
        title: 'Hello world',
        year: 2021,
        genres: ['action', 'drama'],
      };
      service.create(movie);

      expect(service.getAll()).toContainEqual(movie);
    });
  });

  describe('update', () => {
    const updatedDate = {
      title: 'Update Testing',
      year: 2020,
      genres: ['thrill'],
    };

    it('should update a movie', () => {
      service.create({
        title: 'Hello world',
        year: 2021,
        genres: ['action', 'drama'],
      });

      service.update(1, updatedDate);
      const afterUpdated = service.getOne(1);
      expect(afterUpdated).toEqual({ ...updatedDate, id: 1 });
    });

    it('could not update a movie and throw error', () => {
      service.create({
        title: 'Hello world',
        year: 2021,
        genres: ['action', 'drama'],
      });

      const updateMovie = () => service.update(10, updatedDate);

      expect(updateMovie).toThrow();
    });
  });
});
