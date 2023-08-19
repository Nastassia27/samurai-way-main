import React from "react";
import styles from './users.module.css'
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";
import axios from "axios";
import userPhoto from '../../../src/assets/images/maltipu.jpg'


type PropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UsersType>) => void
}
let Users = (props: PropsType) => {
    let getUsers=()=>{
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((res) => {
                debugger
                props.setUsers(res.data.items)
            })
        }
    }



    return <div>
        <button onClick={getUsers}>GetUsers</button>
        {props.users.map(u => <div key={u.id}>
        <span>
            <div>
                <img src={u.photos.small!=null?u.photos.small: userPhoto}
                     className={styles.userPhoto}/>
            </div>
            <div>
                {u.followed
                    ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>}
            </div>
        </span>
            <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            {/*<span> <div>{u.location.country}</div>
                <div>{u.location.city}</div></span>*/}
        </span>
        </div>)}
    </div>
}

export default Users