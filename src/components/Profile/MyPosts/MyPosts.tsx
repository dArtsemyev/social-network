import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ProfilePageType} from '../../../redux/state';

export function MyPosts(props: ProfilePageType) {

    let postElements = props.posts.map(post => <Post id={post.id} message={post.message} likeCount={post.likeCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>

                {postElements}

            </div>
        </div>
    )
}