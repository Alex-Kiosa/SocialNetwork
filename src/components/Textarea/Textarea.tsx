import React, {ChangeEvent} from "react"
import style from "./Textarea.module.css"

type TextareaPropsType = {
    newItemText: string
    updNewPostText: (text: string) => void
}

export const Textarea: React.FC<TextareaPropsType> = (props) => {
    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updNewPostText(e.currentTarget.value)
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