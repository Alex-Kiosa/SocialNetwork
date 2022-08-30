import React, {ChangeEvent} from "react"
import {ActionsTypes} from "../../redux/state";
import {updNewPostTextAC} from "../../redux/profileReducer";
import style from "./Textarea.module.css"

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
            value={props.newItemText}
            onChange={onChangeTextareaHandler}
            className={style.textarea}
        >
        </textarea>
    )
}