import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounce, debounceTime, Subject, takeUntil } from 'rxjs';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit, OnDestroy {
  public movieGroups$ = this.movieService.groupedMovies$;
  private searchSrc$ = new Subject<string>();
  private search$ = this.searchSrc$.asObservable().pipe(debounceTime(1000));
  private ngUnsubscribe$ = new Subject<void>();

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.search$.pipe(takeUntil(this.ngUnsubscribe$)).subscribe((search) => {
      this.movieService.setSearch(search);
    });
  }

  public setTitleSearchInput(search: string) {
    this.searchSrc$.next(search);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
