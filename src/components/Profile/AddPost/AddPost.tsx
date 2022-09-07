import React from "react";
import style from "./AddPost.module.css";
import {Textarea} from "../../Textarea/Textarea";
import {Button} from "../../Button/Button";

type AddPostType = {
    newPostText: string
    updNewPostText: (text: string) => void
    addPost: () => void
}

export const AddPost: React.FC<AddPostType> = (props) => {
    const isDisabled = !props.newPostText

    return (
        <div className={style.wrap}>
            <Textarea newItemText={props.newPostText} updNewPostText={props.updNewPostText}/>
            <Button addPost={props.addPost} isDisabled={isDisabled}/>
        </div>
    )
}

