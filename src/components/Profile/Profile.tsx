import React from 'react';
/*import s from './Profile.module.css';*/
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfilePagePropsType} from '../../redux/state';

export function Profile(props: ProfilePagePropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
            />
        </div>
    )
}