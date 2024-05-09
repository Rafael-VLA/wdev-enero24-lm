// enero 26 2023


const miFecha = '2023-01-26T20:30:20Z';
const fechaActual = new Date(); // Nos da la fecha actual
const otraFecha = new Date(miFecha); // Nos da la fecha actual

const mes = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];

const posicionAnio = fechaActual.getMonth(); // obtiene la posicion del mes

//console.log(mes[posicionAnio])

console.log(otraFecha.getDate()); // obtiene el dia del mes
console.log(otraFecha.getUTCHours()) // Obtiene la hora de la fecha

const time = fechaActual.getTime();

console.log(time);