import React, {RefObject} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

export function Dialogs(props: DialogsPageType) {

    let dialogElements = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    let messageElements = props.messages.map(message => <Message id={message.id} sender={message.sender} messages={message.messages}/>)


    let newMessage: RefObject<HTMLTextAreaElement> = React.createRef()

    const sendMessage = () => {
        let text = newMessage.current?.value
        alert(text)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogElements}

            </div>
            <div className={s.messages}>

                {messageElements}

                <div className={s.sendMessage}>
                    <div className={s.sendMessageTextArea}>
                        <textarea ref={newMessage}></textarea>
                    </div>
                    <div className={s.sendMessageButton}>
                        <button onClick={sendMessage}>add</button>
                    </div>
                </div>

            </div>
        </div>
    )
}