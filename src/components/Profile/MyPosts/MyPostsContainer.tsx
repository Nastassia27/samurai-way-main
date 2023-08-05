import React, {ChangeEvent} from 'react';
import store, {
    ActionsTypes, AppStateType
} from "../../../redux/redux-store";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import Post from "./Post/Post";
import {connect} from "react-redux";
import {addMessageActionCreator, updateNewMessageAC} from "../../../redux/dialogs-reducer";

let mapStateToProps = (state: AppStateType)=>{
    return {
        posts:state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsTypes)=>void)=>{
    return {
        updateNewPostText:(text: string)=>{
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost:()=>{
        dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer;