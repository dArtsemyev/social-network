import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}/>
        </div>
    );
}

export default Profile;