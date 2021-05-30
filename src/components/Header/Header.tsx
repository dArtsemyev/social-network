import React from "react";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="logo"/>
        </div>
    );
}

export default Header;
