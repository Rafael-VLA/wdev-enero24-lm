const btnUsers = document.querySelector('#getUsers');

console.log('Inicio');

const obtenerDatosUsuarios = new Promise((resolve, reject) => {
    setTimeout(() => {
        // ... se ejecuta todo el codigo de la promesa pero algo sale
        //resolve('Listos los datos del usuario');


        reject('No se pudo traer la informacion, existe error con la peticion http');
    }, 5000);
});

console.log('Fin');




// Funcion que se autoejecuta
// (async() => {
//     const resultado = await obtenerDatosUsuarios;

//     console.log(resultado);
    // console.log('Hola, me auto ejecuto');
// })();


// usando async/await
btnUsers.addEventListener('click', async() => {
    
    // obtenerDatosUsuarios.then((resultado) => {
    //     console.log(resultado);
    // }).catch((error) => {
    //     alert(error)
    // });

    try {
        const resultado = await obtenerDatosUsuarios;
        console.log(resultado);
    } catch (error) { // aqui viene el error de reject
        alert(error)
    } finally {
        console.log('Try finalizado');
    }


});

// document.addEventListener('DOMContentLoaded', () => {})