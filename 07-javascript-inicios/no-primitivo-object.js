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