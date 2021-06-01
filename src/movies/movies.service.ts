import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  //실제 DB연결은 하지 않은 fake DB
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

  update(id: number, updateData: UpdateMovieDto): boolean {
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
