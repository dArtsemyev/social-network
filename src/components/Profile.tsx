import React from "react";
import s from "./Profile.module.css"

function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src="https://fabrikabz.ru/assets/gallery/17/1049.jpg" alt="content-pic"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Profile;