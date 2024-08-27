import { Injectable } from "@angular/core";
import { Movie } from "@app/interfaces/movie.interface";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class MovieService {
    //public movies:Movie[] = [];
    private moviesSubject = new BehaviorSubject<Movie[]>([]);

    set movies(movies: Movie[]){ // para cambiar la lista
        this.moviesSubject.next(movies);
    }

    get movies():Observable<Movie[]> {
        return this.moviesSubject.asObservable(); // extraemos el observable
    }

    public getMoviesFavorite():string[]{
        const favorites:string[] = JSON.parse(localStorage.getItem('peliculas-favoritas') || '[]')
        return favorites;
    }

    private addOrRemoveMovieFavorite(id: string){ // Agregar el id de la pelicula en el localstorage
        let favorites = this.getMoviesFavorite();

        const movie = favorites.find(idFavorite => idFavorite === id);

        if(movie){ // si existe la pelicula
            favorites = favorites.filter(idFavorite => idFavorite !== id); // eliminamos pelicula
        } else {
            favorites.push(id); // agregamosla peliculas
        }

        localStorage.setItem('peliculas-favoritas', JSON.stringify(favorites));
    }

    toggleFavorite(id: string){
        const movies = this.moviesSubject.getValue();

        movies.forEach(movie => {
            if(movie.id === id){
                movie.itsFavorite = !movie.itsFavorite;
            }
        })

        this.addOrRemoveMovieFavorite(id);
    }
}