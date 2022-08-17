import { fireEvent, render, screen } from '@testing-library/react'
import { TodoItem } from '../../08-useReducer/TodoItem';

describe('Tests on <TodoItem/> component', () => {

    const todo = {
        id: 1,
        description: 'buy milk',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks())

    test('should show the pending ToDo', () => {



        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            handleDeleteTodo={onDeleteTodoMock}
        />)

        const liElement = screen.getByRole('listitem')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).not.toContain('text-decoration-line-through')
    })


    test('should show the complete ToDo', () => {
        todo.done = true
        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            handleDeleteTodo={onDeleteTodoMock}
        />)

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')
    })

    test('The span should call the ToggleTodo when click', () => {

        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            handleDeleteTodo={onDeleteTodoMock}
        />)

        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement)

        expect(onToggleTodoMock).toHaveBeenCalled()
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)

    })

    test('The button should call the handleDeleteTodo when click', () => {

        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            handleDeleteTodo={onDeleteTodoMock}
        />)

        const deleteButton = screen.getByLabelText('delete-button')
        fireEvent.click(deleteButton)

        expect(onDeleteTodoMock).toHaveBeenCalled()
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)

    })


})