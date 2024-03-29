import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import store, {
    ActionsTypes, AppStateType,
} from "../../../redux/redux-store";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsType = {
   //posts: PostType[]
    //addPost: () =>void
   newPostText: string;
    //updateNewPostText: (newText: string)=>void
    //dispatch?: (action: ActionsTypes) => void
    updateNewPostText: (text: string)=>void
    addPost: ()=>void
    posts: Array<PostType>

}
const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElements = props.posts.map((post) => <Post post={post}/>)

    let addPost = () => {
        props.addPost()
        //props.dispatch(addPostActionCreator())
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
        //props.dispatch(updateNewPostTextActionCreator(text))
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