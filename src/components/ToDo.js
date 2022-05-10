import React from "react";
import { connect } from "react-redux";
import actions from "../redux/todo/todo-actions";
import EditTodo from "./EditTodo";

const ToDo = ({
  todo,
  toggleTodo,
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
          // defaultChecked={isChecked}
          onChange={() => toggleTodo(todo)}
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
  
  toggleTodo: (todo) => dispatch(actions.toggleTodo(todo)),
});

export default connect(null, mapDispatchToProps)(ToDo);
