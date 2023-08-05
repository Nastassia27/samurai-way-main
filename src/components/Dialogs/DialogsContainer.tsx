
import React, {ChangeEvent} from "react";
import store, {
    ActionsTypes,
} from "../../redux/redux-store";

import {addMessageActionCreator,updateNewMessageAC} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


/*
let state = props.store.dialogsPage
*/
//первый объект для возвращения данные из стэйта а второй callbacks
let mapStateToProps = (state: AppStateType)=>{
    return {
        dialogsPage:state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsTypes)=>void)=>{
    return {
        updateNewMessageBody:(body: string)=>{
            dispatch(updateNewMessageAC(body))
        },
        addMessage:()=>{
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer
