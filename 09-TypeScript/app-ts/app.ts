
const btn:(HTMLButtonElement | null) = document.querySelector('#enviar'); // Obteniendo el botón
const img:(HTMLImageElement | null) = document.querySelector('#test-img'); // Obteniendo el botón

if(img === null) throw new Error("La img no existe");

img.src = "asdsadada";

if(btn === null){
    //console.error("El btn no existe");
    throw new Error("El btn no existe"); // Aqui termina toda la ejecucion
}

btn.addEventListener('click', () => {
    console.log("Enviar");
})

console.log("Soy un cambio nuevo");