import React, {ChangeEvent} from "react";
import style from "./AddPost.module.css";
import {ActionsTypes, addPostAC, updNewPostTextAC} from "../../../redux/state";

type AddPostType = {
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export const AddPost: React.FC<AddPostType> = (props) => {

    const addPostHandler = () => {
        if (props.newPostText) {
            props.dispatch(addPostAC())
        }
    }

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updNewPostTextAC(e.currentTarget.value))
    }

    return (
        <div className={style.wrap}>
            <textarea className={style.textarea} value={props.newPostText}
                      onChange={onChangeTextareaHandler}></textarea>
            <button onClick={addPostHandler} className={style.button}>Add post</button>
        </div>
    )
}