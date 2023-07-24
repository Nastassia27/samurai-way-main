import {ActionsTypes, DialogPageType, MessageType, RootStateType, StoreType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Masha'},
        {id: 4, name: 'Lera'},
        {id: 5, name: 'Alina'}
    ],

    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Good and you'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'buy'}

    ],
    newMessageBody: '',
}
const dialogsReducer = (state=initialState, action: ActionsTypes) => {

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