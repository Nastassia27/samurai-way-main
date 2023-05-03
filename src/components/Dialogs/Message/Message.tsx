import React from "react";
import s from './../Dialogs.module.css'
import {MessageType} from "../../../redux/state";


type PropsType={
    message: MessageType
}

const Message: React.FC<PropsType> = (props) => {




    return (
        <div className={s.message}>
            {props.message.message}

        </div>
    )
}



export default Message;
