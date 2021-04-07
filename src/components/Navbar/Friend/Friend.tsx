import s from "../Navbar.module.css";
import React from "react";
import { FriendsBlockType } from "../../../redux/state";

export function Friend(props: FriendsBlockType) {
    return (
        <div className={s.friend}>
            <div className={s.userAvatar}>
                <img src={props.friendAvatarUrl}
                     alt={`${props.friendName}'s Avatar`}/>
            </div>
            <div className={s.userName}>{props.friendName}</div>
        </div>
    )
}