import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {rerenderEntireTree} from "./render";
import store from "./redux/redux-store";

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
store.subscribe(()=>{
   let state = store.getState()
    rerenderEntireTree(state)
})

//addPost('Samurai JS')
