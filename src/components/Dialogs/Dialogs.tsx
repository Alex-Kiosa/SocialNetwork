import React from "react";
import style from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/store";
import {AddItem} from "../Profile/AddItem/AddItem";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessagesText: string
    sendMessage: () => void
    updNewMessageText: (text: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return (
        <div className={style.wrap}>
            <h1 className={style.title}>Dialogs</h1>
            <div className={style.dialogsItems}>
                {props.dialogs.map((d) => <Dialog id={d.id} name={d.name}/>)}
            </div>
            <div className={style.messages}>
                {props.messages.map((m) => <Message message={m.message}/>)}
                <AddItem
                    newItemText={props.newMessagesText}
                    addItem={props.sendMessage}
                    updNewItemText={props.updNewMessageText}
                />
            </div>
        </div>
    )
}

