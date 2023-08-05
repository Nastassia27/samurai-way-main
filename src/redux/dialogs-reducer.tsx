import {ActionsTypes} from "./redux-store";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Masha'},
        {id: 4, name: 'Lera'},
        {id: 5, name: 'Alina'}
    ] as Array<DialogType>,

    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Good and you'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'buy'}

    ] as Array<MessageType>,
    newMessageBody: '' as string,
}

export type InitialStateType=typeof initialState

const dialogsReducer = (state: InitialStateType=initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 6,
                message: state.newMessageBody,
            };
            /*state.messages.push(newMessage)
            state.newMessageBody = ''
            return state;*/
            return {...state,
                messages: [...state.messages, newMessage],
                newMessageBody: ''
            }
        case UPDATE_NEW_MESSAGE:
            /*state.newMessageBody = action.newMess
            return state;*/
            return {...state,
            newMessageBody: action.newMess
            }
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