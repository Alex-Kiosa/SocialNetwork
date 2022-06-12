import React from "react";

type PropsType  = {
    data: string
}

export const DialogMessages = (props: PropsType) => {
    return (
        <div>{props.data}</div>
    )
}