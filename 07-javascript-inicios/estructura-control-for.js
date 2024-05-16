
let suma = 0;
//      0   + 1
suma = suma + 1; // = 1

//      1  +  1
suma = suma + 1; // = 2

//suma = suma + 1; // suma++

// suma++;
// suma++;
// suma++;

//console.log(suma);
//             0           1       2         3       4        5
const frutas = ['Banano', 'Pera', 'Manzana', 'Uva', 'Naranja', 'Pina'];

const tamanoListaFrutas = frutas.length;


// for clasico
//  inicio   ; limite = 6
for(let i = 0; i < tamanoListaFrutas; i++){ // i = 10

    if(frutas[i] === 'Uva'){
        //.log('Existe el elemento');
        i = tamanoListaFrutas; // 6
    } else {
        //.log('No existe el elemento');
    }

}


// ciclo inverso
for(let i = tamanoListaFrutas - 1; i > 0; i--){ // i = 10 - 1
    //console.log(frutas[i])
}

//for of
// for(let value of frutas){
//     if(value === 'Uva'){
//         console.log('Existe el elemento');
//         break;
//     } else {
//         console.log('No existe el elemento');
//     }
// }

// For in
const persona = {
    name: 'Rafael',
    age: 23,
    email: 'Rafa@gmail.com'
}

Object.keys(persona).forEach((keys) => {
    //console.log(persona[keys]);
});

for(const property in persona){
    console.log(property)

    if(property === 'email'){
        console.log('Existe')
    }
}


// Foreach array
frutas.forEach((value) => {
    //console.log(frutas)
});

// listas

// find => Encontrar un determinado elemento 
// filter => Filtrar elementos
// map => Crear un nuevo array basado en los elementos originales

const suma2 = (num1) => num1 + 2;
//console.log(suma2(6));

// Find
const uva = frutas.find((value) => value === 'Uva');

// FindIndex
const uva2 = frutas.findIndex((value) => value === 'Uva');


const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// filter


// numero mayor a o menor a
const listaNumerosMayoresA = listaNumeros.filter((value) => value <= 5);
//console.log(listaNumerosMayoresA);

// Numeros pares
const listaNumerosPares = listaNumeros.filter((value) => value%2 === 0);
//console.log(listaNumerosPares);

// Crean copiar del array con valores nuevos
const newFrutas = frutas.map((value, i) => value + i);
//console.log(newFrutas);

//console.log(frutas)



// Practicas
// 1. Imprimir los números pares del 0 al 20.

// Solucion 1
for(let i = 0; i <= 20; i = i + 2){ // se incremente 2 en 2
    if(i > 0){
        console.log(i);
    }
}
  
  // Solucion 2
  for(let i = 0; i <= 20; i++){
    if(i%2 === 0 && i > 0){
      console.log(i);
    }
  }
  
  
  // 2.Crear un nuevo array e insertar todos los elementos de la lista de frutas excepto las frutas de Banano y manzana.
  const frutasP = ['Banano', 'Pera', 'Manzana', 'Uva', 'Naranja', 'Pina'];
  const nuevaLista = [];
  
  for(let value of frutasP){ // for of
    if(value !== 'Banano' && value !== 'Manzana'){
      nuevaLista.push(value);
    }
  }
  
  console.log(nuevaLista);
  
  // 3. Crear una función que me permita buscar un determinado número en una lista de números, si existe, la función debe retornar un 'Existe el número x, se encuentra en la posición y', en caso de que no exista, debe retornar un 'No existe el número x'.
  const numBuscar = 10;
  const listaNumerosP = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const buscarNum = (num, lista) => {
    let i = 0;
    let result;
    
    for(let value of lista){
      i++;
      if(value === num){ // value = 6, num = 10
        result = true;
        break;
      } else {
        result = false;
      }
    }
    
    if(result === true){
        return `Existe el número ${num}, se encuentra en la posición ${i}`;
    } else {
      return `No existe el número ${num}`;
    }
  }
  
  const resultado = buscarNum(numBuscar, listaNumerosP)
  console.log(resultado)