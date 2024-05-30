
// HTTP GET

// Primera forma
// fetch('https://jsonplaceholder.typicode.com/users').then((respuesta) => {

//     respuesta.json().then((usuarios) => {
//         console.log(usuarios);
//     });

// });


// Segunda forma
// fetch('https://jsonplaceholder.typicode.com/users', { method: "GET" }) // fetch aplica el http get
//     .then((respuesta) => respuesta.json())
//     .then((data) => {
//         console.log(data) // uso los datos de los usuario
//     }).catch((err) => {
//         console.log(err)
//     });

// TAREA: traer informacion de un determinado endpoint con el fetch
//fetch('https://jsonplaceholder.typicode.com/posts')

// fetch('https://jsonplaceholder.typicode.com/todos/' + id).then((lista) => {
//     lista.json().then((data) => {
//         console.log(data)
//     });
// });

// async/await
const getTodo = async(id) => {

    try {
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const todo = await respuesta.json();
        return todo;
    } catch (error) {
        console.error(error)
        return null;
    }

}

// getTodo(10).then(todo => {
//     console.log(todo)
// })


// HTTP POST

const miPost = {
    title: 'Receta de comida',
    body: 'Receta de como preparar una pizza de piña',
    userId: 1
}

// agregar post
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: "POST", // tipo de metodo http a utilizar
  headers: { // tipo de formato a usar
    'Content-type': 'application/json'
  },
  body: JSON.stringify(miPost) // informacion a enviar en formato json
})
.then(respuesta => respuesta.json()) // extrayendo json
.then(data => { // Obtiendo informacion del json
    console.log(data);
})
.catch(error => { // manejando el error en caso de que exista
    console.error("Hay un error extrano");
})


const agregarPost = async(post) => {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(post)
    });

    const newPost = await respuesta.json();

    return newPost;
}

// TAREA: Crear una funcion que me permita agregar x cosa(users, todo, post, comment...) usando el async await
const agregarAlbum = async(album) => {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/albums', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(album)
    });

    const newAlbum = await respuesta.json();

    return newAlbum;
}

agregarAlbum({
    userId: 15,
    title: "Fotos de viajes"
}).then(data => {
    console.log(data)
})

agregarPost({
    title: 'Series mas vistas',
    body: 'Series de netflix mas vistas de la historia',
    userId: 5
}).then(post => {
    console.log(post)
})

// HTTP PUT
const miPostPUT = {
    title: 'Receta de comida actualizada',
    body: 'Receta de como preparar una pizza de piña actualizada',
    userId: 20
}

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: "PUT", // tipo de metodo http a utilizar
  headers: { // tipo de formato a usar
    'Content-type': 'application/json'
  },
  body: JSON.stringify(miPostPUT) // informacion a enviar en formato json
})
.then(respuesta => respuesta.json()) // extrayendo json
.then(data => { // Obtiendo informacion del json
    console.log(data);
})
.catch(error => { // manejando el error en caso de que exista
    console.error("Hay un error extrano");
})

const actualizarPost = async(post, id) => {
    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(post)
    });

    const updatedPost = await respuesta.json();

    return updatedPost;
}


// DELETE
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
})
.then(respuesta => respuesta.json())
.then(data => {
    console.log('Post eliminado')
}).catch(err => {
    console.log(err)
})

// REFERENCIAS RECURSOS

// const sumar = (x,  y) => x + y;

// const sumar = (x,  y) => {
//     return x + y;
// };


// console.log(sumar(4, 6))