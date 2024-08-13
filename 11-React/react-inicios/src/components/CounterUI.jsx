import { useState } from "react"

// addCount, removeCount
export const CounterUI = ({ setCounter, Title }) => {
    const [title] = useState("Nuevo estado")

    const remove = () => setCounter((counter) => { return counter - 1 })

    return(
        <div className="max-w-56 p-4 flex flex-col items-center border border-black/20 rounded-3xl">
            <Title label={ title } />
            {/* { Title } */}

            <hr className="my-3 w-full border-b border-black/10" />

            <div className="flex gap-2 items-center">
                <button 
                    className="btn-primary" 
                    // onClick={() => removeCount()}
                    onClick={remove}
                >
                    Restar
                </button>
                <h4 className="font-medium"> --- </h4>
                <button 
                    className="btn-primary" 
                    // onClick={() => addCount()}
                    onClick={() => setCounter(counter => counter + 1)}
                >
                    Sumar
                </button>
            </div>
        </div>
    )
}