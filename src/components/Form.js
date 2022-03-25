import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toast";

const Form = ({ addTask, changeText, tasks, selectedTaskId, editTask }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(changeText);
  }, [changeText]);

  const settings = {
    backgroundColor: "#F35B5B",
    color: "#000000",
  };

  const notification = {
    showError: () => toast.error("You have already this task!", settings),
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uuidv4(),
      startDate: Date.now(),
      text,
      isChecked: false,
    };

    const checkTaskById = tasks.find((task) => task.id === selectedTaskId);

    const checkTaskByText = tasks.find((task) => task.text === newTodo.text);

    if (checkTaskByText) {
      notification.showError();
      return;
    } else if (!checkTaskById && newTodo.text) {
      addTask(newTodo);
      setText("");
    }
    editTask(checkTaskById.id, text);
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
        <ToastContainer delay={3000} position="top-center" />
      </form>
    </>
  );
};

export default Form;
