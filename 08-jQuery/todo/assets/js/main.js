/* 1. Clases - 2. LocalStorage - 3. Uso de Query Params - 4. Modulos */
// import Categoria from "./models/Categoria.js"; => export default
import { Categoria } from "./models/Categoria.js"; // => export 
import { crearCategorias } from './utils/partials.js';
import { notificationSuccess, notificationError } from './utils/notifications.js'

// let categorias = [
//     new Categoria('Compras'), 
//     new Categoria('Trabajo'), 
//     new Categoria('Universidad'),
// ];

const refrescarUI = () => {
    $('#contenedor-categorias').html(''); // barremos todas las categorias actuales
    crearCategorias(); // Agregamos los nuevos elementos
    $('.custom-card li[role="button"]').click(eliminarCategoria); // volvemos asignar el evento de eliminar
    $('.custom-card').click(navegarTodos); // volvemos asignar el evento de navegar
    $('.custom-card span[role="button"]').click((e) => e.stopPropagation());
}

const guardarCategoria = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    
    // const camposForm = Object.fromEntries(formulario); => obtenemos un objeto

    const titulo = form.get('categoria-titulo');

    const nuevaCategoria = new Categoria(titulo);

    
    const categorias = JSON.parse(localStorage.getItem('categorias')); // obtenemos la lista de categorias

    // verificar si existe esa categoria
    const existeCategoria = categorias.find(categoria => categoria.title.toLowerCase() === titulo.toLowerCase()); // categorias === categorias // false
    
    
    //Si existe un valor en la variable 'existeCategoria'
    if(existeCategoria){ // null, undefined, 0, "" => false
        // vamos a entrar al bloque if
        return notificationError("Categoria dublicada, no se puede agregar");
    }

    categorias.push(nuevaCategoria); // Insertamos la categoria en la lista de categoria
    localStorage.setItem('categorias', JSON.stringify(categorias)); // Guardarmos los cambios en el localStorage

    // $('#contenedor-categorias').html(''); // barremos todas las categorias actuales
    // crearCategorias(); // Agregamos los nuevos elementos
    // $('.custom-card li[role="button"]').click(eliminarCategoria); // volvemos asignar el evento de eliminar
    // $('.custom-card').click(navegarTodos); // volvemos asignar el evento de navegar
    refrescarUI();

    $('#categoria-titulo').val("");

    //alert("Categoria agregada");
    notificationSuccess("Categoria agregada correctamente");
}

function eliminarCategoria() {
    const idCategoria = $(this).attr('data-id-categoria');

    let categorias = JSON.parse(localStorage.getItem('categorias')); // obtenemos la lista de categorias

    const nuevasCategorias = categorias.filter(categoria => categoria.id !== idCategoria);

    categorias = nuevasCategorias;

    localStorage.setItem('categorias', JSON.stringify(categorias));

    // $('#contenedor-categorias').html(''); // barremos todas las categorias actuales
    // crearCategorias(); // Agregamos los nuevos elementos
    // $('.custom-card li[role="button"]').click(eliminarCategoria); // volvemos asignar el evento de eliminar
    // $('.custom-card').click(navegarTodos); // volvemos asignar el evento de navegar
    refrescarUI();
}

function navegarTodos() {
    const tituloCategoria = $(this).attr('data-title-categoria');

    window.location.href = `/todos.html?categoria=${tituloCategoria.toLowerCase()}`;
}

$(document).ready(() => {
    // let categorias1 = [];

    const categorias = localStorage.getItem('categorias');

    if(categorias === null){
        console.log('Creando array');
        localStorage.setItem('categorias', '[]');
    }

    // Creando catergorias de prueba
    crearCategorias();

    $('#form-categoria').submit(guardarCategoria);

    
    // Obtener la referencia de ese boton, imprimir "hola" por consola al dar click

    $('.custom-card li[role="button"]').click(eliminarCategoria);

    $('.custom-card').click(navegarTodos);

    $('.custom-card span[role="button"]').click((e) => {
        e.stopPropagation();
    })
});