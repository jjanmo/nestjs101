import { Injectable, NotFoundException } from '@nestjs/common';
import { throws } from 'assert';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  //1차 : fake DB
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === parseInt(id, 10));
    if (!movie) {
      throw new NotFoundException(`Movie(id : ${id}) is not found.`);
    }
    return movie;
  }

  create(movieData) {
    return this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  delete(id: string) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== parseInt(id, 10));
  }

  update(id: string, updateData): boolean {
    this.getOne(id);
    this.movies = this.movies.map((movie) => {
      if (movie.id === parseInt(id, 10)) {
        return {
          ...movie,
          ...updateData,
        };
      } else return movie;
    });
    return true;
  }
}
