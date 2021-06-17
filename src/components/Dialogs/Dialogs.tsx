import React from "react"
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css"

function Dialogs() {

    let dialogsData = [
        {id: 1, name: "Dmitry"},
        {id: 2, name: "Vasya"},
    ]
    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello"},
        {id: 3, message: "Good by"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
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