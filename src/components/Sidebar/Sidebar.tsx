import React from 'react';
import s from './Sidebar.module.css';
import {FriendsType} from "../../redux/state";

type PropsType={
    friend: FriendsType
}
export const Sidebar: React.FC<PropsType> = (props) => {
    return(
        <div className={s.sidebar}>

            <img src='https://img.championat.com/s/735x490/news/big/y/g/avatar-2-sobral-v-rossii-bolshe-2-4-mlrd-rublej_16758793371084217002.jpg'/>
            {props.friend.name}

        </div>
    )
}

