import React from "react";
import style from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import {SidebarType} from "../../redux/store";

type NavBarPropsType = {
    sidebarElements: SidebarType
}

export const NavBar: React.FC<NavBarPropsType> = (props) => {
    const classes = ({isActive}: {isActive: boolean}) => isActive ? `${style.item} ${style.active}` : style.item

    return (
        <nav className={style.wrap}>
            <NavLink className={classes} to="/profile">{props.sidebarElements.profile}</NavLink>
            <a href="/profile">{props.sidebarElements.profile}</a>
            <NavLink className={classes} to="/dialogs">{props.sidebarElements.messages}</NavLink>
            <NavLink className={classes} to="/fundraising">{props.sidebarElements.fundraising}</NavLink>
            <NavLink className={classes} to="/music">{props.sidebarElements.music}</NavLink>
            <NavLink className={classes} to="/friends">{props.sidebarElements.friends}</NavLink>
        </nav>
    )
}