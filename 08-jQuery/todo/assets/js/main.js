/* 1. Clases - 2. LocalStorage - 3. Uso de Query Params - 4. Modulos */
// import Categoria from "./models/Categoria.js"; => export default
import { Categoria } from "./models/Categoria.js"; // => export 
import { crearCategorias } from './utils/partials.js';

const categorias = [
    new Categoria('Compras'), 
    new Categoria('Trabajo'), 
    new Categoria('Universidad'),
];

$(document).ready(() => {

    // Creando catergorias de prueba
    crearCategorias(categorias);

    $('#form-categoria').submit((e) => {
        e.preventDefault();
        // const tituloCategoria = $('#categoria-titulo').val();

        const form = new FormData(e.target);

        const titulo = form.get('categoria-titulo');

        const nuevaCategoria = new Categoria(titulo);

        categorias.push(nuevaCategoria);

        $('#contenedor-categorias').html(''); // barremos todas las categorias actuales
        crearCategorias(categorias); // Agregamos los nuevos elementos

        // const camposForm = Object.fromEntries(formulario); => obtenemos un objeto

        // console.log(tituloCategoria);
    })

});

