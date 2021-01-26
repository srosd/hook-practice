import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = (props) => {
    return (
        <ul className="list-group list-group-flush">
                    {
                        props.todos.map((todo, i) => (
                            <TodoListItem 
                                key={i} 
                                todo={todo} 
                                i={i} 
                                handleToggle={props.handleToggle} 
                                handleDelete={props.handleDelete}/>
                        ))
                    }
                    </ul>
    )
}
