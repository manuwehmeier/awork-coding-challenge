import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { ApiMovie } from './models/api-movie.model';
import { MovieSearchResult } from './models/movie-search-result.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesRemoteService {
  private static defaultUrl = 'https://www.omdbapi.com/';
  private static apiKey = '8ea39b15';

  constructor(private http: HttpClient) {}

  private defaultHttpParams(): HttpParams {
    return new HttpParams().set('apiKey', MoviesRemoteService.apiKey);
  }

  searchMovies(search: string): Observable<Movie[]> {
    const url = `${MoviesRemoteService.defaultUrl}`;
    const params = this.defaultHttpParams()
      .set('type', 'movie')
      .set('plot', 'full');
    search.trim();
    const options = { params: search ? params.set('s', search) : params };

    return this.http
      .get<MovieSearchResult>(url, options)
      .pipe(
        map((searchResult) => searchResult.Search?.map(apiMovieToMovie) ?? [])
      );
  }
}

function apiMovieToMovie({ Title, Year, imdbID, Poster }: ApiMovie): Movie {
  return {
    title: Title,
    year: Year,
    imdbID,
    posterUrl: Poster,
  };
}
