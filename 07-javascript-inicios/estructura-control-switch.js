

// Caso con numeros
const miValor = 3;

// switch(miValor){
//     case 0:
//         console.log('Soy cero');
//         break;
        
//     case 1:
//         console.log('Soy uno');
//         break;
        
//     case 2:
//         console.log('Soy dos');
//     break;

//     default: 
//         console.log(`El valor ${ miValor } no existe`)
//     break;
// }

// Caso de estado de tarea
const myEstado = "Pendiente"; // Mi tarea tiene el estado de terminado

const estado1 = "Pendiente";
const estado2 = "En proceso";
const estado3 = "Terminado";

switch(myEstado){
    case estado1:
        console.log("La tarea está pendiente");
    break;
    case estado2:
        console.log("La tarea está en proceso");
    break;
    case estado3:
        console.log("La tarea está terminada");
    break;

    default:
        console.log('Estado de tarea incorrecto');
    break;
}