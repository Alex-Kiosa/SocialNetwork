import React from "react";
import style from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
}

export const Dialogs = ({dialogs, messages, ...props}: DialogsPropsType) => {
    const newMessageRef = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        alert(newMessageRef.current?.value)
    }

    return (
        <div className={style.wrap}>
            <h1 className={style.title}>Dialogs</h1>
            <div className={style.dialogsItems}>
                {dialogs.map((d) => <Dialog id={d.id} name={d.name}/>)}
            </div>
            <div className={style.messages}>
                {messages.map((m) => <Message message={m.message}/>)}
            </div>
            <textarea name="" id="" ref={newMessageRef}></textarea>
            <button onClick={addMessage}>Add message</button>
        </div>
    )
}

