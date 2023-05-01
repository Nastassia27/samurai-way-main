import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogPageType, RootStateType} from "../../redux/state";


type DialogsType={
    state: DialogPageType
}


const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogsElements = props.state.dialogs.map((dialog) => <DialogItem dialog = {dialog} />);

   let messagesElements = props.state.messages.map((message) => <Message message={message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}


            </div>

        </div>
    )
}

export default Dialogs
