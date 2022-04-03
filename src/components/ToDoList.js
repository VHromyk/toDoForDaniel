import React, { useState } from "react";
import ToDo from "./ToDo";
import Form from "./Form";
import Stat from "./Stat";
// import * as actions from "../redux/actions";
import { connect } from "react-redux";

const ToDoList = ({ todosValue }) => {
  const [oldText, setOldText] = useState("");
  const [selectTaskId, setSelectTaskId] = useState(null);

  const getTaskByClick = (taskId, oldText) => {
    setOldText(oldText);
    setSelectTaskId(taskId);
  };

  const resolveTodos = () => todosValue.filter((task) => task.isChecked).length;
  return (
    <>
      <Stat quantity={todosValue.length}>Your tasks:</Stat>
      <Stat quantity={resolveTodos()}>Your resolved tasks:</Stat>
      <h3>ToDoList</h3>
      <ul className="list">
        {todosValue.map((task) => (
          <ToDo key={task.id} task={task} getTaskByClick={getTaskByClick} />
        ))}
      </ul>
      <Form changeText={oldText} selectedTaskId={selectTaskId} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todosValue: state.todos,
  };
};

export default connect(mapStateToProps, null)(ToDoList);
