import React, {ChangeEvent} from "react";
import style from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {ActionsTypes, sendMessageAC, DialogType, MessageType, updNewMessageTextAC} from "../../redux/state";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessagesText: string
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = ({dialogs, messages, ...props}: DialogsPropsType) => {
    const newMessageRef = React.createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
        props.dispatch(sendMessageAC())
    }

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updNewMessageTextAC(e.currentTarget.value))
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
            <textarea ref={newMessageRef} value={props.newMessagesText} onChange={onChangeTextareaHandler}></textarea>
            <button onClick={sendMessage}>Add message</button>
        </div>
    )
}

