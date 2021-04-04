import React from 'react';
import s from './ProfileInfo.module.css';

export function ProfileInfo() {
    return (
        <div>
            <div>
                <img src="https://photoclub.by/images/main73/737671_main.jpg" width="100%" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                Ava + Description
            </div>
        </div>
    )
}