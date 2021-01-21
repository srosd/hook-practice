import React, {useEffect, useState} from 'react';
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;


    useEffect(()=>{
        // console.log('hey')
    }, [] );

    useEffect(()=>{
        // console.log('formulario cambió')
    }, [formState] );

    useEffect(()=>{
        // console.log('email cambió')
    }, [email] );

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }


    return (
        <div className="p-5">
            <h1>useEffect</h1>  
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange} />
            </div>

            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Tu email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange} />
            </div>

            {(name === '123') && <Message />}


        </div>
    )
}
