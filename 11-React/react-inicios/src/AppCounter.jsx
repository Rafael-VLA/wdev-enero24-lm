import { useState } from "react"
import { CounterUI } from "./components/CounterUI"

const Title = ({ label }) => {
    return (
        <p className="font-semibold">{label}</p>
    )
}


export const AppCounter = () => {

    const [counter, setCounter] = useState(100);

    // const add = () => setCounter(counter + 1)
    // const remove = () => setCounter(counter - 1)

    return(
        <div className="p-8">
            <h1>App Counter</h1>

            <h5>Contador actual: { counter }</h5>

            <CounterUI
                Title={Title} 
                //Title={<Title label="Nuevo titulo" />} 
                // counter={counter}
                setCounter={setCounter} 
                // addCount={add} 
                // removeCount={remove}
            />
        </div>
    )
} 