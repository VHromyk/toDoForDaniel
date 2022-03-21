import React from "react";

const ToDo = ({ task, toggleChacked, removeTask }) => {
  const { isChecked, id } = task;

  return (
    <li className={isChecked ? "checked" : "unchecked"}>
      <input
        className="input-checkbox"
        type="checkbox"
        value="Done"
        defaultChecked={isChecked}
        onChange={() => toggleChacked(id)}
      />
      <span className={isChecked ? "text-cnt" : "text-cnt-no"}>
        {task.text}
      </span>
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
