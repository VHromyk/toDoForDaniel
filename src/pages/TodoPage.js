import { useEffect } from 'react';
import ToDoList from '../components/TodoList/ToDoList'
import operations from '../redux/todo/todo-operations'
import { connect } from 'react-redux'
import Stats from '../components/Stats/Stats'



const TodoView = ({fetchTodos}) => {

  useEffect(() => {
  fetchTodos()
  }, [])
  
  return (
    <>
    <Stats />
    <ToDoList />
    </>

  )
}


const mapDispatchToProps = (dispatch) => ({
    fetchTodos: () => dispatch(operations.fetchTodo()),
});



export default connect(null, mapDispatchToProps)(TodoView);