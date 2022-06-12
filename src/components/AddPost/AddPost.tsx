import React from "react";
import style from "../AddPost/AddPost.module.css";

export const AddPost = () => {
    return (
        <div className={style.wrap}>
            <textarea className={style.textarea} name="" id=""></textarea>
            <button className={style.button}>Add post</button>
        </div>
    )
}