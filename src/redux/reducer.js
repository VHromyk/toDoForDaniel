const initialState = {
  todos: [],
  isEditTodo: false,
};

export function tasksReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case "EDIT_TODO":
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

    case "EDIT_TODO_BUTTON":
      return {
        ...state,
        isEditTodo: payload,
      };

    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id),
      };

    case "TOGGLE_TODO":
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
