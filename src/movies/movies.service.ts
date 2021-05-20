import { Injectable, NotFoundException } from '@nestjs/common';
import { throws } from 'assert';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
  //1차 : fake DB
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id, 10);
    if (!movie) {
      throw new NotFoundException(`Movie(id : ${id}) is not found.`);
    }
    return movie;
  }

  create(movieData: CreateMovieDto) {
    return this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  delete(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  update(id: number, updateData): boolean {
    this.getOne(id);
    this.movies = this.movies.map((movie) => {
      if (movie.id === id) {
        return {
          ...movie,
          ...updateData,
        };
      } else return movie;
    });
    return true;
  }
}
