import { useState } from "react"

// Usando clase
// import { Component } from "react";
// export class Counter extends Component {
    
//     constructor(props){
//         super(props);

//         this.state = {
//             count: 0
//         }
//     }

//     render(){

//         return(
//             <div>
//                 <h1>Contador actual: { this.state.count }</h1>
//             </div>
//         )
//     }
// }


// Usando función

export const Counter = () => {
    const state = useState(0); // [state, setState]
    
    return( // retornamos jsx
        <div>
            <h3>Contador 1</h3>
            <h4>Valor actual: { state[0] }</h4>
        </div>
    )
}