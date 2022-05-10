import React, { useState, useEffect } from "react";
import ToDo from "./ToDo";
import Form from "./Form";
import Stat from "./Stat";
import operations from "../redux/todo/todo-operations";
import { connect } from "react-redux";
import axios from 'axios';


const ToDoList = ({todos, onDelete }) => {



  // const fetchToDos = async () => {
  //     try {
  //         const response = await axios.get('http://localhost:5000/todos')
          
  //       const result = await response.data;
        
  //       setData(result);

  //     } catch (error) {
  //         console.error(error);
  //     }
  // };
  
  // useEffect(() => {
  //   fetchToDos();
  // }, [])


  console.log(todos);

  // const resolveTodos = () => todosValue.filter((task) => task.isChecked).length;
  return (
    <>
      <Stat quantity={todos.length}>Your tasks:</Stat>
      {/* <Stat quantity={resolveTodos()}>Your resolved tasks:</Stat> */}
      <h3>ToDoList</h3>
      <ul className="list">
        {todos.map((todo) => (
          <ToDo
            key={todo.todo_id}
            todo={todo}
            // getTaskByClick={getTaskByClick}
            // onEdit={()=> onEditToDo(todo.todo_id)}
            onDelete={() => {
              onDelete(todo.todo_id)
            }}
          />
        ))}
      </ul>
      <Form
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = dispatch => ({
  onDelete: todoId => dispatch(operations.removeTodo(todoId)),
  // addEditTodoButton: (bool) => dispatch(actions.addEditTodoButton(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
