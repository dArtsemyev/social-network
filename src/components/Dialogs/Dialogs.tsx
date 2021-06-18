import React from "react"
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
}

function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id}
                                                                              name={dialog.name}
                                                                              ava={dialog.ava}
                                                                              id={dialog.id}/>)
    let messagesElements = props.dialogsPage.messages.map(message => <Message key={message.id}
                                                                              message={message.message}
                                                                              id={message.id}/>)

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