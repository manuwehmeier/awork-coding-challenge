import { Movie } from './movie.model';

export interface MovieGroup {
  year: string;
  movies: Movie[];
}
