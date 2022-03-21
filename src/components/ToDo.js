import React from "react";

const ToDo = ({ task, toggleChacked, removeTask, taskEdit }) => {
  const { isChecked, id, text } = task;

  return (
    <li className={isChecked ? "checked" : "unchecked"}>
      <input
        className="input-checkbox"
        type="checkbox"
        value="Done"
        defaultChecked={isChecked}
        onChange={() => toggleChacked(id)}
      />
      <span className={isChecked ? "text-cnt" : "text-cnt-no"}>{text}</span>
      <button
        className="edit-btn"
        type="button"
        onClick={() => taskEdit(id, text)}
      >
        E
      </button>
      <button
        className="delete-btn"
        type="button"
        onClick={() => removeTask(id)}
      >
        X
      </button>
    </li>
  );
};

export default ToDo;
