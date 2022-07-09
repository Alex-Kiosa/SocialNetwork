import React from "react";
import style from "./AddPost.module.css";

type AddPostType = {
    addPost: (text: string) => void
    textForNewPost: string
}

export const AddPost: React.FC<AddPostType> = (props) => {
    const addPostHandler = () => {
        props.addPost(props.textForNewPost)
    }

    return (
        <div className={style.wrap}>
            <textarea className={style.textarea} value={props.textForNewPost}></textarea>
            <button onClick={addPostHandler} className={style.button}>Add post</button>
        </div>
    )
}