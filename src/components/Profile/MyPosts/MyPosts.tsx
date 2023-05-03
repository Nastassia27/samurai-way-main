import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import store, {PostType, ProfilePageType} from "../../../redux/state";

type MyPostsType={
    posts: PostType[]
    addPost: () =>void
    newPostText: string;
    updateNewPostText: (newText: string)=>void

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

    let addPost=()=>{

        props.addPost()

        }
    const newTextChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h2>My Posts</h2>
            <div>
                <textarea onChange={newTextChangeHandler} value={props.newPostText}/></div>
            <div>
                <button onClick={addPost}>Add post</button>
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