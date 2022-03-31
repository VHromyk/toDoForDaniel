import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { myAction } from "./redux/actions";
import { actionCreator } from "./redux/actions";

const initialObj = {
  id: 1,
  startDate: Date.now(),
  text: "Закінчити плити перекриття по будинку №1 і почати розбиратись з бекендом",
  isChecked: false,
};

console.log("Store:", store);
console.log(store.dispatch(actionCreator(initialObj)));

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
