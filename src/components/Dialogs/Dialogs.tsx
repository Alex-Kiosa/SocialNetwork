import React from "react";
import style from "./Dialogs.module.css"
import {Dialog} from "./Dialog";
import {DialogMessages} from "./DialogMessages";

export const Dialogs = () => {
    return (
        <div className={style.wrap}>
            <h1 className={style.title}>Dialogs</h1>
            <div className={style.dialogsItems}>
                <Dialog data={"Наполеон Хилл"}/>
                <Dialog data={"Альберт Эйнштейн"}/>
                <Dialog data={"Амелия Эрхарт"}/>
            </div>
            <div className={style.messages}>
                <DialogMessages data={"Что разум человека может постигнуть и во что он может поверить, того он способен достичь"}/>
                <DialogMessages data={"Стремитесь не к успеху, а к ценностям, которые он дает"}/>
                <DialogMessages data={"Сложнее всего начать действовать, все остальное зависит только от упорства."}/>
            </div>
        </div>
    )
}

