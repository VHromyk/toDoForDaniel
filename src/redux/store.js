// import { createStore } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import todoReducer from "./todo/todo-reducer";
// import { combineReducers } from "redux";
import authReducer from './auth/auth-reducer';
import logger from 'redux-logger';
// import { persistStore, persistReducer } from 'redux-persist';


// Они нужны для работы devtools в обычном redux и в toolkit он не нужен
// import { composeWithDevTools } from "redux-devtools-extension";


// const store = createStore(todoReducer, composeWithDevTools());

const middleware = [...getDefaultMiddleware(), logger];

// const persistReducer = persistReducer()

const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todoReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});


export default store;
