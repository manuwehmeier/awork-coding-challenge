import { Component, Input } from '@angular/core';
import { MovieGroup } from 'src/app/core/models/movie-group.model';

@Component({
  selector: 'app-grouped-movie-list',
  templateUrl: './grouped-movie-list.component.html',
  styleUrls: ['./grouped-movie-list.component.scss'],
})
export class GroupedMovieListComponent {
  @Input() movieGroups: MovieGroup[] | null = null;
}
