import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {ActionsTypes, AppStateType,} from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfileType = {
/*   store: AppStateType*/
  /*  addPost:()=>void
    updateNewPostText: (newText: string)=>void*/
/*   dispatch:(action: ActionsTypes)=>void*/
    //store: AppStateType
}
const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer  />
            {/**posts={props.state.posts} dispatch={props.dispatch} newPostText={props.state.newPostText}*/}
        </div>
    )
}

export default Profile;