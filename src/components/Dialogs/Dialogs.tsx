import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import store, {
    ActionsTypes,
    DialogPageType,
} from "../../redux/state";

import {addMessageActionCreator,updateNewMessageAC} from "../../redux/dialogs-reducer";


type DialogsType={
    state: DialogPageType
    dispatch:(action: ActionsTypes)=>void

}


const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogsElements = props.state.dialogs.map((dialog) => <DialogItem dialog = {dialog} />);

   let messagesElements = props.state.messages.map((message) => <Message message={message} />);

    const addMessage = ()=>{
        props.dispatch(addMessageActionCreator())
    }
    const newMessageChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        let message = e.currentTarget.value
        props.dispatch(updateNewMessageAC(message))

    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea placeholder='Enter your message' onChange={newMessageChangeHandler} value={props.state.newMessageBody}></textarea></div>
                <div>
                    <button onClick={addMessage}>Send message</button>
                </div>

            </div>


        </div>
    )
}

export default Dialogs
