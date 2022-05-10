import actions from './todo-actions';

import axios from "axios";

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


const removeTodo = (todoId) => (dispatch) => {

    dispatch(actions.removeTodoRequest());

    axios
        .delete(`http://localhost:5000/todos/${todoId}`,)
        .then(({ data }) => {
            dispatch(actions.removeTodoSuccess(data));
        })
        .catch((error) => dispatch(actions.removeTodoError(error)));
};




// eslint-disable-next-line import/no-anonymous-default-export
export default { addTodo, removeTodo }