import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {PostType} from "../../index";

type ProfilePropsType = {
    posts: Array<PostType>
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
}

export default Profile;