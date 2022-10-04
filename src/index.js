import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import { Provider } from "react-redux";
const initalState = {
    isLoading :false
}
const reducer = (state,action) =>{
    switch(action.type){
        case "LOADED":
            return {...initalState,isLoading:false}
        default:
            return state;
    }
}
const store = createStore(reducer,initalState);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//libraries to install
//npm install --save redux react-redux to use redux in the react.
//https://blog.logrocket.com/best-react-animation-library-top-7-libraries-compared/



//animation library : https://www.npmjs.com/package/react-animations (animation should work in the div)
//to use animation use aphrodite 
//https://www.npmjs.com/package/aphrodite npm i aphrodite
// using Testimonial
