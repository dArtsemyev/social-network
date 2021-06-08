import React from "react";
import s from "./ProfileInfo.module.css"

function ProfileInfo() {
    return (
        <div className={s.profileInfo}>
            <div>
                <img src="https://fabrikabz.ru/assets/gallery/17/1049.jpg" alt="content-pic"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;