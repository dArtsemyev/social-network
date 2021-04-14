import React, {RefObject} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {MyPostPropsType} from '../../../redux/state';

export function MyPosts(props: MyPostPropsType) {

    let postElements = props.posts.map(post => <Post id={post.id} message={post.message} likeCount={post.likeCount}/>)

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
            props.addPost()
    }
    const onPostChange = () => {
        if(newPostElement.current?.value) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>

                {postElements}

            </div>
        </div>
    )
}