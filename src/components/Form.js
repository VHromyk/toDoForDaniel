import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toast";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

const Form = ({
  addNewTodo,
  changeText,
  todoValues,
  selectedTaskId,
  editTask,
}) => {
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

    const checkTaskById = todoValues.find((todo) => todo.id === selectedTaskId);

    const checkTaskByText = todoValues.find(
      (task) => task.text === newTodo.text
    );

    if (checkTaskByText) {
      notification.showError();
      return;
    } else if (!checkTaskById && newTodo.text) {
      addNewTodo(newTodo);
      setText("");
    } else {
      console.log("EDIT_TASK!!!!!!!!");
      editTask(checkTaskById.id, text);
      setText("");
    }
  };

  return (
    <>
      <h3>Add new task</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <TextField
            id="outlined-basic"
            fullWidth
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Enter text of the task..."
          ></TextField>
        </div>
        <Button className="btn" type="submit">
          Add Task
        </Button>

        <ToastContainer delay={3000} position="top-center" />
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  todoValues: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addNewTodo: (todo) => dispatch(actions.addTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
