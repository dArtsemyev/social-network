import React from "react";
import s from "./Navbar.module.css"

function Navbar() {
    return (
        <div className={s.nav}>
            <div className={`${s.navButton} ${s.active}`}>
                <a href="/profile">Profile</a>
            </div>
            <div className={s.navButton}>
                <a href="/messages">Messages</a>
            </div>
            <div className={s.navButton}>
                <a href="/news">News</a>
            </div>
            <div className={s.navButton}>
                <a href="/music">Music</a>
            </div>
            <div className={s.navButton}>
                <a href="/settings">Settings</a>
            </div>
        </div>
    );
}

export default Navbar;