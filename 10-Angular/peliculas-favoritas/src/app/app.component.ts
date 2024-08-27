import { Component } from '@angular/core';
import { StudioGhibliService } from './services/studioGhibli.service';
import { Movie } from './interfaces/movie.interface';
import { Observable } from 'rxjs';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //

  constructor(
    private studioGhibliService: StudioGhibliService,
    private movieService: MovieService
  ){}

  ngOnInit(){
   this.studioGhibliService.getMovies().subscribe((movies) => {
      this.movieService.movies = movies;
      //this.studioGhibliService.movies = movies;
   });
  }

}
