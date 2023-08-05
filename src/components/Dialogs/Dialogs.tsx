import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator, InitialStateType, updateNewMessageAC} from "../../redux/dialogs-reducer";


type DialogsType={
    updateNewMessageBody: (body: string)=>void
    addMessage:()=>void
    dialogsPage: InitialStateType
}

const Dialogs: React.FC<DialogsType> = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map((dialog) => <DialogItem key = {dialog.id} dialog = {dialog} />);

   let messagesElements = state.messages.map((message) => <Message key = {message.id} message={message} />);

    const addMessage = ()=>{
        props.addMessage()
       // props.dispatch(addMessageActionCreator())
    }
    const newMessageChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
        //props.dispatch(updateNewMessageAC(message))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea placeholder='Enter your message' onChange={newMessageChangeHandler} value={state.newMessageBody}></textarea></div>
                <div>
                    <button onClick={addMessage}>Send message</button>
                </div>

            </div>


        </div>
    )
}

export default Dialogs
