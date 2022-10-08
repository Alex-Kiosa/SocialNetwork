import {ActionsTypes, DialogsPageType, MessageType} from "./redux-store";
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

const initialState = {
    newMessagesText: "",
    dialogs: [
        {id: v1(), name: "Uinston_Cherchill"},
        {id: v1(), name: "Napoleon Hill"},
        {id: v1(), name: "Albert Einstein"},
        {id: v1(), name: "Amelia Earhart"}
    ],
    messages: [
        {id: v1(), message: "Никогда, никогда, вашу мать, не сдавайтесь!"},
        {
            id: v1(),
            message: "Что разум человека может постигнуть и во что он может поверить, того он способен достичь"
        },
        {id: v1(), message: "Стремитесь не к успеху, а к ценностям, которые он дает"},
        {id: v1(), message: "Сложнее всего начать действовать, все остальное зависит только от упорства."}
    ]
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
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