import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

export function Dialogs(props: DialogsPageType) {

    let dialogElements = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    let messageElements = props.messages.map(message => <Message id={message.id} messages={message.messages}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogElements}

            </div>
            <div className={s.messages}>

                {messageElements}

            </div>
        </div>
    )
}