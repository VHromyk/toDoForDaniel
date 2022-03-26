import React, { useState, useEffect } from "react";
import ToDo from "./ToDo";
import Form from "./Form";
import Stat from "./Stat";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [oldText, setOldText] = useState("");
  const [selectTaskId, setSelectTaskId] = useState(null);

  const resolveTasks = () => tasks.filter((task) => task.isChecked);

  const getTasksFromLocalStorage = () => {
    const parseTasks = JSON.parse(localStorage.getItem("tasks"));

    if (parseTasks) {
      setTasks(parseTasks);
    }
  };

  useEffect(() => {
    getTasksFromLocalStorage();
  }, []);

  const setTasksToLocalStorage = (tasks) => {
    const tasksToString = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasksToString);
  };

  const toggleChacked = (taskId) => {
    const filterArr = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isChecked: !task.isChecked,
          endDate: Date.now(),
        };
      }
      return task;
    });

    setTasksToLocalStorage(filterArr);
    console.log(filterArr);
    setTasks(filterArr);
  };

  const editTask = (taskId, editText) => {
    const filterArr = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          text: editText,
        };
      }
      return task;
    });

    setTasks(filterArr);
    setTasksToLocalStorage(filterArr);
    setOldText("");
    setSelectTaskId(null);
  };

  const addTask = (el) => {
    const joinTasks = [...tasks, el];
    setTasksToLocalStorage(joinTasks);
    setTasks(joinTasks);
  };

  const removeTask = (taskId) => {
    const filterArr = tasks.filter((task) => task.id !== taskId);

    setTasksToLocalStorage(filterArr);
    setTasks(filterArr);
  };

  const getTaskByClick = (taskId, oldText) => {
    setOldText(oldText);
    setSelectTaskId(taskId);
  };

  return (
    <>
      <Stat quantity={tasks.length}>Your tasks:</Stat>
      <Stat quantity={resolveTasks().length}>Your resolved tasks:</Stat>
      <h3>ToDoList</h3>
      <ul className="list">
        {tasks.map((task) => (
          <ToDo
            key={task.id}
            task={task}
            toggleChacked={toggleChacked}
            removeTask={removeTask}
            getTaskByClick={getTaskByClick}
          />
        ))}
      </ul>
      <Form
        addTask={addTask}
        changeText={oldText}
        tasks={tasks}
        selectedTaskId={selectTaskId}
        editTask={editTask}
      />
    </>
  );
};

export default ToDoList;
