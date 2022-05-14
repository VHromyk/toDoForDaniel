import ToDo from "../ToDo/ToDo";
import Form from "../Form";
import operations from "../../redux/todo/todo-operations";
import { connect } from "react-redux";
import style from './ToDoList.module.css'


const arrTodos = [
    {
        id: 1,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        completed: false,
    },
    {
        id: 2,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        completed: false,
    },
    {
        id: 3,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        completed: false,
    },
    {
        id: 4,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        completed: false,
    },
    {
        id: 5,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        completed: false,
    },
    {
        id: 6,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        completed: false,
    },
    {
        id: 6,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        completed: false,
    },
    {
        id: 6,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        completed: false,
    },
    {
        id: 6,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        completed: false,
    },
    {
        id: 6,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        completed: false,
    },
];

const ToDoList = ({ onRemoveTodo, todos, resolveTodos }) => {
  
    return (
        <div className={style.list_wrapper}>
            <ul className={style.list_wrapper_container}>
                {arrTodos.map((todo) => (
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
        </div>
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
