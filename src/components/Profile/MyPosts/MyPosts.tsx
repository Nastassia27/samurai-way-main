import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType, ProfilePageType} from "../../../redux/state";

type MyPostsType={
    posts: PostType[]
}

/*type MyPostsType={
    posts: Array<PostsArray>
}*/

/*type PostsArray={
    id: number
    message: string
    likesCount: number
}*/
const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElements = props.posts.map((post) => <Post post = {post}/>)
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