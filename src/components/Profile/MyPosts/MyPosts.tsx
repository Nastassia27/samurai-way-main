import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {


    let posts = [
        {id: 1, message: 'hi', likesCount: 12},
        {id: 2, message: 'How are you', likesCount: 10},
        {id: 3, message: 'Good', likesCount: 100}
    ]
    let postsElements = posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h2>My Posts</h2>
            <div>
                <textarea></textarea></div>
            <div>
                <button>Add post</button>
            </div>

            <div>
                new post
            </div>
            <div className={s.posts}>

                {postsElements}

            </div>
        </div>

    )
}

export default MyPosts;