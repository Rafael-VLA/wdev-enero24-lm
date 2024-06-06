const containerPokemons = document.querySelector('.row'); // 1. Tener la referencia del div

const URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';  

// Trae mis pokemons
const getPokemons = async() => {
    const respuesta = await fetch(URL_POKEMON, { method: 'GET' }); // GET es opcional

    const data = await respuesta.json();

    return data.results;
}

// Como ejecutamos la funcion getPokemons?
// getPokemons().then(pokemons => {
//     console.log(pokemons)
// })

const createPokemon = (name, url) => {
    const partes = url.split('/'); // dividiendo string
    const idPokemon = partes[partes.length - 2]; // toma el id del elemento
    
    return `
    <div class="col-6 col-md-3 col-lg-2">

        <div class="card h-100 p-2">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPokemon}.svg" class="card-img-top" alt="Foto de bulbasaur">
            <div class="card-body">
                <h5 class="card-title text-center text-capitalize">${name}</h5>
            </div>
        </div>
        
    </div>
    `;
}

document.addEventListener('DOMContentLoaded', async() => {
    // ejecutar cosas

    const pokemons = await getPokemons();

    let htmlPokemons = '';

    pokemons.forEach(pokemon => {
        htmlPokemons += createPokemon(pokemon.name, pokemon.url);
    });
    
    containerPokemons.innerHTML = htmlPokemons; 

});