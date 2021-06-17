import React from "react"
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css"

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

function Dialogs() {

    let dialogs = [
        {id: 1, name: "Dmitry"},
        {id: 2, name: "Vasya"},
    ]
    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello"},
        {id: 3, message: "Good by"},
    ]

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = messages.map(message => <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;