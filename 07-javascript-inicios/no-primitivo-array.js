// Array
// Representa una colección ordenada de elementos

// Como crear un array


// Creando una instancia del objeto Array
const frutas = new Array("Fresa", "Manzana", "Pera", "Banano");
console.log(frutas);

// Creando una instancia del objeto Array con un tamano determinado
const frutas2 = new Array(10);
console.log(frutas2);


// Por medio de llaves cuadradas
//const frutas3 = ['Kiwi', 'pina', 'Uva', 5, true, false, ['rafa', 'pepe']];
const frutas3 = ['Kiwi', 'pina', 'Uva']; // 0, 1, 2...
console.log(frutas3);

// Como obtener un determinado el elemento de un array
// ['Kiwi', 'pina', 'Uva']
// [0     , 1     , 2    ]
const valorUva = frutas3[2];
const valorBanano = frutas[3];

console.log(valorBanano);

// Como agregar un elemento
frutas3[3] = 'Mango';
frutas3[4] = 'Melon';
//frutas3[4] = 'Sandia'; // sustituir valor

frutas3.push("Sandia", "Guayaba"); // agrega elementos al final, no se memoriza la ultima posicion

//frutas3.unshift("Sandia", "Guayaba");  // agrega elementos al principio
console.log(frutas3);

// Como eliminar un elemento
//frutas3.pop(); // elimina el ultimo elemento
//frutas3.shift(); // elimina el primer elemento

// 4 = elemento a eliminar
// frutas3.splice(4, 1); // elimina un elemento de la lista por medio del posicion y el numero de elementos a eliminar 

const posicionUva = frutas3.indexOf('Sandia'); // uva = Uva
frutas3.splice(posicionUva, 1);

console.log(frutas3);


// Practica
// 1. Crear el siguiente array [[2, 4, 6, 8], [1, 3, 5, 7, 9]] y realizar los siguientes puntos:
// 2. Agregar el valor 0 al principio de la lista de valores impares
// 3. Eliminar el valor 6 de la lista de valores pares
// 4. Agregar el valor 10 al final de la lista de valores pares
// 5. Sustituir el número 5 por el número 11 de la lista de valores impares
// 6. Agregar el número 100 al principio de la lista principal
// 7. Agregar el número 200 al final de la lista principal

// Solucion
console.log('-------------------------Practica----------------------------');

// 1.
const numeros = [[2, 4, 6, 8], [1, 3, 5, 7, 9]];

// 2.
const numerosImpares = numeros[1];
numerosImpares.unshift(0);

// 3.
const numerosPares = numeros[0];
// posicion valor = 2
numerosPares.splice(2, 1);

// 4.
numerosPares.push(10);

// 5.
numerosImpares[3] = 11;

// 6.
numeros.unshift(100);

// 7.
numeros.push(200);

console.log(numeros);