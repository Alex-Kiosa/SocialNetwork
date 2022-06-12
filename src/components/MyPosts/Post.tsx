import React from "react";
import style from "./Post.module.css";


type PropsType = {
    text: string
}

export const Post = (props: PropsType) => {
    return (
        <div className={style.wrap}>
            {props.text}
            <div className={style.like}>Like</div>
        </div>
    )
}