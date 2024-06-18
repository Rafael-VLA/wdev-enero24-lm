import { Categoria } from "../models/Categoria.js"

const crearCategoria = (categoria = new Categoria()) => {
    
    // if(categoria === undefined){
    //     throw new Error('No se está pasando una categoria'); // disparar un error
    // }

    if(categoria.title === undefined){
        throw new Error('No se está pasando una categoria'); // disparar un error
    }

    return `
        <div class="col-6 col-md-3 col-lg-2">
            <div data-title-categoria="${categoria.title}" class="position-relative custom-card bg-dark text-white rounded-2 px-4 py-5 text-center">


                <div class="dropdown position-absolute top-0 end-0 me-2 mt-2">
                    <span role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i  class="bi bi-three-dots"></i>
                    </span>
                    <ul class="dropdown-menu">
                        <li data-id-categoria="${categoria.id}" role="button" class="dropdown-item">Eliminar</li>
                    </ul>
                </div>

                
                <div class="d-flex flex-column gap-3">
                    <h2 class="fs-5">${categoria.title}</h2>

                    <span class="badge rounded-pill text-bg-light text-dark py-2">No hay tareas</span>
                </div>
            </div>
        </div>
    `;
}

// const state = true;
// const partial = `<input class="form-check-input" type="checkbox" id="flexCheckDefault" ${state === true ? 'checked' : ''}>`;

export const crearCategorias = () => {
    const categorias = JSON.parse(localStorage.getItem('categorias'));

    categorias.forEach(categoria => {
        $('#contenedor-categorias').append(crearCategoria(categoria));
    })
}