import actions from './todo-actions';

import axios from "axios";


const fetchTodo = () => (dispatch) => {
  dispatch(actions.fetchTodoRequest());

      axios
          .get('http://localhost:5000/todos')
          .then(({ data }) => {
              dispatch(actions.fetchTodoSuccess(data));
          })
          .catch((error) => dispatch(actions.fetchTodoError(error)));
};

const addTodo = (description) => (dispatch) => {
    const todo = {
      description,
      completed: false,
    };

    dispatch(actions.addTodoRequest());

    axios
        .post('http://localhost:5000/todos', todo)
      .then(({ data }) =>
      {
        dispatch(actions.addTodoSuccess(data))
      }
        )
        .catch((error) =>
            dispatch(actions.addTodoError(error))
        );
};

const completedTodo = (todo) => (dispatch) => {
  dispatch(actions.completedTodoRequest());

  const newTodo = {
    ...todo,
    completed: !todo.completed
  }
  
    axios
        .put(`http://localhost:5000/todos/${todo.todo_id}`, newTodo)
      .then(() => {
            dispatch(actions.completedTodoSuccess(todo));
        })
        .catch((error) => dispatch(actions.completedTodoError(error)));
};


const removeTodo = (todoId) => (dispatch) => {

    dispatch(actions.removeTodoRequest());

    axios
        .delete(`http://localhost:5000/todos/${todoId}`,)
        .then(() => {
            dispatch(actions.removeTodoSuccess(todoId));
        })
        .catch((error) => dispatch(actions.removeTodoError(error)));
};




// eslint-disable-next-line import/no-anonymous-default-export
export default {fetchTodo, addTodo, completedTodo, removeTodo }