import React from 'react';
/*import s from './Profile.module.css';*/
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfilePageType} from '../../redux/state';

export function Profile(props: ProfilePageType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}