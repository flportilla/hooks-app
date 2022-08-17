import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], handleDeleteTodo, onToggleTodo }) => {
    return (
        <ul className='list-group'>
            {
                todos.map((todo) =>
                    <TodoItem
                        onToggleTodo={onToggleTodo}
                        handleDeleteTodo={handleDeleteTodo}
                        key={todo.id}
                        todo={todo} />
                )
            }
        </ul>
    )
}
