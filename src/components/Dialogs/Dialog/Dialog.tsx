import React from "react";
import {NavLink} from "react-router-dom";

type PropsType = {
    id: string
    name: string
}

export const Dialog = (props: PropsType) => {
    return (
        <div><NavLink to={"/dialogs/"+ props.id}>{props.name}</NavLink></div>
    )
}