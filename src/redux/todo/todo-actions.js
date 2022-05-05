import { action } from '../todo/todo-types'

export const addTodo = (todo) => {
    return {
        type: action.ADD_TODO,
        payload: todo,
    };
};

export const editTodo = ({ todo, newText }) => {
    return {
        type: action.EDIT_TODO,
        payload: {
            todo: todo,
            text: newText,
        },
    };
};

export const removeTodo = (todo) => {
    return {
        type: action.REMOVE_TODO,
        payload: todo,
    };
};

export const toggleTodo = (todo) => {
    return {
        type: action.TOGGLE_TODO,
        payload: todo,
    };
};

export const addEditTodoButton = (payload) => {
    return {
        type: action.EDIT_BUTTON_TODO,
        payload: payload,
    };
};
