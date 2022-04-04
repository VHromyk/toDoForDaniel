import { createStore } from "redux";
import { tasksReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(tasksReducer, composeWithDevTools());

export default store;
