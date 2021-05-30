import React from "react";
import s from "./Footer.module.css"

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.footerNav}>
                <div className={s.footerNavButton}>
                    <a href="#a">Profile</a>
                </div>
                <div className={s.footerNavButton}>
                    <a href="#a">Messages</a>
                </div>
                <div className={s.footerNavButton}>
                    <a href="#a">News</a>
                </div>
                <div className={s.footerNavButton}>
                    <a href="#a">Music</a>
                </div>
                <div className={s.footerNavButton}>
                    <a href="#a">Settings</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;