import { useState } from 'react';
import PropTypes from 'prop-types';
//import styles from './counter.module.css';

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

export const CounterViejo = ({ title, initialCounter = 10 }) => { // properties
    const [ counter, setCounter ] = useState(initialCounter); // [state, setState]

    // const cotainerCounterStyles = { 
    //     display: "flex", 
    //     gap: "4px", 
    //     backgroundColor: counter%2 === 0 ? "gray" : "#888" 
    // }
    
    // const counter = state[0];
    // const setCounter = state[1];

    //let counter = 10; // simulando el estado

    const buttonStyles = "bg-[#0e7ccf] text-white px-2 py-1 rounded-md transition-colors hover:bg-[#0e7ccf]/80 active:bg-[#0e7ccf]";
    
    return( // retornamos jsx - background-color: red = backgroundColor: "red" 
        <div className="max-w-56 p-4 flex flex-col items-center border border-black/20 rounded-3xl">
            <p className="font-semibold">{ title }</p>

            <hr className="my-3 w-full border-b border-black/10" />

            {/* <div style={cotainerCounterStyles}> */}
            {/* <div className={`cotainerCounterStyles ${counter%2 === 0 ? "first-color" : "second-color"}`}> */}
            <div className="flex gap-2 items-center">
                <button className={buttonStyles} onClick={() => setCounter(counter - 1)}>Restar</button>
                <h4 className="font-medium">{ counter }</h4>
                <button className={buttonStyles} onClick={() => setCounter(counter + 1)}>Sumar</button>
            </div>
        </div>
    )
}

CounterViejo.propTypes = {
    title: PropTypes.string,
    initialCounter: PropTypes.number
}