import { Component } from '@angular/core';
import { Movie, MoviesResponse } from '@app/interfaces/movie.interface';
import { StudioGhibliService } from '../../services/studioGhibli.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent {
  // consumi el api
  public movies: Movie[] = [];

  constructor(private movieService: MovieService){

  }
  
  ngOnInit(){
    this.movieService.movies.subscribe((data) => { // estamos pendientes de los cambios
      this.movies = data;
    });
  }
}