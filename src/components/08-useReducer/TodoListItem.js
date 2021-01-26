import React from 'react'

export const TodoListItem = (props) => {
    return (
            <li
            key={ props.todo.id }
            className="list-group-item"
            >
                <p className={`${props.todo.done && 'complete'}`}
                    onClick={()=>props.handleToggle(props.todo.id)}>{props.i+1}. {props.todo.desc}</p>
                <button className="btn btn-danger" onClick={()=>props.handleDelete(props.todo.id)}>
                    Borrar
                </button>
            </li>
    )
}
