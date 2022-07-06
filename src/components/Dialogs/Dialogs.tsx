import React from "react";
import style from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../index";

type DialogsPropsType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
}

export const Dialogs = ({dialogs, messages, ...props} : DialogsPropsType) => {
    return (
        <div className={style.wrap}>
            <h1 className={style.title}>Dialogs</h1>
            <div className={style.dialogsItems}>
                {dialogs.map((d) => <Dialog id={d.id} name={d.name}/>)}
            </div>
            <div className={style.messages}>
                {messages.map((m) => <Message message={m.message} />)}
            </div>
        </div>
    )
}

