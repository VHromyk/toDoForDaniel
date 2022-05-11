import { useEffect } from 'react';
import ToDoList from '../components/ToDoList'
import operations from '../redux/todo/todo-operations'
import { connect } from 'react-redux'



const TodoView = ({fetchTodos}) => {

  useEffect(() => {
  fetchTodos()
  }, [])
  
  return (
    <ToDoList />

  )
}


const mapDispatchToProps = (dispatch) => ({
    fetchTodos: () => dispatch(operations.fetchTodo()),
});



export default connect(null, mapDispatchToProps)(TodoView);