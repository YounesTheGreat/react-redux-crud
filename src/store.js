import { createStore, combineReducers } from "redux";
import { userReducer, secondReducer } from "./reducers";

const store = createStore(combineReducers({ userReducer, secondReducer }));

export default store;