import { Todo } from './models/Todo.js';

// Crea un Todo
//const todo1 = new Todo("Comprar azucar", "Comprar 2 kilos de azucar dona maria", "compras");
const obtenerTodosLocalStorage = () => [ // simulando que vienen desde el localStorage
    new Todo('Comprar leche', 'Comprar leche descremada en el supermercado', 'compras'),
    new Todo('Terminar reporte', 'Completar el reporte mensual de ventas', 'trabajo'),
    new Todo('Estudiar para examen', 'Estudiar matemáticas para el examen final', 'escuela'),
    new Todo('Comprar frutas', 'Comprar manzanas y plátanos en el mercado', 'compras'),
    new Todo('Reunión con equipo', 'Reunión de seguimiento con el equipo de desarrollo', 'trabajo'),
    new Todo('Hacer tarea de historia', 'Completar la tarea sobre la Revolución Francesa', 'escuela')
];


$(document).ready(() => {

    // Obteniendo categoria por medio de los query params
    const currentURL = window.location.href;
    const params = new URL(currentURL).searchParams;
    const categoria = params.get("categoria") || ''; // compras

    const todos = obtenerTodosLocalStorage();
    // Solo los todos de compras
    const newTodos = todos.filter(todo => todo.category.toLowerCase() === categoria.toLowerCase());

    const todosToShow = newTodos.length === 0 ? todos : newTodos;

    const categorias = JSON.parse(localStorage.getItem('categorias')) || [];

    const nombresCategorias = categorias.map(categoria => {
        return categoria.title.toLowerCase()
    });

    nombresCategorias.forEach(categoria => {
        $('#tarea-categoria').append(`<option class="text-capitalize" value="${categoria}">${categoria}</option>`);
    });

    $('.form-check-input').change((e) => {
        //console.log(e.target.checked)
        console.log($(e.target).prop('checked'))
    })

    console.log(nombresCategorias);

    // Tarea 
    // 1. Crear el metodo de crear un todo y guardarlo en el localStorage
    // 2. Agregar alerta que le indique al usuario que se agrego el todo y una de error en caso de estar duplicada
    // 3. Inyectar los todos nuevos y filtrados(si existen) en el html, mostrar todos si no existe categoria

    // Reto:
    // 4. Eliminar un todo 
    // 5. Actualizar un todo y agregar las clases necesarias para que cambie el estilo del check al usuario
});