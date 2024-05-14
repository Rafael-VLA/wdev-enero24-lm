// Sumar: retorne el resultado

// Nombre de la funcion: sumar
// Parametro1: numero1
// Parametro2: numero2
// Retorno: resultado de la suma
function sumar(numero1, numero2) {
    const resultado = numero1 + numero2;
    return resultado;
}

// -
// Restar: retorne el resultado
const restar = (num1, num2) => {
    const resultado = num1 - num2;
    return resultado;
}

// *
// Multiplicar: retorne el resultado
const multiplicar = (num1, num2) => {
    const resultado = num1 * num2;
    return resultado;
}

// /
// Dividir: Imprimir por consola
const dividir = (num1, num2) => {
    const resultado = num1 / num2;

    if(isNaN(resultado)){
        console.log('No se puede dividir');
        return;
    }
    
    if(resultado == Infinity){
        console.log('No se puede dividir infinity');
        return;
    }
    
    // ??
    console.log("Dividir: ", resultado)
}

// Ejecutar metodos
const resultado = 3 + 5;
const resultado1 = 6 + 5;
const resultado2 = 4 + 5;
const resultado3 = 3 + 5;

const num1 = 5;
const num2 = 6;
const resultadoMultiplicacion = multiplicar(num1, num2);

console.log("Suma: ", sumar(3, 5));
console.log("Resta: ", restar(10, 20));
console.log("Multiplicacion: ", resultadoMultiplicacion);

dividir(8, 0)

// const resultaSuma = sumar(20, 10);
// console.log(resultaSuma);