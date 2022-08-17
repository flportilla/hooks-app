import React from 'react'
import PropTypes from 'prop-types'

export const TodoItem = ({ todo, handleDeleteTodo, onToggleTodo }) => {

    return (
        <li className="list-group-item d-flex justify-content-between">
            <span
                className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
                onClick={() => onToggleTodo(todo.id)}
                aria-label="span"
            >
                {todo.description}
            </span>
            <button
                type="button"
                className='btn btn-danger'
                onClick={() => handleDeleteTodo(todo.id)}
                aria-label="delete-button"
            >
                Delete
            </button>
        </li>
    )
}

TodoItem.proptype = {
    todo: PropTypes.object,
    handleDeleteTodo: PropTypes.func,
    onToggleTodo: PropTypes.func
}