import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from "./store";
import { addUser, removeUser } from "./actions";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


store.dispatch(addUser("Younes"));
store.dispatch(addUser("Hassan"));
store.dispatch(removeUser("Younes"));

console.log(store.getState());