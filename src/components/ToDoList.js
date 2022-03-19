import React, { useState } from "react";
import ToDo from "./ToDo";
import Form from "./Form";
import Stat from "./Stat";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  const resolveTasks = () => tasks.filter((task) => task.isChecked);

  const toggleChacked = (taskId) => {
    const filterArr = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isChecked: !task.isChecked,
        };
      }
      return task;
    });

    setTasks(filterArr);
  };

  const addTask = (el) => {
    setTasks([...tasks, el]);
  };

  return (
    <>
      <Stat quantity={tasks.length}>Your tasks:</Stat>
      <Stat quantity={resolveTasks().length}>Your resolved tasks:</Stat>
      <h3>ToDoList</h3>
      <ul className="list">
        {tasks.map((task) => (
          <ToDo key={task.id} task={task} toggleChacked={toggleChacked} />
        ))}
      </ul>
      <Form addTask={addTask} />
    </>
  );
};

export default ToDoList;
