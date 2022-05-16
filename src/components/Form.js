import React, { useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { connect } from "react-redux";
import operations from "../redux/todo/todo-operations";

const Form = ({onSubmit}) => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (description !== '') {
      onSubmit(description)

      setDescription('');
    }
  }

  return (
    <>
      {/* <h3>Add new task</h3>
      <form onSubmit={onSubmitForm}>
        <div className="form-control">
          <TextField
            id="outlined-basic"
            fullWidth
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter text of the task..."
          ></TextField>
        </div>
        <Button className="btn" type="submit">
          Add Todo
        </Button>
      </form> */}
    </>
  );
};

// const mapStateToProps = (state) => ({
//   todoValues: state.todos,
// });

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (text) => dispatch(operations.addTodo(text)),
    // editTodo: (objForEditTodo) => dispatch(actions.editTodo(objForEditTodo)),
});

export default connect(null, mapDispatchToProps)(Form);
