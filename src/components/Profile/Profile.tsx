import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {ProfilePageType} from "../../redux/state";


type ProfileType = {
    state: ProfilePageType
    addPost:()=>void
    updateNewPostText: (newText: string)=>void
}
const Profile: React.FC<ProfileType> = (props) => {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} dispatch={props.dispatch} newPostText={props.state.newPostText} />
        </div>
    )
}

export default Profile;