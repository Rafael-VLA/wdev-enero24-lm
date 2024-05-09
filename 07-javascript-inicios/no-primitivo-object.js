// Objeto
// Representa un objeto, que puede contener propiedades y métodos.

// Como crear un objeto

// Por medio de una instancia
//const persona = new Object();
// persona.nombre = 'Rafa';

// Objeto literal
const amigos = ['Pepito', 'Juan', 'Pepe'];

const persona = {
    nombre: "Rafael",
    edad: 23,
    trabajo: {
        puesto: 'Desarrollador',
        empresa: 'VLA' 
    },
    casado: false,
    // amigos: amigos,
    amigos,
    "ciudad": "Limon",
    "nombre y apellido": "Rafael Sequeira" // evitar hacerlo
    // [clave]:[valor]
};

console.log(persona);

// Como obtener el valor de una propiedad

const nombre = persona.nombre;
console.log(nombre)

const edad = persona['edad'];
console.log(edad);

const ciudad = persona.ciudad;
console.log(ciudad);

const nombreCompleto = persona['nombre y apellido']
console.log(nombreCompleto)

// Como cambiar el valor de una propiedad
persona.nombre = "Pepe"
persona.trabajo.empresa = "Google"

console.log(persona)

// Como agregar una nueva propiedad
persona.mascota =  "Gato";

console.log(persona);

// Como eliminar una propiedad
delete persona.mascota;

console.log(persona)

// Como obtener las claves de un objeto
const listaClaves = Object.keys(persona);

console.log(listaClaves)

// Como obtener los valores de un objeto
const listaValores = Object.values(persona);
console.log(listaValores)

// Como evitar cambiar un objeto

const mascota = {
    raza: 'Gato',
    nombre: 'Pepe',
    amigos: {
        nombre1: 'A',
        nombre2: 'B',
        nombre3: 'C',
    }
};

Object.freeze(mascota);

mascota.nombre = 'saasas';

Object.freeze(mascota.amigos);

mascota.amigos.nombre1 = 'Kevin';

console.log(mascota);

// Uso de arrays con objetos

const persona1 = {
    nombre: 'Rafa',
    edad: 20
}

const persona2 = {
    nombre: 'Alonso',
    edad: 25
}

const persona3 = {
    nombre: 'Raul',
    edad: 18
}

const listaPersonas = [persona1, persona2, persona3];

listaPersonas.push({
    nombre: 'Pepe',
    edad: 24
})

console.log(listaPersonas)

// Practica de objetos
/*
1.Crear 3 objetos para representar productos con las siguientes propiedades:
    ● nombre: cadena de texto
    ● precio: numero
    ● cantidadDisponible: numero
    ● codigo: cadena de texto de 4 caracteres // AAEE
    ● caracteristicas: lista minimo 2 items // ['ruedas', 'color rojo', ...]
2.Agregar los 3 productos a una lista
3.Crear un nuevo producto con las mismas propiedades y posteriormente agregarlo al
principio de la lista. ??
4. Obtener el producto numero dos de la lista, actualizar el precio y la cantidad disponible
5. Al ultimo producto de la lista, se debe agregar una nueva caracteristica a su lista - agregar elemento??
*/

// 7:07 - 7:18-20

console.log('--------------------Solucion---------------------');

// 1.
const producto1 = {
    nombre: 'Samsung S24',
    precio: 450000,
    cantidadDisponible: 5,
    codigo: 'AAA1',
    caracteristicas: ['android', 'rojo', 'blanco']
};
const producto2 = {
    nombre: 'Televisor',
    precio: 150000,
    cantidadDisponible: 10,
    codigo: 'AAA2',
    caracteristicas: ['android', '1920*1080']
};

const producto3 = {
    nombre: 'Lavadora',
    precio: 100000,
    cantidadDisponible: 8,
    codigo: 'AAA3',
    caracteristicas: ['color negro', 'color blanco', 'lg']
};

// 2.
const listaProductos = [producto1, producto2, producto3];

// 3.
const nuevoProducto = {
    nombre: 'Bicicleta',
    precio: 80000,
    cantidadDisponible: 6,
    codigo: 'AAA4',
    caracteristicas: ['color azul', 'color verde']
};

listaProductos.unshift(nuevoProducto);

// 4.
const celular = listaProductos[1];

celular.precio = 500000;
celular.cantidadDisponible = 10;

console.log(celular);

// 5.
// const ultimoIndexLista = listaProductos.length - 1;
const ultimoIndexLista = 3;
const ultimoProducto = listaProductos[ultimoIndexLista];

ultimoProducto.caracteristicas.push('Garantia de un año');

console.log(listaProductos);
