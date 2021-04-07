import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css';
import {SideBarType} from "../../redux/state";
import {Friend} from "./Friend/Friend";


export function Navbar(props: SideBarType) {

    let sideBarMenuItems = props.sideBarMenu
    let friendsBlockItems = props.friendsBlock

    return (
        <nav className={s.nav}>
            {
                sideBarMenuItems.map(m => {
                    return (
                        <div className={s.item}>
                            <NavLink to={m.path} activeClassName={s.active}>{m.sideBarMenuItemName}</NavLink>
                        </div>
                    )
                })
            }
            <h3>Friends</h3>
            <div className={s.friends}>
                {
                    friendsBlockItems.map(i => {
                        return <Friend id={i.id}
                                       friendAvatarUrl={i.friendAvatarUrl}
                                       friendName={i.friendName}
                        />
                    })
                }
            </div>
        </nav>
    )
}