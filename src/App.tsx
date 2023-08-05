import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
//import {RootStateType, StoreType, updateNewPostText} from "./redux/state";
import store, {ActionsTypes, AppStateType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
type AppPropsType={
    store: AppStateType
    dispatch:(action: ActionsTypes)=>void
    /*addPost:()=>void
    updateNewPostText: (newText: string)=>void*/
}

const App: React.FC<AppPropsType> = (props) =>{


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar store = {props.store} />
                {/*state={props.state.sidebar.friends}*/}

                <div className='app-wrapper-content'>


                    <Route path='/dialogs' render={() => <DialogsContainer store = {props.store}  dispatch={props.dispatch}/>}/>
                    {/*state={props.state.dialogsPage}*/}
                    <Route path='/profile' render={() => <Profile store = {props.store} dispatch={props.dispatch}/>}/>
                    {/*state={props.state}*/}
                </div>
            </div>
        </BrowserRouter>

    );
}


export default App;
