/* eslint-disable no-unused-vars */
import { useState } from "react"



export const useCounter = (initialState = 100) => {


    const [state, setState] = useState(initialState); //10

    const increment = (factor) => {
        setState( state + factor );
    }

    const decrement = (factor) => {
        setState( state - factor );
    }

    const reset = () => {
        setState(initialState)
    }

    return {
        state,
        increment,
        decrement,
        reset
    };


}