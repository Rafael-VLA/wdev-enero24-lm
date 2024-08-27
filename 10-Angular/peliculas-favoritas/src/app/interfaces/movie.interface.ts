

// Es la información con la que vamos a trabajar
export interface Movie {
    id:                       string;
    title:                    string;
    image:                    string;
    itsFavorite:              boolean;
}

//type MovieWithoutItsFavorite = Omit<Movie, "itsFavorite">;

// Contiene toda la información del endpoint de las películas
export interface MoviesResponse extends Omit<Movie, "itsFavorite"> { // Omit genera una nueva interfaz sin n números de propiedad
    original_title:           string;
    original_title_romanised: string;
    movie_banner:             string;
    description:              string;
    director:                 string;
    producer:                 string;
    release_date:             string;
    running_time:             string;
    rt_score:                 string;
    people:                   string[];
    species:                  string[];
    locations:                string[];
    vehicles:                 string[];
    url:                      string;
}