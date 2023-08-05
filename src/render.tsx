import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import state, {addPost, RootStateType, updateNewPostText} from "./redux/state";
import store, {AppStateType} from "./redux/redux-store"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

export const rerenderEntireTree=(state: AppStateType)=>{

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
        <App  />,
            {/*state={state}*/}
{/*
                dispatch={store.dispatch.bind(store)} store = {store}
*/}
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())


//addPost('Samurai JS')
