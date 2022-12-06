import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { MoviesComponent } from 'src/app/screens/movies/movies.component';
import { GroupedMovieListComponent } from 'src/app/screens/movies/grouped-movie-list/grouped-movie-list.component';
import { GroupedMovieListItemComponent } from 'src/app/screens/movies/grouped-movie-list/grouped-movie-list-item/grouped-movie-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    GroupedMovieListComponent,
    GroupedMovieListItemComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
