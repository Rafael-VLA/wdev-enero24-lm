
// Funcion basica
// mi primera funcion

// function [nombre_funcion]([mis_paramatros]):[tipo_dato_retorno]{}

function miPrimerFuncion() {
    // ... todo el codigo que quiero ejecutar
    console.log('Hola Rafael');
}

// nombre: string
// Es importante respetar la posicion de los parametros
function miSegundaFuncion(nombre, apellido, edad = 15) { // uso de parametros
    console.log(`Hola ${nombre} ${apellido} ${edad}`);
}

function miTercerFuncion(){
    return 'Hey, vengo desde la funcion, hey'
}

// Funciones de flecha

const imprimirHola = (name) => {
    console.log(`Hola ${name} - Arrow function`)
}

// Funciones anonimas
const miFuncionAnonima = function(edad){
    console.log(`Mi edad: ${edad}`)
}

// ejecutar funcionar
miPrimerFuncion() // ejecutando la funcion
miSegundaFuncion('Rafael', 'Castillo') // ejecutando la funcion con parametros

const miTexto = miTercerFuncion(); // Ejecutando funcion con retorno de dato
console.log(miTexto);


imprimirHola('Juan')

miFuncionAnonima(25)