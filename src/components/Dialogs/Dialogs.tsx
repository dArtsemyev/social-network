import React from "react"
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css"

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={"Dmitry"} id={1}/>
                <DialogItem name={"Vasya"} id={2}/>
                <DialogItem name={"Petya"} id={3}/>
                <DialogItem name={"Kolya"} id={4}/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="Hello"/>
                <Message message="Good by"/>
            </div>
        </div>
    );
}

function DialogItem(props: any) {
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

function Message(props: any) {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

export default Dialogs;