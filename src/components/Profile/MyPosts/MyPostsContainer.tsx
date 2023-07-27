import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import store, {
    ActionsTypes,
    PostType
} from "../../../redux/store";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsType = {
    posts: PostType[]
    //addPost: () =>void
    newPostText: string;
    //updateNewPostText: (newText: string)=>void
    dispatch: (action: ActionsTypes) => void

}
const MyPostsContainer: React.FC<MyPostsType> = (props) => {
    //let postsElements = props.posts.map((post) => <Post post={post}/>)

    let addPost = () => {
        //props.addPost()
        props.dispatch(addPostActionCreator())
    }
    /*const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        //props.updateNewPostText(text)
        props.dispatch(updateNewPostTextActionCreator(text))
    }*/
    const newTextChangeHandler = (text: string) => {

        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return (
       <MyPosts posts = {props.posts} updateNewPostText={newTextChangeHandler} addPost={addPost}/>
    )
}

export default MyPostsContainer;