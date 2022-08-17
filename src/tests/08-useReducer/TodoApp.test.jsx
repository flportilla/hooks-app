import { useTodo } from '../../hooks/useTodo'
import { render, screen } from '@testing-library/react'
import { TodoApp } from '../../08-useReducer/TodoApp'

jest.mock('../../hooks/useTodo')
describe('Tests on <TodoApp/> component', () => {

    useTodo.mockReturnValue({

        todos: [
            { id: 1, description: 'Todo # 1', done: false },
            { id: 2, description: 'Todo # 2', done: true }
        ],

        handleToggleTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleNewTodo: jest.fn(),

        totalTodosCount: 2,
        pendingTodosCount: 1
    })

    test('should show the component correctly', () => {

        render(<TodoApp />)

        expect(screen.getByText('Todo # 1')).toBeTruthy()
        expect(screen.getByText('Todo # 2')).toBeTruthy()
        expect(screen.getByRole('textbox')).toBeTruthy()

    })

})