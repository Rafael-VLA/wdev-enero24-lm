const btnDropdown = document.querySelector("button[data-bs-toggle='dropdown']");
const btnMonedaColones = document.querySelector("#moneda-a-colones"); // cambiar texto de este boton
const btnColonesMoneda = document.getElementById("colones-a-moneda"); // cambiar texto de este boton

const inputValorMoneda = document.getElementById("valor-moneda");
// Tomar referencia del input de colones
const inputValorColones = document.getElementById("valor-colones");

const liEUR = document.getElementById("eur");
const liUSD = document.getElementById("usd");

let monedaSeleccionada = 'USD';

liEUR.addEventListener('click', () => {
    btnDropdown.innerText = 'Euro';
    btnMonedaColones.innerText = 'Euros a colones';
    btnColonesMoneda.innerText = 'Colones a euros';
    monedaSeleccionada = 'EUR';
});

liUSD.addEventListener('click', () => {
    btnDropdown.innerText = 'Dolar';
    btnMonedaColones.innerText = 'Dólares a colones';
    btnColonesMoneda.innerText = 'Colones a dólares';
    monedaSeleccionada = 'USD';
});

// Crear evento click para btnMonedaColones donde imprima por consola el valor de monedaSeleccionada
btnMonedaColones.addEventListener('click', () => {
    const valorMoneda = inputValorMoneda.value; // extraer el valor del input: string

    if(valorMoneda.length === 0 || parseInt(valorMoneda) < 0){ // si no hay nada en el input o el valor es menor que 0
        alert('El valor no es correcto');
        return; // aqui acaba la funcion
    }

    // "5.4" => 5 = usando parseInt
    // "5.4" => 5.4 = usando parseFloat
    const valorMonedaParseado = parseFloat(valorMoneda); // parsear el valor el input, de string a number

    //              5.4 * 513.04 = x
    const result = valorMonedaParseado * 513.04;

    inputValorColones.value = result.toFixed(2); // Muestra el resutado con 2 decimales
}); 