import {ActionsTypes, MessageType, RootStateType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state: any, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: 5,
                message: state.newMessageBody,
            };
            state.messages.push(newMessage)
            state.newMessageBody = ''
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageBody = action.newMess
            return state;
        default:
            return state;
    }


}

export const addMessageActionCreator =()=>({type: ADD_MESSAGE}) as const

export const updateNewMessageAC = (message: string)=> ({
    type: UPDATE_NEW_MESSAGE,
    newMess: message
}) as const

export default dialogsReducer;