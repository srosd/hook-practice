import React from 'react';
import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {



    const { state, increment, decrement, reset } = useCounter();


    return (
        <>
            <h1>Counter with Hook: { state }</h1>
            <hr />

            <button onClick={()=>increment(2)} className="btn btn-primary">+1</button>
            <button onClick={()=>decrement(2)} className="btn btn-secondary">-1</button>
            <button onClick={reset} className="btn btn-success">Reset</button>
        </>
    )
}
