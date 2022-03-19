import React from "react";

const ToDo = ({ task, toggleChacked }) => {
  const { isChecked, id } = task;

  return (
    <li className={isChecked ? "checked" : "unchecked"}>
      {task.text}
      <input
        type="checkbox"
        value="Done"
        defaultChecked={isChecked}
        onChange={() => {
          toggleChacked(id);
        }}
      />
    </li>
  );
};

export default ToDo;
