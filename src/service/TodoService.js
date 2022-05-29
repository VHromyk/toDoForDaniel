import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

class TodoService {
    static async getAllTodos() {
        return axios.get(`${BASE_URL}/todos`);
    }

    static async addTodo(todo) {
        return axios.post(`${BASE_URL}/todos`, todo);
    }

    static async completedTodo(todoId, newTodo) {
        return axios.put(`${BASE_URL}/todos/${todoId}`, newTodo);
    }

    static async removeTodo(todoId) {
        return axios.delete(`${BASE_URL}/todos/${todoId}`);
    }
}

export default TodoService;
