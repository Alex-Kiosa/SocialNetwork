import React from "react";
import style from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {v1} from "uuid";

export const Dialogs = () => {
    const dialogs = [
        {id: v1(), name: "Uinston_Cherchill"},
        {id: v1(), name: "Napoleon Hill"},
        {id: v1(), name: "Albert Einstein"},
        {id: v1(), name: "Amelia Earhart"}
    ]

    const messages = [
        {id: v1(), message : "Никогда, никогда, вашу мать, не сдавайтесь!"},
        {id: v1(), message: "Что разум человека может постигнуть и во что он может поверить, того он способен достичь"},
        {id: v1(), message: "Стремитесь не к успеху, а к ценностям, которые он дает"},
        {id: v1(), message: "Сложнее всего начать действовать, все остальное зависит только от упорства."}
    ]

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

