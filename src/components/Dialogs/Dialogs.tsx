import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";




const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Masha'},
        {id: 4, name: 'Lera'},
        {id: 5, name: 'Alina'}
    ]
    let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);


    let messages = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Good and you'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'buy'}

    ]

    let messagesElements = messages.map((m) => <Message message={m.message}/>)

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
