import React from "react";
import style from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import {Fundraising} from "../Fundraising/Fundraising";

export const NavBar = () => {
    return (
        <nav className={style.wrap}>
            <div className={style.item}>
                <NavLink activeClassName={style.active} to="/profile">Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink activeClassName={style.active} to="/dialogs">Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink activeClassName={style.active} to="/fundraising">Fundraising</NavLink>
            </div>
            <div className={style.item}>
                <NavLink activeClassName={style.active} to="/music">Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink activeClassName={style.active} to="/friends">Friends</NavLink>
            </div>
        </nav>
    )
}