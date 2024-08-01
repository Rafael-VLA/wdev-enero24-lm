import { Component } from '@angular/core';
import { Movie } from '@app/interfaces/movie.interface';
import { MovieService } from '@app/services/movie.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styles: ``
})
export class FavoritePageComponent {

  public movies: Movie[] = [];

  constructor(private movieService: MovieService){

  }
  
  ngOnInit(){
    this.movieService.movies.subscribe((data) => { // estamos pendientes de los cambios
      this.movies = data.filter(movie => movie.itsFavorite === true);
    });
  }
}
