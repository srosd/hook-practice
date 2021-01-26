import React, {useRef} from 'react';

export const FocusScreen = () => {

    const inputRef = useRef();
    // console.log(ref);

    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <div className="p-4">
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref={inputRef}
                className="form-control mb-3" 
                placeholder="Su nombre"
            />

            <button 
                className="btn btn-outline-primary"
                onClick={handleClick}>
                    Focus
            </button>
        </div>
    )
}
