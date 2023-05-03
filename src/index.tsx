import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {rerenderEntireTree} from "./render";
import store from "./redux/state";

/*
const rerenderEntireTree=(state)=>{
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,


        document.getElementById('root')
    );
*/
//}


store.subscribe(rerenderEntireTree)
rerenderEntireTree();
//addPost('Samurai JS')
