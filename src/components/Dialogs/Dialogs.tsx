import React from "react"
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.item}>
                    <NavLink to="/dialogs/dmitry" activeClassName={s.active}>Dmitry</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs/vasya" activeClassName={s.active}>Vasya</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs/petya" activeClassName={s.active}>Petya</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs/kolya" activeClassName={s.active}>Kolya</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Good by</div>
            </div>
        </div>
    );
}

export default Dialogs;