import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer, secondReducer } from "./reducers";

const logger = (state) => (next) => (action) => {
    console.log("Action : ", action);
    next(action);
};

const store = createStore(
    combineReducers({ users: userReducer, others: secondReducer }),    
    {},
    applyMiddleware(logger));

export default store;

store.dispatch({ type: "ADD_USER", payload: { name: "Younes "}});

console.log(store.getState());