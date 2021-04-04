import React from 'react';
import s from './Post.module.css';
import {PostsType} from '../../../../redux/state';

export function Post(props: PostsType) {
    return (
        <div className={s.item}>
            <img
                src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701824914.jpg"
                alt="Avatar"/>
            {props.message}
            <div>
                <span> like</span> {props.likeCount}
            </div>
        </div>
    )
}