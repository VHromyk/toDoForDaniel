// import { types } from '../todo/todo-types';
import { createReducer } from '@reduxjs/toolkit';
import actions from './todo-actions';

const state = {
  todos: []
};

// export function todoReducer(state = initialState, { type, payload }) {
//     switch (type) {
//         case action.ADD_TODO:
//             return {
//               ...state,
//               todos: [...state.todos, payload],
//             };

        // case action.EDIT_TODO:
        //     return {
        //         ...state,
        //         todos: state.todos.map((todo) => {
        //             if (todo.id === payload.todo.id) {
        //                 return {
        //                     ...todo,
        //                     text: payload.text,
        //                 };
        //             }
        //             return todo;
        //         }),
        //     };


        // case action.REMOVE_TODO:
        //     return {
        //         ...state,
        //         todos: state.todos.filter(({ id }) => id !== payload),
        //     };

//         case action.TOGGLE_TODO:
//             return {
//                 ...state,
//                 todos: state.todos.map((todo) => {
//                     if (todo.id === payload.id) {
//                         return {
//                             ...todo,
//                             isChecked: !todo.isChecked,
//                         };
//                     }

//                     return todo;
//                 }),
//             };

//         default:
//             return state;
//     }
// }


const todoReducer = createReducer(state.todos, {
    [actions.fetchTodoSuccess]: (_, action) => action.payload,
    [actions.addTodoSuccess]: (state, { payload }) => [...state, payload],
    [actions.removeTodoSuccess]: (state, { payload }) => state.filter(({ todo_id }) => todo_id !== payload),
    [actions.completedTodoSuccess]: (state, action) => state.map((todo) => {
        if (todo.todo_id === action.payload.todo_id) {
            return {
                ...todo,
                completed: !todo.completed
            }
        }
        return todo;
    }),
});


export default todoReducer;