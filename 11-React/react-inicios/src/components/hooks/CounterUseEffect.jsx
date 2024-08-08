import { useState, useEffect } from "react";

// Simulando que está en otro archivo
const getUsers = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return data;
}

export const CounterUseEffect = () => {
    const [ counter, setCounter ] = useState(10);
    const [ title, setTitle ] = useState("[Esperando título...]")

    const [ numerosPares, setNumerosPares ] = useState([])

    const buttonStyles = "bg-[#0e7ccf] text-white px-2 py-1 rounded-md transition-colors hover:bg-[#0e7ccf]/80 active:bg-[#0e7ccf]";

    // Este eseEffect se encarga de cambiar el estado del titulo 
    useEffect(() => {
        const timeoutTitle = setTimeout(() => {
            setTitle("Custom title");
            console.log("Título cambiado");
        }, 5000)

        return () => {
            clearTimeout(timeoutTitle)
            console.log("Componente destruído")
        }
    }, [])

    // Este useEffect se encarga de obtener información de un api rest
    useEffect(() => { // NO PUEDE SER UNA FUNCIÓN ASÍNCRONA(no usar async)

        // NO HACER
        // const res = await fetch("https://jsonplaceholder.typicode.com/users");
        // const data = await res.json();

        // console.log(data);

        getUsers().then(users => {
            console.log(users)
        });

        // Forma correcta
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //     })
    }, [])


    // Este useEffect guardará número pares en una lista
    useEffect(() => {

        if(counter%2 == 0){ // si el valor del counter es divisible entre 2 
            console.log("Este es un número par:", counter)
            // numerosPares.push(counter) => NO HACER

            const newArray = [...numerosPares, counter];
            setNumerosPares(newArray)
        }

    }, [counter])

    
    // useEffect(() => { // Se ejecuta cuando se monta(o se construye) el componente //  ngOnInit - 
    //     console.log("Contador actual:", counter);
        
    //     return () => { // Función que se ejecuta cuando se desmonta(o destruye) el componente
    //         // Limpiar eventos

    //     }  
    // }, []); // Si la lista está vacía el useEffect se ejecutará una única vez en todo el ciclo del componente
    
    return( 
        <div>
            <div className="max-w-56 p-4 flex flex-col items-center border border-black/20 rounded-3xl">
                <p className="font-semibold">{ title }</p>

                <hr className="my-3 w-full border-b border-black/10" />

                <div className="flex gap-2 items-center">
                    <button className={buttonStyles} onClick={() => setCounter(counter - 1)}>Restar</button>
                    <h4 className="font-medium">{ counter }</h4>
                    <button className={buttonStyles} onClick={() => setCounter(counter + 1)}>Sumar</button>
                </div>
            </div>

            { numerosPares.join(",") }
        </div>
    )
}