
const initialState = [{
    id: 1,
    todo: 'Buy milk',
    done: false
}];

const newTodo = {
    id: 2,
    todo: 'Buy eggs',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

const todoReducer = (state = initialState, action = {}) => {


    if (action.type === '[TODO] add todo') {
        return [...state, action.payload]
    }

    return state
}

let todos = todoReducer()

todos = todoReducer(todos, addTodoAction)
console.log(todos)