import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Movie, MoviesResponse } from "@app/interfaces/movie.interface";
import { map, Observable } from "rxjs";
import { MovieService } from "./movie.service";

@Injectable({
    providedIn: "root"
})
export class StudioGhibliService {

    private urlBase = 'https://ghibliapi.vercel.app';

    //public movies:Movie[] = [];

    constructor(
        private http: HttpClient,
        private movie: MovieService
    ){}

    public getMovies():Observable<Movie[]> { // obtener peliculas
        return this.http.get<MoviesResponse[]>(`${this.urlBase}/films`).pipe(
            map((data) => {

                const favorites = this.movie.getMoviesFavorite();

                const newData:Movie[] = data.map(movie => {
                    const itsFavorite = !!favorites.find(id => id === movie.id);
                    
                    return {
                        id: movie.id,
                        title: movie.title,
                        image: movie.image,
                        itsFavorite: itsFavorite
                    }
                })

                return newData;
            })
        );
    }

    // Con otro caso
    // public getPeople(){ // obtener peliculas
    //     return this.http.get(`${this.urlBase}/people`)
    // } 
}
