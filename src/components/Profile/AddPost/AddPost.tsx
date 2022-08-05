import React from "react";
import style from "./AddPost.module.css";
import {ActionsTypes} from "../../../redux/state";
import {Textarea} from "../../Textarea/Textarea";
import {Button} from "../../Button/Button";

type AddPostType = {
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export const AddPost: React.FC<AddPostType> = (props) => {
    const isDisabled = !!props.newPostText

    return (
        <div className={style.wrap}>
            <Textarea newItemText={props.newPostText} dispatch={props.dispatch}/>
            <Button dispatch={props.dispatch} isDisabled={isDisabled}/>
        </div>
    )
}

