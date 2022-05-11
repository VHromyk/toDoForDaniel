/* eslint-disable import/no-anonymous-default-export */
// import { types } from '../todo/todo-types'
import { createAction } from '@reduxjs/toolkit';

// export const addTodo = (todo) => {
//     return {
//         type: action.ADD_TODO,
//         payload: todo,
//     };
// };

// export const editTodo = ({ todo, newText }) => {
//     return {
//         type: action.EDIT_TODO,
//         payload: {
//             todo: todo,
//             text: newText,
//         },
//     };
// };

// export const removeTodo = (todoId) => {
//     return {
//         type: action.REMOVE_TODO,
//         payload: todoId,
//     };
// };

// export const toggleTodo = (todo) => {
//     return {
//         type: action.TOGGLE_TODO,
//         payload: todo,
//     };
// };


//Redux toolkit, все что передадим в функцию addTodo попадает в payload
// const addTodo = createAction('todo/add_todo');

const fetchTodoRequest = createAction('todo/fetch_todo_request');
const fetchTodoSuccess = createAction('todo/fetch_todo_success');
const fetchTodoError = createAction('todo/fetch_todo_error');

const addTodoRequest = createAction('todo/add_todo_request');
const addTodoSuccess = createAction('todo/add_todo_success');
const addTodoError = createAction('todo/add_todo_error');

const removeTodoRequest = createAction('todo/remove_todo_request');
const removeTodoSuccess = createAction('todo/remove_todo_success');
const removeTodoError = createAction('todo/remove_todo_error');

const completedTodoRequest = createAction('todo/completed_todo_request');
const completedTodoSuccess = createAction('todo/completed_todo_success');
const completedTodoError = createAction('todo/completed_todo_error');

// Prepare callback -подготовка формы последующего payload
// const editTodo = createAction('todo/edit_todo', (text, todo) => {
//     return {
//         payload: {
//             todo,
//             text,
//         },
//     };
// });
// const removeTodo = createAction('todo/remove_todo');
// const toggleTodo = createAction('todo/toggle_todo');

const actions = {
    fetchTodoRequest,
    fetchTodoSuccess,
    fetchTodoError,
    addTodoRequest,
    addTodoSuccess,
    addTodoError,
    removeTodoRequest,
    removeTodoSuccess,
    removeTodoError,
    completedTodoRequest,
    completedTodoSuccess,
    completedTodoError
};

export default actions;