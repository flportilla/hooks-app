import React from 'react'

import { useTodo } from '../hooks';
import { TodoAdd, TodoList } from './';

export const TodoApp = () => {

    const {
        handleToggleTodo,
        handleDeleteTodo,
        handleNewTodo,
        todos,
        totalTodosCount,
        pendingTodosCount
    } = useTodo();

    return (
        <>
            <h1>
                TodoApp: ({totalTodosCount}),
                <small>Pending: ({pendingTodosCount})</small>
            </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        onToggleTodo={handleToggleTodo}
                        todos={todos}
                        handleDeleteTodo={handleDeleteTodo}
                    />
                </div>

                <div className="col-5">
                    <h4 className='mt-2'>Add ToDo</h4>
                    <hr />
                    <TodoAdd
                        handleNewTodo={handleNewTodo}
                    />
                </div>
            </div>
        </>
    )
}
