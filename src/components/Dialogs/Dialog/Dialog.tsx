import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Dialog.module.css";

type PropsType = {
    id: string
    name: string
}

export const Dialog = (props: PropsType) => {
    const path = "/dialogs/" + props.id
    const classes = ({isActive}: { isActive: boolean }) => {
        return isActive ? `${style.item} ${style.active}` : `${style.item}`
    }

    return <div><NavLink className={classes} to={path}>{props.name}</NavLink></div>
}