import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ addTask, changeText, tasks, selectedTaskId, editTask }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(changeText);
  }, [changeText]);

  const onSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uuidv4(),
      text,
      isChecked: false,
    };

    const checkTaskById = tasks.find((task) => task.id === selectedTaskId);
    if (!checkTaskById && newTodo.text) {
      addTask(newTodo);
    } else {
      editTask(checkTaskById.id, text);
    }
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
