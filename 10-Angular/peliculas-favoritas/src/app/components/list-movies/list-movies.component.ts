import { Component, Input } from '@angular/core';
import { Movie, MoviesResponse } from '@app/interfaces/movie.interface';

// import { movies } from '@app/data/movies';
// import { movies } from '../../../../data/movies';
// import { movies } from '@app/data/movies'

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styles: ``
})
export class ListMoviesComponent {

  @Input() // le indica que vienen de afuera = props
  public movies: Movie[] = [];
}
