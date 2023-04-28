import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {RootStateType} from "../../redux/state";


type DialogsType={
    state: RootStateType
}


const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogsElements = props.state.dialogs.map((d:string) => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.state.messages.map((m:string) => <Message message={m.message}/>)

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
