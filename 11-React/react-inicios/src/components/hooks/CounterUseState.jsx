import { useState } from "react";


// 1. Lo hooks de react se utilizan solamente en la raiz del componente
export const CounterUseState = () => {
    
    const [ counter, setCounter ] = useState(10); // Es un hook => [state, setState]

    const title = "No casa"
    
    if(title === "casa"){
        return (
            <h1>Es una casa</h1>
        )
    }

    const restar = () => {

        //setCounter(counter - 1);

        setCounter((state) => {
            // restar
            const newValue = state - 1;
            return newValue;
        });
    }

    const buttonStyles = "bg-[#0e7ccf] text-white px-2 py-1 rounded-md transition-colors hover:bg-[#0e7ccf]/80 active:bg-[#0e7ccf]";
    
    return( 
        <div className="max-w-56 p-4 flex flex-col items-center border border-black/20 rounded-3xl">
            <p className="font-semibold">Counter Use State</p>

            <hr className="my-3 w-full border-b border-black/10" />

            <div className="flex gap-2 items-center">
                <button className={buttonStyles} onClick={() => restar()}>Restar</button>
                <h4 className="font-medium">{ counter }</h4>
                <button className={buttonStyles} onClick={() => setCounter(counter + 1)}>Sumar</button>
            </div>
        </div>
    )
}