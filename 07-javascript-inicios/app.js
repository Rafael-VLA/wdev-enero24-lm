//alert('Hola');

// Comentario de una sola línea
// console.log("Esto se mostrará")


/* Comentario de varías líneas
console.log("Esto no debería mostrarse");
console.log("Esto no debería mostrarse");
console.log("Esto no debería mostrarse");
console.log("Esto no debería mostrarse");
*/

/**/

/*
Crear variable y luego asignar un valor

let nombre;
nombre = "Rafael";

*/


// undefined
let esUndefined;
//console.log(typeof esUndefined); // imprimir valores
console.log( esUndefined ); // imprimir valores

// string
let nombre = "Rafael"; // Crear e inicializar la variable con su dato
//console.log( typeof nombre );
console.log( nombre );

// Tipo de dato null
let esNull = null;
//console.log( typeof esNull );
console.log( esNull );

// Tipo de dato boolean
let esBooleano = true; // true o false = verdedaro o falso
//console.log( typeof esBooleano );
console.log( esBooleano );

// Tipo de dato number
let edad = 20; // usar cadena de caracteres
//console.log( typeof edad );
console.log( edad );
//

/*
Java
string name = "Hola";

int miNumero = 20;
double miNumeo2 = 20.1;
*/

// Tipo de dato Symbol
let esSymbol = Symbol();
//console.log( typeof esSymbol );
console.log( esSymbol );


// const, let y var

// let
let carro = "Toyota";
carro = "Audi";
console.log(carro);

// const
const email = "rafa@gmail.com"; // creando una variable constante = Nunca cambia

// var
// var alert = "Hola";
// alert('Hola');

// Formas de usar cadenas de  texto
let apellido = 'Sequeira';
let apellido2 = 'Perez';
let nombre2 = "Rafael"; // creando cadena con comillas dobles
let nombre3 = 'Juan \n\nhola\n\n\n'; // creando cadena con comillas simples
let nombre4 = `Kevin`; // creando cadena con backticks

let nombreCompleto = nombre2 + ' ' + apellido; //Rafael Sequeira
let nombreCompleto2 = `${ nombre4 } ${apellido2}`;

//nombreMascota // convencion camelCase

//console.log(nombre3);
//console.log(nombre4);

//console.log(nombreCompleto);
//console.log(nombreCompleto2);

/*
Practica
Crear una factura por consola.
Crear variables para la guardar la siguiente informacion: 
    fecha, 
    nombre de persona, 
    apellido de persona,
    nombre producto 1,
    precio producto 1,
    nombre producto 2,
    precio producto 2,
Resultado esperado:
*/

/*
Factura #1                      Fecha: [28-4-2024]

Nombre de cliente: [Rafael] [Sequeira]
------------------------------------------------
Producto        Cantidad    Total
[Arroz]           2           [2500]       
[Frijoles]        3           [2850]       
------------------------------------------------
                            5350

*/

// Solución
let fecha = '29-04-2024'; 
const nombrePersona = 'Rafael'; 
const apellidoPersona = 'Sequeira';
const nombreProducto1 = 'Arroz';
const cantidadP1 = 10;
const precioProducto1 = 1500;
const cantidadP2 = 4;
const nombreProducto2 = 'Frijoles';
const precioProducto2 = 750;

const totalP1 = precioProducto1 * cantidadP1;
const totalP2 = precioProducto2 * cantidadP2;

fecha = '30-04-2024';

const factura = `
Factua #1                      Fecha: ${fecha}

Nombre de cliente: ${nombrePersona} ${apellidoPersona}
------------------------------------------------
Producto            Cantidad            Total
${nombreProducto1}               ${cantidadP1}                  ${totalP1}
${nombreProducto2}            ${cantidadP2}                   ${totalP2}
------------------------------------------------
                                        ${ totalP1 + totalP2 }
`;

console.log(factura);