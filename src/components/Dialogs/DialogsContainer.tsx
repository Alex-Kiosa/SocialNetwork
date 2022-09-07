import React from "react";
import {sendMessageAC, updNewMessageTextAC} from "../../redux/dialogsReducer";
import {StoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    // dialogs: Array<DialogType>
    // messages: Array<MessageType>
    // newMessagesText: string
    // dispatch: (action: ActionsTypes) => void
    store: StoreType
}

export const DialogsContainer : React.FC<DialogsPropsType> = (props) => {
    const state = props.store.getState().dialogsPage

    const sendMessageHandler = () => {
        props.store.dispatch(sendMessageAC())
    }

    const updNewMessageTextHandler = (text: string) => {
        props.store.dispatch(updNewMessageTextAC(text))
    }

    return <Dialogs
        dialogs={state.dialogs}
        messages={state.messages}
        newMessagesText={state.newMessagesText}
        updNewMessageText={updNewMessageTextHandler}
        sendMessage={sendMessageHandler}
    />
}

