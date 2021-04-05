import React from "react";
import s from './Message.module.css';
import {MessageType} from "../../../redux/state";

export function Message(props: MessageType) {

    return (
            <div className={s.message}>
                <span className={s.selfMessage + " " + (props.sender === "another_user" ? s.UserMessage : "")}>{props.messages}</span>
            </div>
    )
}