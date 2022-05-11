import ToDo from "./ToDo";
import Form from "./Form";
import Stat from "./Stat";
import operations from "../redux/todo/todo-operations";
import { connect } from "react-redux";

const ToDoList = ({ onRemoveTodo, todos, resolveTodos }) => {
  
    return (
        <>
            <Stat quantity={todos.length}>Your tasks:</Stat>
            <Stat quantity={resolveTodos.length}>Your resolved tasks:</Stat>
            <h3>ToDoList</h3>
            <ul className="list">
                {todos.map((todo) => (
                    <ToDo
                        key={todo.todo_id}
                        todo={todo}
                        // getTaskByClick={getTaskByClick}
                        // onEdit={()=> onEditToDo(todo.todo_id)}
                        onDelete={() => {
                            onRemoveTodo(todo.todo_id);
                        }}
                    />
                ))}
            </ul>
            <Form />
        </>
    );
};

const mapStateToProps = (state) => {
  return {
      todos: state.todos,
      resolveTodos: state.todos.filter((todo) => todo.completed),
  };
};

const mapDispatchToProps = (dispatch) => ({
    onRemoveTodo: (todoId) => dispatch(operations.removeTodo(todoId)),
    // addEditTodoButton: (bool) => dispatch(actions.addEditTodoButton(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
