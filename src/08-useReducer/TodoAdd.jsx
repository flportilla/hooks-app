import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ handleNewTodo }) => {

    const { formState, onInputChange, onResetForm } = useForm({
        description: '',
    })

    const { description } = formState

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (description.length <= 1) return

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }
        handleNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="What to do?"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
            />

            <button
                type="submit"
                className='btn btn-outline-primary mt-1'
            >
                Add
            </button>
        </form>
    )
}
