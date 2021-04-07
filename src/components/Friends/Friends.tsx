import React from "react";
import s from "./Friends.module.css"
import {Friend} from "./Friend/Friend";

export function Friends() {
    return (
        <div>
            <h3>Friends</h3>
            <div className={s.friends}>
                <Friend />
                <Friend />
                <Friend />
            </div>
        </div>
    )
}

