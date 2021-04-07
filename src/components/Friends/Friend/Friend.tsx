import s from "../Friends.module.css";
import React from "react";

export function Friend() {
    return (
        <div className={s.friend}>
            <div className={s.userAvatar}>
                <img src="https://i05.fotocdn.net/s106/39fa6af418b5b12a/user_xl/2298797445.jpg"
                     alt="userAvatar"/>
            </div>
            <div className={s.userName}>Vasya</div>
        </div>
    )
}