import React from "react";
import style from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={style.wrap}>
            <div className={style.item}>
                <NavLink activeClassName={style.active} to="/profile">Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/feed">News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}