import React from "react";
import style from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

type NavBarPropsType = {

}

export const NavBar: React.FC<NavBarPropsType> = (props) => {
    const classes = ({isActive}: {isActive: boolean}) => isActive ? style.active : style.item

    return (
        <nav className={style.wrap}>
            <NavLink className={classes} to="/profile">Profile</NavLink>
            <NavLink className={classes} to="/dialogs">Messages</NavLink>
            <NavLink className={classes} to="/fundraising">Fundraising</NavLink>
            <NavLink className={classes} to="/music">Music</NavLink>
            <NavLink className={classes} to="/friends">Friends</NavLink>
        </nav>
    )
}