import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import state, {addPost, RootStateType, updateNewPostText} from "./redux/state";
import store, {AppStateType} from "./redux/redux-store"
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree=(state: AppStateType)=>{

    ReactDOM.render(
        <BrowserRouter>
        <App  dispatch={store.dispatch.bind(store)} store = {store}/>,
            {/*state={state}*/}

        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())


//addPost('Samurai JS')
