import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo = {}) => {

        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatchTodo(action)
    }

    const handleDeleteTodo = (id = '') => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }
        dispatchTodo(action)
    }

    const handleToggleTodo = (id = '') => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }
        dispatchTodo(action)
    }

    const totalTodosCount = todos.length
    const pendingTodosCount = todos.filter(({ done }) => !done).length

    return {
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todos,
        totalTodosCount,
        pendingTodosCount
    }
}
