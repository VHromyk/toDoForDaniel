import { action } from '../todo/todo-types';

const initialState = {
  todos: [],
  isEditTodo: false,
};

export function todoReducer(state = initialState, { type, payload }) {
    switch (type) {
        case action.ADD_TODO:
            return {
              ...state,
              todos: [...state.todos, payload],
            };

        case action.EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === payload.todo.id) {
                        return {
                            ...todo,
                            text: payload.text,
                        };
                    }
                    return todo;
                }),
            };

        case action.EDIT_BUTTON_TODO:
            return {
                ...state,
                isEditTodo: payload,
            };

        case action.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== payload.id),
            };

        case action.TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === payload.id) {
                        return {
                            ...todo,
                            isChecked: !todo.isChecked,
                        };
                    }

                    return todo;
                }),
            };

        default:
            return state;
    }
}
