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
  editTodo,
  isEditTodo,
  addEditTodoButton,
  setSelectTaskId,
}) => {
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    setTextValue(changeText);
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
      text: textValue,
      isChecked: false,
    };

    const checkTaskById = todoValues.find((todo) => todo.id === selectedTaskId);

    const checkTaskByText = todoValues.find(
      (task) => task.text === newTodo.text
    );

    if (checkTaskByText) {
      notification.showError();
      return;
    } else if (checkTaskById) {
      const objForEditTodo = {
        todo: checkTaskById,
        newText: textValue,
      };

      editTodo(objForEditTodo);
      addEditTodoButton(false);
      setSelectTaskId(null);
    } else if (!checkTaskById && newTodo.text) {
      addNewTodo(newTodo);
    }
    setTextValue("");
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
            value={textValue}
            onChange={(event) => setTextValue(event.target.value)}
            placeholder="Enter text of the task..."
          ></TextField>
        </div>
        <Button className="btn" type="submit">
          {isEditTodo ? "Edit Todo" : "Add Todo"}
        </Button>

        <ToastContainer delay={3000} position="top-center" />
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  todoValues: state.todos,
  isEditTodo: state.isEditTodo,
});

const mapDispatchToProps = (dispatch) => ({
  addNewTodo: (todo) => dispatch(actions.addTodo(todo)),
  editTodo: (objForEditTodo) => dispatch(actions.editTodo(objForEditTodo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
