import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { MovieGroup } from '../models/movie-group.model';
import { Movie } from '../models/movie.model';
import { MoviesRemoteService } from '../remote/movies-remote.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private groupMoviesWorker?: Worker;
  private searchSrc$ = new BehaviorSubject<string>('');
  private groupedMoviesSrc$ = new BehaviorSubject<MovieGroup[]>([]);

  public groupedMovies$: Observable<MovieGroup[]> = this.searchSrc$.pipe(
    switchMap((search: string) =>
      this.moviesRemoteService.searchMovies(search).pipe(
        tap((movies) => this.groupMovies(movies)),
        switchMap(() => this.groupedMoviesSrc$.asObservable())
      )
    )
  );

  constructor(private moviesRemoteService: MoviesRemoteService) {
    if (typeof Worker !== 'undefined') {
      this.groupMoviesWorker = new Worker(
        new URL('./group-movies.worker', import.meta.url)
      );
      this.groupMoviesWorker.onmessage = ({ data }) => {
        this.groupedMoviesSrc$.next(data);
      };
    }
  }

  public setSearch(search: string): void {
    this.searchSrc$.next(search);
  }

  private groupMovies(movies: Movie[]): void {
    console.log('movies before grouping:', movies);
    this.groupMoviesWorker?.postMessage(movies);
  }
}
