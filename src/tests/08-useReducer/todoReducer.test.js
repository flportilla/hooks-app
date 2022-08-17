import { todoReducer } from "../../08-useReducer/todoReducer"

describe('Tests on reducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo toDo',
        done: false
    }]

    test('should return the initial state', () => {

        const newState = todoReducer(initialState, {})

        expect(newState).toBe(initialState)
    })

    test('should add a ToDo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'New todo',
                done: false
            }
        }

        const newState = todoReducer(initialState, action)

        expect(newState.length).toBe(2)
        expect(newState).toContain(action.payload)

    })

    test('should delete a ToDo', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action)

        expect(newState.length).toBe(0)
    })

    test('should toggle a ToDo', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action)
        expect(newState[0].done).toBe(true)

        const newState2 = todoReducer(newState, action)
        expect(newState2[0].done).toBe(false)
    })

})