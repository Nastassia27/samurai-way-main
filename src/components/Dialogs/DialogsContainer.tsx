
import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import store, {
    ActionsTypes,
} from "../../redux/redux-store";

import {addMessageActionCreator,updateNewMessageAC} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";


type DialogsType={
    store: AppStateType
    //state: DialogPageType
    dispatch:(action: ActionsTypes)=>void

}
const DialogsContainer: React.FC<DialogsType> = (props) => {
    let state = props.store.dialogsPage

    const addMessage = ()=>{
        props.dispatch(addMessageActionCreator())
    }
    const newMessageChangeHandler=(body: string)=>{
        props.dispatch(updateNewMessageAC(body))
    }

    return (
        <Dialogs updateNewMessageBody={newMessageChangeHandler}
                 addMessage={addMessage}
                 dialogsPage={state}

        />
    )
}

export default DialogsContainer
