import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export function DialogItem(props: any) {
    return (
        <div className={s.item}>
            <NavLink to={"/dialogs/" + props.id}
                     activeClassName={s.active}>
                {
                    props.name
                }
            </NavLink>
        </div>
    );
}