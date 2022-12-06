import { Movie } from 'src/app/core/models/movie.model';

export interface MovieGroup {
  year: string;
  movies: Movie[];
}
