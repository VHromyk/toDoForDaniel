import React, { useState } from "react";

const Form = ({ addTask }) => {
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 100),
      text,
      isChecked: false,
    };

    addTask(newTodo);
    setText("");
  };

  return (
    <>
      <h3>Add new task</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Enter text of the task..."
          />
        </div>
        <button className="btn">Add Task</button>
      </form>
    </>
  );
};

export default Form;
