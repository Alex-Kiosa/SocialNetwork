import React from "react";
import {ActionsTypes, addPostAC} from "../../redux/state";
import style from "../Profile/AddPost/AddPost.module.css";

type ButtonPropsType = {
    dispatch: (action: ActionsTypes) => void
    isDisabled: boolean
}

export const Button : React.FC<ButtonPropsType> = (props) => {
    const addPostHandler = () => {
        if (props.isDisabled) {
            props.dispatch(addPostAC())
        }
    }

    debugger

    return (
        <button
            onClick={addPostHandler}
            /*disabled={props.isDisabled}// need to fix*/
            className={style.button}
        >Add post</button>
    )
}