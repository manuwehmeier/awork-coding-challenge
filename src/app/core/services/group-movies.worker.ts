/// <reference lib="webworker" />
import { MovieGroup } from '../models/movie-group.model';
import { Movie } from '../models/movie.model';

addEventListener('message', ({ data }) => {
  const movies = data as Movie[];

  const movieGroups = movies
    .reduce((groups, movie) => {
      const index = groups.findIndex(
        (movieGroup) => movieGroup.year === movie.year
      );
      const newIndex = index > -1 ? index : groups.length;
      const yearGroup: MovieGroup =
        index > -1 ? groups[index] : { year: movie.year, movies: [] };
      groups[newIndex] = {
        ...yearGroup,
        movies: [...yearGroup.movies, movie],
      };
      return groups;
    }, [] as MovieGroup[])
    .sort((a, b) => parseInt(b.year) - parseInt(a.year));
  movieGroups.forEach((movieGroup) =>
    movieGroup.movies.sort((a, b) => a.title.localeCompare(b.title))
  );
  const response = movieGroups;

  postMessage(response);
});
