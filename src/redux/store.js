import { createStore } from "redux";

// Reducer принимает предидущий state, и action варит его и возвращает новый стейт.

const reducer = (state = {}, action) => state;

const store = createStore(reducer);

export default store;
