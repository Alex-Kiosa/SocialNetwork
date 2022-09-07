import React from "react";
import style from "../Button/Button.module.css";

type ButtonPropsType = {
    isDisabled: boolean
    addPost: () => void
}

export const Button : React.FC<ButtonPropsType> = (props) => {
    let buttonStyles = props.isDisabled ? `${style.button} + ${style.disabled}` : style.button

    return (
        <button
            onClick={props.addPost}
            disabled={props.isDisabled}
            className={buttonStyles}
        >Add post</button>
    )
}