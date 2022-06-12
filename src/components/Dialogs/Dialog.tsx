import React from "react";

type PropsType = {
    data: string
}

export const Dialog = (props: PropsType) => {
    return (
        <div>{props.data}</div>
    )
}