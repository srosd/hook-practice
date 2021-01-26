import React, {useMemo, useState} from 'react';
import {useCounter} from '../../hooks/useCounter';
import { procesoPesado } from "../../helpers/ProcesoPesado";

export const MemoHook = () => {

    const {counter, increment} = useCounter(100);
    const [show, setShow] = useState(true);



    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])
    
    return (
        <div className="p-4">
            <h1>MemoHook: <small>{counter}</small>  </h1>
            <hr />

            <p> {memoProcesoPesado} </p>

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
