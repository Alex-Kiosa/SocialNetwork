import React from "react";
import {ActionsTypes} from "../../redux/state";
import {addPostAC} from "../../redux/profileReducer";
import style from "../Button/Button.module.css";

type ButtonPropsType = {
    dispatch: (action: ActionsTypes) => void
    isDisabled: boolean
}

export const Button : React.FC<ButtonPropsType> = (props) => {
    const addPostHandler = () => {
        if (!props.isDisabled) {
            props.dispatch(addPostAC())
        }
    }

    let buttonStyles = props.isDisabled ? `${style.button} + ${style.disabled}` : style.button

    return (
        <button
            onClick={addPostHandler}
            disabled={props.isDisabled}
            className={buttonStyles}
        >Add post</button>
    )
}