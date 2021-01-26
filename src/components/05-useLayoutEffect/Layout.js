import React, {useLayoutEffect, useRef, useState} from 'react';
import { useCounter } from '../../hooks/useCounter';
import {useFetch} from '../../hooks/useFetch';

import './layout.css';

export const Layout = () => {

    const {counter, increment} = useCounter(1);

    

    const {data} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);

    const {quote} = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])


    // console.log(author, quote)

    return (
        <div  className="p-5">
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className="blockquote text-end">
                <p className="mb-2" ref={pTag}>{quote}</p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button onClick={increment} className="btn btn-primary">
                Siguiente quote
            </button>


        </div>
    )
}
