import React, {ChangeEvent} from "react";
import style from "./AddPost.module.css";
import {updateTextForNewPost} from "../../../redux/state";

type AddPostType = {
    addPost: () => void
    textForNewPost: string
    updateTextForNewPost: (text: string) => void
}

export const AddPost: React.FC<AddPostType> = (props) => {

    const addPostHandler = () => {
        if (props.textForNewPost) {
            props.addPost()
        }
    }

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateTextForNewPost(e.currentTarget.value)
    }

    return (
        <div className={style.wrap}>
            <textarea className={style.textarea} value={props.textForNewPost}
                      onChange={onChangeTextareaHandler}></textarea>
            <button onClick={addPostHandler} className={style.button}>Add post</button>
        </div>
    )
}