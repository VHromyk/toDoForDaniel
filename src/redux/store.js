import { createStore } from "redux";
import { todoReducer } from "./todo/todo-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(todoReducer, composeWithDevTools());

export default store;
