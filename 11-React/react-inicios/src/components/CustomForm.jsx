import { useState } from 'react'

export const CustomForm = () => {
    const [error, setError] = useState(false) // setError
    const [ inputValues, setInputValues ] = useState({
        nombre: "",
        apellido: "",
        email: ""
    })


    //const inputs = useRef([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Con useRef([])
        //if(inputs.current.length === 0) throw new Error("No existen elementos");

        // const [ nombre, apellido, correo ] = inputs.current.map(input => input.value);

        // if(nombre.length === 0){
        //     setError(true);
        //     return;
        // }

        // console.log({ nombre, apellido, correo })
        //setError(false)


        // Con FormData
        //const users = Object.fromEntries(new FormData(e.target));

        // const users = {
        //     nombre: fields.get("nombre"),
        //     apellido: fields.get("apellido"),
        //     correo: fields.get("email")
        // }

        // if(users.nombre.length === 0){
        //     setError(true);
        //     return;
        // }

        // console.log(users)
        // setError(false)


        // Con useState()
        if(inputValues.nombre.length === 0){
            setError(true);
            return;
        }

        console.log(inputValues)
        setError(false)

        // enviar la información a un api rest
    }

    const handleChange = (e) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value, // == nombre: e.target.value,
        })
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto" autoComplete="off">
            <p> Nombre: { inputValues.nombre } | Apellido: {inputValues.apellido} | Email: { inputValues.email } </p>
            <div className="mb-5">
                <label
                    htmlFor="nombre"
                    className={`block mb-2 text-sm font-medium text-gray-900`}
                >
                    Nombre
                </label>
                <input
                    // ref={(element) => inputs.current[0] = element}
                    type="text"
                    id="nombre"
                    name="nombre"
                    className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${error === true ? "border-red-400" : ""}`}
                    placeholder="Fulanito..."
                    value={inputValues.nombre}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="apellido"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Apellido
                </label>
                <input
                    // ref={(element) => inputs.current[1] = element}
                    type="text"
                    id="apellido"
                    name="apellido"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Del Rio..."
                    value={inputValues.apellido}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Correo electrónico
                </label>
                <input
                    // ref={(element) => inputs.current[2] = element}
                    type="email"                    
                    id="email"
                    name="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="fulanito@gmail.com"
                    value={inputValues.email}
                    onChange={handleChange}
                />
            </div>
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                    <input
                        id="terms"
                        type="checkbox"
                        defaultValue=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                        required=""
                    />
                </div>
                <label
                    htmlFor="terms"
                    className="ms-2 text-sm font-medium text-gray-900"
                >
                    Estoy de acuerdo con los{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        terminos y condiciones
                    </a>
                </label>
            </div>
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
                Agregar usuario
            </button>
        </form>
    )
}
