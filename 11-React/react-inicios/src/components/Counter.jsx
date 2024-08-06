import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './counter.module.css';

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

export const Counter = ({ title, initialCounter = 10 }) => { // properties
    const [ counter, setCounter ] = useState(initialCounter); // [state, setState]
    console.log(styles)
    // const cotainerCounterStyles = { 
    //     display: "flex", 
    //     gap: "4px", 
    //     backgroundColor: counter%2 === 0 ? "gray" : "#888" 
    // }
    
    // const counter = state[0];
    // const setCounter = state[1];

    //let counter = 10; // simulando el estado
    
    return( // retornamos jsx - background-color: red = backgroundColor: "red" 
        <div className="flex flex-col gap-2">
            <p className="text-[#0e7ccf]">{ title }</p>

            {/* <div style={cotainerCounterStyles}> */}
            {/* <div className={`cotainerCounterStyles ${counter%2 === 0 ? "first-color" : "second-color"}`}> */}
            <div>
                <button onClick={() => setCounter(counter - 1)}>Restar</button>
                <h4 className={ styles.primaryText }>{ counter }</h4>
                <button onClick={() => setCounter(counter + 1)}>Sumar</button>
            </div>
        </div>
    )
}

Counter.propTypes = {
    title: PropTypes.string,
    initialCounter: PropTypes.number
}