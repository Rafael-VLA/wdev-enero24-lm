// import { CounterViejo } from "./components/counter-viejo/CounterViejo"

// import { Card } from "./components/Card"
import { CustomForm } from "./components/CustomForm"
// import { ListUsers } from "./components/ListUsers"
// import { ReactEventos } from "./components/ReactEventos"

// import { useState } from "react"
// import { CounterUseEffect } from "./components/hooks/CounterUseEffect"
//import { CounterUseState } from "./components/hooks/CounterUseState"

export const App = () => {

  // const [ show, setShow ] = useState(true);

  // const buttonStyles = "bg-[#0e7ccf] text-white px-2 py-1 rounded-md transition-colors hover:bg-[#0e7ccf]/80 active:bg-[#0e7ccf]";

  return (
    <div className="p-8">
      <h1 className="mb-4">App</h1>

      {/* <div className="mb-4">
        <h1>App: { `${show}` }</h1>
        <button className={ buttonStyles } onClick={() => setShow(!show)}>{ show === true ? "Esconder" : "Mostrar" }</button>
      </div> */}

      {/* <CounterViejo title="Counter 5" initialCounter={5} /> */}
      {/* <CounterUseState /> */}

      {/* {
        show === true ? <CounterUseEffect /> : null 
      } */}

      {/* <ReactEventos /> */}

      {/* <Card>
        <div className="flex flex-col gap-2">
          <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <button className="btn-primary">Más información</button>
        </div>
      </Card> */}

      {/* <ListUsers /> */}
      <CustomForm />
      
    </div>
  )
}