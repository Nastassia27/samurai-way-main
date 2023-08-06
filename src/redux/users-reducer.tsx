import {ActionsTypes} from "./redux-store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        {id: 1, message: 'hi', likesCount: 12},
        {id: 2, message: 'How are you', likesCount: 10},
        {id: 3, message: 'Good', likesCount: 100}
    ],
    newPostText: '' as string,
}
type InitialStateType = typeof initialState
const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case ADD_POST:
            return state
        default:
            return state;
    }

}
export const addPostActionCreator = () => ({type: ADD_POST}) as const
export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
}) as const

export default usersReducer;