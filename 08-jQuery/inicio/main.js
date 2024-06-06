// CODIGO VANILLA => Codigo puro
//document.getElementsByTagName('h1')[0].innerText = 'Hola desde js de forma local';


// MANIPULACION DEL DOM
// Obtener referencia de un elemento => $([elemento])

// Cambia Texto de un elemento
$('h1').text('Hola desde jquery de forma local'); // agregamos texto con jquery

// $('div.contenedor').html('<p>Hola soy un parrafo</p>');
// $('div.contenedor').html('<p>HEEEEY</p>');

$('div.contenedor').append('<p>Hola soy un parrafo</p>');
$('div.contenedor').append('<p class="green" id="5">HEEEEY</p>');

// const textP = $('#5').text();
// console.log(textP)

$('#5').remove();

$('h1').wrap('<div id="contenedor-h1"></div>');

$('#lista > li').each((index, li) => {
    console.log(li)
})

console.log("Size: ", $('#lista > li').length)
console.log("Size: ", $('#lista > li').get(1))

console.log($('#span-texto').parent())


//                    propiedad, valor
// $('#span-texto').css("color", "red");
// $('#span-texto').css("font-size", "60px");

$('#span-texto').css({
    "font-size": '60px',
    "color": "green"
})


// console.log($('#input-text').val('Cambio desde js'))

// document.getElementById('input-text').value = 'dadsadada'

// EVENTOS

//on
// $('#btn-enviar').on('click', () => {
//     console.log('Soy evento con jquery')
// })

//bind
// $('#btn-enviar').bind('click', () => {
//      console.log('Soy evento con jquery')
// })

//click
// $('#btn-enviar').click(() => { // evento click
//     console.log('click click')
// })

$('#input-text').keypress((e) => {
    console.log(e.key)
})

//one
// $('#btn-enviar').one('click', () => {
//     console.log('click one')
// })

// this => funciona solo con funciones anónimas
$('#btn-enviar').click(function(){
    $(this).css('background', 'blue');
});

// document.querySelector('#btn-enviar').addEventListener('click', () => {
//     console.log('Hola soy evento con js');
// })

// document.querySelector('#btn-enviar').removeEventListener('click', () => {
//         console.log('Hola soy evento con js');
//     })

// AJAX

//GET
$.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    // success: (data) => {
    //     console.log(data)
    // },
    // error: (err) => {
    //     console.log('Hay un error')
    // }
}).done((data) => {
    // console.log(data)
}).fail((err) => {
    console.log('Ocurrio algo')
})

// POST
$.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'POST',
    dataType: 'json',
    body: {
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    } 
}).done((data) => {
    // console.log(data)
}).fail((err) => {
    console.log('Ocurrio algo')
})

// ajax


// get
$.getJSON('https://jsonplaceholder.typicode.com/posts').done((data) => {
    data.forEach(element => { // itero la lista
        $('#list-post').append(`<li>${element.title}</li>`);
    });
})

// post
$.post('https://jsonplaceholder.typicode.com/posts', {
    title: "Hola",
    body: "Saludo"
}, (data) => {
    console.log(data)
})
