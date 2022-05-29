import actions from './todo-actions';
import TodoService from '../../service/TodoService';

const fetchTodo = () => (dispatch) => {
  dispatch(actions.fetchTodoRequest());

  TodoService.getAllTodos().then(({ data }) => {
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
  
  TodoService.addTodo(todo).then(({ data }) =>
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

  TodoService.completedTodo(todo.todo_id, newTodo).then(() => {
            dispatch(actions.completedTodoSuccess(todo));
        })
        .catch((error) => dispatch(actions.completedTodoError(error)));
};


const removeTodo = (todoId) => (dispatch) => {

  dispatch(actions.removeTodoRequest());
  
  TodoService.removeTodo(todoId).then(() => {
            dispatch(actions.removeTodoSuccess(todoId));
        })
        .catch((error) => dispatch(actions.removeTodoError(error)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {fetchTodo, addTodo, completedTodo, removeTodo }