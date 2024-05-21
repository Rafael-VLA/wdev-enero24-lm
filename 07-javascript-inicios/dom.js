// Como manipular elementos de HMTL



// tomar referencia de un elemento

// con getElementById
// const h1 = document.getElementById("title");


// con getElementsByTagName
// const listaTags = document.getElementsByTagName('h1');

//  con getElementsByClassName
// const h1 = document.getElementsByClassName('hero');


//const h1 = document.querySelector('#man');
//const listaP = document.querySelectorAll('p[data-marca="nike"]');

//console.log(h1)


// Pasando un HTMLColeccion a un array
// const newList = Array.from(listaTags);

// listaTags[0].innerText = "Costa Rica";


// Eventos
const myButton = document.querySelector("#enviar");
const myInput = document.querySelector("#nombre");
const myDiv = document.querySelector("#caja");

function saludar() {
    console.log('Hola Rafael');
}

// myButton.onclick = () => {
//     console.log('HEy');
// };

// myButton.addEventListener('click', (e) => { // e = event
//     console.log('Hola');
// })

// myInput.addEventListener('blur', () => {
//     console.log('blur');
// })

// myInput.addEventListener('focus', () => {
//     console.log('focus');
// })

// myDiv.addEventListener('click', () => {
//     console.log('Soy caja');
// })

const enviarInformacion = (name) => {
    console.log("Enviar información a un servidor", name);
}

myButton.addEventListener('click', (e) => { // e = event
    const value = myInput.value;
    
    enviarInformacion(value);
});

myInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        const value = e.target.value;
        enviarInformacion(value);
    }
});

// Como insertar elementos html desde js
// Obtener la referencia el div container por medio del nombre de la clase\
const divContainer = document.getElementsByClassName("container")[0];

// divContainer.innerHTML = '<p>Hola</p>'

//divContainer.innerHTML = '<span>Otro elemento</span>'

const strong = document.createElement("strong");

strong.innerText = "Rafael Sequeira";
strong.classList.add("green");

// divContainer.append(strong);

// Crear imagen 
const img = document.createElement("img");

// Agregar el atributo src="https://picsum.photos/250/250" con un link de imagen
img.src = 'https://picsum.photos/250/250';

// Agregar el atributo alt a la imagen 
img.alt = 'Descripcion de imagen random';

// Agregar un width de 250px y height 250px
img.width = 250;
img.height = 250;

// Inyectarlo en el divContainer
divContainer.append(strong, img);

// Como remover un elemento del DOM
const h1Mundo3 = document.querySelectorAll('.hero')[1];

//h1Mundo3.remove();
h1Mundo3.removeAttribute("id");


// Agregar y eliminar clases 
const divColores = document.querySelector('#colores');

divColores.classList.add("yellow", "black"); 

divColores.classList.remove("red"); 

console.log(divColores);

// Agregando estilos a un elemento
myButton.style.border = "none";
myButton.style.backgroundColor = "#d0fff8";
myButton.style.padding = "8px 20px";
myButton.style.borderRadius = "12px";
myButton.style.weigth = "500";