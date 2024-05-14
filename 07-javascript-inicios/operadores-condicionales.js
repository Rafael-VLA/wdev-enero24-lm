

// Con numeros
const num1 = 10;
const num2 = 15;

//              10   ==    10
const esIgual = num2 === num1;
const esMayor = num2 > num1;
const esDiferente = num1 !== num2;
const esMenor = num1 < num2;
const esMayorIgualQue = 16 >= 15;
const esMenorIgualQue = 9 <= 10;


// Con texto
const text1 = 'rafael sequeira sandoval';
const text2 = 'rafael sequeira sandoval';
const textIgual = text1.toLowerCase() === text2.toLowerCase();


// Casos especiales
const listaNumeros1 = [1, 2, 3];
const listaNumeros2 = [1, 2, 3];

// Convierte la lista de elementos a una cadena de caracteres (string)
// console.log(listaNumeros1.join('-'))
// console.log(listaNumeros2.join('-'))

const listaIgual = listaNumeros1.join('-') === listaNumeros2.join('-');
// console.log({ listaIgual })


// Pruebas
// console.log({ 
//     esIgual, 
//     esMayor, 
//     esDiferente, 
//     esMenor, 
//     esMayorIgualQue,
//     esMenorIgualQue,
// });


// Operadores booleanos
// && = AND
// || = OR
// ! = NOT

//           true         true
const AND = (5 > 3) && (10 < 9); // true

//           true       false
const OR = (5 > 3) || (10 < 9); // true

//            false
const NOT = !(5 < 3);

console.log({ AND, OR, NOT });
