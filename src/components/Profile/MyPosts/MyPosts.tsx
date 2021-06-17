import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts() {

    let posts = [
        {id: 1, message: "My first post", likeCount: 15},
        {id: 2, message: "My second post", likeCount: 20},
    ]

    let postsElements = posts.map(post => <Post message={post.message} likeCount={post.likeCount}/>)


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