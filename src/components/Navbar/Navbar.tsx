import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"

function Navbar() {
    return (
        <div className={s.nav}>
            <div className={s.navButton}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.navButton}>
                <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.navButton}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.navButton}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.navButton}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
        </div>
    );
}

export default Navbar;