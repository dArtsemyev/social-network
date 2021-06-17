import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Footer.module.css"

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.footerNav}>
                <div className={s.footerNavButton}>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div className={s.footerNavButton}>
                    <NavLink to="/dialogs">Messages</NavLink>
                </div>
                <div className={s.footerNavButton}>
                    <NavLink to="/news">News</NavLink>
                </div>
                <div className={s.footerNavButton}>
                    <NavLink to="music">Music</NavLink>
                </div>
                <div className={s.footerNavButton}>
                    <NavLink to="settings">Settings</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Footer;