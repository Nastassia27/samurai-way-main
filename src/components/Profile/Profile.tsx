import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {ActionsTypes, ProfilePageType} from "../../redux/store";


type ProfileType = {
    state: ProfilePageType
   /* addPost:()=>void
    updateNewPostText: (newText: string)=>void*/
    dispatch:(action: ActionsTypes)=>void
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