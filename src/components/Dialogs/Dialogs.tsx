import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import store, {DialogPageType, RootStateType} from "../../redux/state";


type DialogsType={
    state: DialogPageType
}


const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogsElements = props.state.dialogs.map((dialog) => <DialogItem dialog = {dialog} />);

   let messagesElements = props.state.messages.map((message) => <Message message={message} />);

    /*let newMessageElement = React.createRef<HTMLTextAreaAttribute>();
    let addMessage = ()=>{
        let text = newMessageElement.current.value;
        alert(text)}*/

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                {/*<div>
                    <textarea ref={newMessageElement}></textarea></div>
                <div>
                    <button onClick={addMessage}>Send message</button>
                </div>*/}

            </div>


        </div>
    )
}

export default Dialogs
