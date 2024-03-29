/*
const rerenderEntireTree=(state)=>{
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
*/
//}
/*
store.subscribe(rerenderEntireTree)
rerenderEntireTree();*/
/*store.subscribe(()=>{
   let state = store.getState()
    rerenderEntireTree(state)
})*/

//addPost('Samurai JS')
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {AppStateType} from "./redux/redux-store"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />,
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'))


//rerenderEntireTree(store.getState())


//addPost('Samurai JS')

