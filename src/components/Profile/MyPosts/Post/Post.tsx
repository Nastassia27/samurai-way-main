import React from 'react';
import s from './Post.module.css'
import {PostType} from "../../../../redux/store";


type PropsType={
    post: PostType
}
const Post: React.FC<PropsType> = (props) => {
    return (
        <div>

                <div className={s.item}>
                    <img src='https://img.championat.com/s/735x490/news/big/y/g/avatar-2-sobral-v-rossii-bolshe-2-4-mlrd-rublej_16758793371084217002.jpg'/>
                    {props.post.message}
                    <div>
                    <span>like</span> {props.post.likesCount}
                    </div>
                </div>


        </div>

    )
}

export default Post;