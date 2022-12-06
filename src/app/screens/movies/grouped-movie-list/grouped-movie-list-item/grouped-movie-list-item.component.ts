import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.model';

@Component({
  selector: 'app-grouped-movie-list-item',
  templateUrl: './grouped-movie-list-item.component.html',
  styleUrls: ['./grouped-movie-list-item.component.scss'],
})
export class GroupedMovieListItemComponent {
  @Input() movie!: Movie;
}
