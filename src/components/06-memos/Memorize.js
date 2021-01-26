import React, {useState} from 'react';
import {useCounter} from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);
    
    return (
        <div className="p-4">
            <h1>Counter: <Small value={counter}/> </h1>
            <hr />


            <button
                className="btn btn-primary m-3"
                onClick={increment}>
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={()=>{
                    setShow(!show)
                }}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
