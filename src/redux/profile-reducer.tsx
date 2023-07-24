import {ActionsTypes, MessageType, PostType, ProfilePageType, RootStateType, StoreType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'hi', likesCount: 12},
        {id: 2, message: 'How are you', likesCount: 10},
        {id: 3, message: 'Good', likesCount: 100}
    ],
    newPostText: '',
}
const profileReducer = (state=initialState, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST}) as const
export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
}) as const

export default profileReducer;