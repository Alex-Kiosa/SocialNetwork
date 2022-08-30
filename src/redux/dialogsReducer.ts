import {ActionsTypes, DialogsPageType, MessageType} from "./state";
import {v1} from "uuid";

// Action creators
export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE"
    } as const
}
export const updNewMessageTextAC = (newMessageText: string) => {
    return {
        type: "UPD-NEW-MESSAGE-TEXT",
        newMessageText: newMessageText
    } as const
}

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case "SEND-MESSAGE":
            const newMessage: MessageType = {
                id: v1(),
                message: state.newMessagesText
            }
            state.messages.push(newMessage)
            state.newMessagesText = ""
            return state
        case "UPD-NEW-MESSAGE-TEXT":
            state.newMessagesText = action.newMessageText
            return state
        default:
            return state
    }
}

export default dialogsReducer