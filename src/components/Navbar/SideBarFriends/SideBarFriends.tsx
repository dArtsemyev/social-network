import React from "react";
import s from "./SideBarFriends.module.css"
import {FriendType} from "../../../redux/state";
import {FriendAvaColumnView} from "../../FriendAvaColumnView/FriendAvaColumnView";

type SideBarFriendsPropsType = {
    friends: Array<FriendType>
}

export function SideBarFriends(props: SideBarFriendsPropsType) {

    let stringOfFriends = props.friends.map(friend => {
        return (
            <FriendAvaColumnView key={friend.id} name={friend.name} friendAva={friend.ava}/>
        );
    })

    return (
        <div className={s.SideBarFriends}>
            <h4>Friends</h4>
            <div>
                {stringOfFriends}
            </div>
        </div>
    );
}

