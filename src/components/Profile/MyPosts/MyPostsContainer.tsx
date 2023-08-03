import React, {ChangeEvent} from 'react';
import store, {
    ActionsTypes, AppStateType
} from "../../../redux/redux-store";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import Post from "./Post/Post";

type MyPostsType = {

    store: AppStateType
    //newPostText: string;
    dispatch: (action: ActionsTypes) => void

}
const MyPostsContainer: React.FC<MyPostsType> = (props) => {
    let state = props.store

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    const newTextChangeHandler = (text: string) => {
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <MyPosts posts={state.profilePage.posts}
                 updateNewPostText={newTextChangeHandler}
                 addPost={addPost}
                 newPostText={state.profilePage.newPostText}

        />
    )
}

export default MyPostsContainer;