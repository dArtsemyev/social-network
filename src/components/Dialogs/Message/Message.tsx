import s from "../Dialogs.module.css";
import React from "react";

type MessagePropsType = {
    id: number
    message: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={`${s.message} ${(props.id%2 !== 0) ? s.messageLeft : s.messageRight}`}>
            <span>{props.message}</span>
        </div>
    );
}