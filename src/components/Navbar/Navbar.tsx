import React from "react";
import s from "./Navbar.module.css"

function Navbar() {
    return (
        <div className={s.nav}>
            <div className={`${s.navButton} ${s.active}`}>
                <a href="#a">Profile</a>
            </div>
            <div className={s.navButton}>
                <a href="#a">Messages</a>
            </div>
            <div className={s.navButton}>
                <a href="#a">News</a>
            </div>
            <div className={s.navButton}>
                <a href="#a">Music</a>
            </div>
            <div className={s.navButton}>
                <a href="#a">Settings</a>
            </div>
        </div>
    );
}

export default Navbar;