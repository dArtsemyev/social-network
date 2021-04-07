import React from "react";
import {NavLink} from "react-router-dom";
import s from './DialogItem.module.css';
import {DialogsType} from "../../../redux/state";

export function DialogItem(props: DialogsType) {

    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>
                <div className={s.UserDialog}>
                    <div className={s.userAvatar}>
                        <img src="https://i05.fotocdn.net/s106/39fa6af418b5b12a/user_xl/2298797445.jpg"
                             alt="User avatar"
                        />
                    </div>
                    <div className={s.userName}>
                        {props.name}
                    </div>
                </div>
            </NavLink>
        </div>
    )
};