import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    id: number
    name: string
    ava: string
}

export function DialogItem(props: DialogItemPropsType) {
    return (
        <div className={s.item}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>
                <div className={s.ava}>
                    <img src={props.ava} alt={`${props.name} ava`}/>
                </div>
                <div className={s.name}>
                    {props.name}
                </div>
            </NavLink>
        </div>
    );
}