import React, {ChangeEvent} from "react"
import style from "../Profile/AddPost/AddPost.module.css";
import {ActionsTypes, updNewPostTextAC} from "../../redux/state";

type TextareaPropsType = {
    newItemText: string
    dispatch: (action: ActionsTypes) => void
}

export const Textarea: React.FC<TextareaPropsType> = (props) => {
    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updNewPostTextAC(e.currentTarget.value))
    }

    return (
        <textarea
            placeholder={"write the message"}
            className={style.textarea}
            value={props.newItemText}
            onChange={onChangeTextareaHandler}
        >
        </textarea>
    )
}