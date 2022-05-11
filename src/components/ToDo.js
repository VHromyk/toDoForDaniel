import React from "react";
import { connect } from "react-redux";
import operations from "../redux/todo/todo-operations";
import EditTodo from "./EditTodo";

const ToDo = ({
  todo,
  completedTodo,
  onDelete,
  onEdit
}) => {
  return (
    <>
      <li>
        <input
          className="input-checkbox"
          type="checkbox"
          value="Done"
          defaultChecked={todo.completed}
          onChange={() => {
            completedTodo(todo)
          }}
        />
        <div className="content-wrapper">
          {/* <p className={"date"}>{getCreateDate}</p> */}
          <p>{todo.description}</p>
        </div>
        <EditTodo todo={todo}/>
        <div className="button-wrapper">
          <button
            className="delete-btn"
            type="button"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  
  completedTodo: (todo) => {
    dispatch(operations.completedTodo(todo))
  },
});

export default connect(null, mapDispatchToProps)(ToDo);
