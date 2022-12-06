import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './screens/movies/movies.component';
import { GroupedMovieListComponent } from './screens/movies/grouped-movie-list/grouped-movie-list.component';
import { GroupedMovieListItemComponent } from './screens/movies/grouped-movie-list/grouped-movie-list-item/grouped-movie-list-item.component';

@NgModule({
  declarations: [AppComponent, MoviesComponent, GroupedMovieListComponent, GroupedMovieListItemComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
