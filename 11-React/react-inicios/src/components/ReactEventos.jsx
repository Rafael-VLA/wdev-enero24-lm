import { useState } from "react"


export const ReactEventos = () => {
    const [name, setName] = useState("Rafael")

    return(
        <div>
            <h1>Nombre actual: <span className="font-medium">{ name }</span></h1>
            <button className="btn-primary">Cambiar nombre</button>
        </div>
    )
}