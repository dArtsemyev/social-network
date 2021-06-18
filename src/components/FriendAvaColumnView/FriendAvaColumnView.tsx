import React from "react";
import s from "./FriendAvaColumnView.module.css"

type FriendAvaColumnViewPropsType = {
    name: string
    friendAva: string
}

export function FriendAvaColumnView(props: FriendAvaColumnViewPropsType) {
    return (
        <div className={s.FriendAvaColumnView}>
            <div className={s.ava}>
                <img src={props.friendAva} alt={`${props.name} ava`}/>
            </div>
            <div className={s.name}>
                {props.name}
            </div>
        </div>
    );
}