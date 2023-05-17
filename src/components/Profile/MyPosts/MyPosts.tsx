import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import store, {
    ActionsTypes,
    PostType
} from "../../../redux/store";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type MyPostsType = {
    posts: PostType[]
    //addPost: () =>void
    newPostText: string;
    //updateNewPostText: (newText: string)=>void
    dispatch: (action: ActionsTypes) => void

}
const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElements = props.posts.map((post) => <Post post={post}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.postsBlock}>
            <h2>My Posts</h2>
            <div>
                <textarea onChange={newTextChangeHandler} value={props.newPostText}/></div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>

                {postsElements}

            </div>
        </div>

    )
}

export default MyPosts;