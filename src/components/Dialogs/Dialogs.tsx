import React, {ChangeEvent} from "react";
import style from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/store";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessagesText: string
    sendMessage: () => void
    updNewMessageText: (text:string) => void
}

export const Dialogs :React.FC<DialogsPropsType> = (props) => {
    /*const sendMessage = () => {
        props.dispatch(sendMessageAC())
    }*/

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updNewMessageText(e.currentTarget.value)
    }

    return (
        <div className={style.wrap}>
            <h1 className={style.title}>Dialogs</h1>
            <div className={style.dialogsItems}>
                {props.dialogs.map((d) => <Dialog id={d.id} name={d.name}/>)}
            </div>
            <div className={style.messages}>
                {props.messages.map((m) => <Message message={m.message}/>)}
                <textarea
                    placeholder={"write the message"}
                    value={props.newMessagesText}
                    onChange={onChangeTextareaHandler}>
                </textarea>
                <button onClick={props.sendMessage}>Add message</button>
            </div>
        </div>
    )
}

