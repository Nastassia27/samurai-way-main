import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Add post</button>

            <div>
                new post
            </div>
            <div className={s.posts}>
               <Post message='Hi, how are you?' likesCount='0'/>
               <Post message="It's my first post, how are you?" likesCount='23'/>

            </div>
        </div>

    )
}

export default MyPosts;