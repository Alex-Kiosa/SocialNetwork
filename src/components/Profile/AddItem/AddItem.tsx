import React from "react";
import style from "./AddItem.module.css";
import {Textarea} from "../../Textarea/Textarea";
import {Button} from "../../Button/Button";

type AddItemType = {
    newItemText: string
    updNewItemText: (text: string) => void
    addItem: () => void
}

export const AddItem: React.FC<AddItemType> = (props) => {
    const isDisabled = !props.newItemText

    return (
        <div className={style.wrap}>
            <Textarea newItemText={props.newItemText} updNewPostText={props.updNewItemText}/>
            <Button addItem={props.addItem} isDisabled={isDisabled}/>
        </div>
    )
}

