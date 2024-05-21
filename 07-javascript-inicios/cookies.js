
document.cookie = 'producto=zapato';
document.cookie = 'marca=puma';


document.getElementById('send').addEventListener('click', async() => {
    const result = await fetch('http://localhost:4000/', {
        credentials: 'include'
    }).then(res => res.text())

    console.log(result)
});