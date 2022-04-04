export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export const editTodo = ({ todo, newText }) => {
  return {
    type: "EDIT_TODO",
    payload: {
      todo: todo,
      text: newText,
    },
  };
};

export const removeTodo = (todo) => {
  return {
    type: "REMOVE_TODO",
    payload: todo,
  };
};

export const toggleTodo = (todo) => {
  return {
    type: "TOGGLE_TODO",
    payload: todo,
  };
};
