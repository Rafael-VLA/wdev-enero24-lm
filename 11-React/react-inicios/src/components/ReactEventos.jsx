import { useState } from 'react'

/*
1. onClick - X
2. onChange - X
3. onKeyUp - X
4. onMouseMove
5. onFocus - X
6. onBlur - X
...
*/

export const ReactEventos = () => { // retornamos JSX
    //const inputRef = useRef(); // { current: ?? }

    const [ inputText, setInputText ] = useState("")
    const [ onFocus, setOnFocus ] = useState(false)
    const [ coors, setCoors ] = useState({ x: 0, y: 0 })

    // (e) => saludar(e) == saludar
    // const saludar = (e, edad) => {
    //     const textButton = e.target.innerText;
    //     const [ ,,nombre ] = textButton.split(" ")
    //     console.log(`¡Hola ${nombre}! - ${edad}`);
    // }

    const enviar = () => { // sin parentesis se ejecuta con el evento onClick y con parentesis se ejecuta directamente la función
        console.log(inputText)

        //console.log(inputRef.current.value)
    }

    const handleFocus = () => {
        setOnFocus(true)
        //console.log("Estoy enfocado en el elemento")
    }

    const handleBlur = () => {
        setOnFocus(false)
        //console.log("No estoy enfoncando el elemento")
    }

    const handleKeyUp = (e) => {
        if(e.key === "Enter"){
            // Ejecuto lo que sea
            enviar();
        }
    }

    const handleMouseMove = (e) => {
        setCoors({
            x: e.clientX,
            y: e.clientY
        })
    }

    return(
        <div className="max-w-96">

            <div className="mb-8 flex gap-3">
                <input
                    // ref={(element) => inputRef.current = element}
                    //ref={inputRef}
                    type="text"
                    className={ `border px-2 py-1 rounded-lg outline-none flex-1 ${ onFocus === true ? "border-fuchsia-500" : "border-black" }` }
                    value={ inputText }
                    onChange={(e) => setInputText(e.target.value) }
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyUp={(e) => handleKeyUp(e)}
                />

                <button onClick={enviar} className="btn-primary">Enviar</button>
            </div>

            <div onMouseMove={handleMouseMove} className="w-full h-80 bg-green-400">
                <p>X: { coors.x }</p>
                <p>Y: { coors.y }</p>
            </div>
        </div>
    )
}