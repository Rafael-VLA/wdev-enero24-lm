"use strict";
const btn = document.getElementById('enviarp'); // Obteniendo el botón
if (btn === null) {
    //console.error("El btn no existe");
    throw new Error("El btn no existe"); // Aqui termina toda la ejecucion
}
btn.addEventListener('click', () => {
    console.log("Enviar");
});
console.log("Soy un cambio nuevo");
