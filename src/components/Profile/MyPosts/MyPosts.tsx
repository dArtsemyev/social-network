import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../index";

type MyPostsPropsType = {
    posts: Array<PostType>
}

function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount}/>)


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
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;