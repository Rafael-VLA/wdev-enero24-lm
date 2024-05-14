

// Estructura de control IF con numeros
const num1 = 10;
const num2 = 15;

if(num2 === num1){ // en caso de que se cumpla
    // cualquier cosa en mi codigo
    //console.log('El num2 es igual al num1');
} else {
    //console.log('El num2 no es igual al num1');
}

/*
si(verdadero){
    imprimir('El num2 es igual al num1')
} sino {
    imprimir('El num2 no es igual al num1')
}
*/


// Estructura de control IF con texto

const myEstado = "Terminado"; // Mi tarea tiene el estado de terminado

const estado1 = "Pendiente";
const estado2 = "En proceso";
const estado3 = "Terminado";

if(myEstado === estado1){
    console.log("La tarea está pendiente");
} else if(myEstado === estado2){
    console.log("La tarea está en proceso");
} else if(myEstado === estado3) {
    console.log("La tarea está terminada");
} else {
    console.log('Estado de tarea incorrecto');
}

/*
si(verdadero) {

} sino si(verdadero) {

} sino si(verdadero){

} ...
*/

// && - ||
// if(myEstado !== estado1 || myEstado !== estado2 || myEstado !== estado3){
//     console.log('Estado de tarea incorrecto')
// }