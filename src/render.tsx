import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import state, {addPost, RootStateType, updateNewPostText} from "./redux/state";
import store from "./redux/redux-store"
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree=()=>{

    ReactDOM.render(
        <BrowserRouter>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>,

        </BrowserRouter>,
        document.getElementById('root')
    );
}


//addPost('Samurai JS')
