

// Trae los usuarios de mi endpoint
export const getUsers = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
  
    return data;
}


export const getUserById = async(id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if(response.ok === false){ // Si hay un error
        throw new Error("Error al obtener los datos");
    }

    const data = await response.json();
  
    return data;
}