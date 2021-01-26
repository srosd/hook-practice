import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import {useFetch} from '../../hooks/useFetch';

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    

    const {loading, data} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);

    const {author, quote} = !!data && data[0];

    // console.log(author, quote)

    return (
        <div  className="p-5">
            <h1>Breaking bad Quotes</h1>
            <hr />

            {
                loading ? 
                    (
                    <div className="alert alert-info text-center">
                        loading...
                    </div>
                    )
                    :
                    (
                    <blockquote className="blockquote text-end">
                        <p className="mb-2">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                    )
            }

            <button onClick={increment} className="btn btn-primary">
                Siguiente quote
            </button>


        </div>
    )
}
