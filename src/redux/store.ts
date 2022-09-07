import {v1} from "uuid";
import funder1 from "../assets/img/fundraising/funder-1.jpg";
import funder2 from "../assets/img/fundraising/funder-2.jpg";
import funder3 from "../assets/img/fundraising/funder-3.jpg";
import profileReducer, {addPostAC, updNewPostTextAC} from "./profileReducer";
import dialogsReducer, {sendMessageAC, updNewMessageTextAC} from "./dialogsReducer";
import fundraisingReducer from "./fundraisingReducer";
import sidebarReducer from "./sidebarReducer";

export type StoreType = {
    _callSubscriber: () => void
    _state: RootStateType
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}
export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    fundraisingPage: FundRaisingPageType,
    sidebar: SidebarType,
}
export type DialogType = {
    id: string,
    name: string
}
export type MessageType = {
    id: string,
    message: string
}
export type DialogsPageType = {
    newMessagesText: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type PostType = {
    id: string,
    text: string,
    likes: number
}
export type FundraisingType = {
    id: string,
    image: any, // need to fix
    title: string,
    donatedPeoples: number
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}
export type FundRaisingPageType = {
    fundPosts: Array<FundraisingType>
}
export type SidebarType = {
    profile: string
    messages: string
    fundraising: string
    music: string
    friends: string
}
export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updNewPostTextAC> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof updNewMessageTextAC>

// Store
export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: "",
            posts: [
                {
                    id: v1(),
                    text: "React - это JS библиотека, для эфективной отрисовки (рендеринга) SPA или другрими словами одностраничных вебприложений. Что это значит? Реакт подгружает один html документ, в котором мало html и много js. Далее он отслеживает изменение конкретного узла, элемента, и при необходимости рендерит только его, а не всю все страницу, в отличие от класической работы вебсайтов.",
                    likes: 13
                },
                {
                    id: v1(),
                    text: "Установка приложения на TS: yarn create react-app my-app --template typescript",
                    likes: 4
                }
            ],
        },
        dialogsPage: {
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
        },
        fundraisingPage: {
            fundPosts: [
                {
                    id: v1(),
                    image: {funder1},
                    title: "один",
                    donatedPeoples: 33
                },
                {
                    id: v1(),
                    image: {funder2},
                    title: "два",
                    donatedPeoples: 64
                },
                {
                    id: v1(),
                    image: {funder3},
                    title: "три",
                    donatedPeoples: 59
                },
            ]
        },
        sidebar: {
            profile: "profile",
            messages: "messages",
            fundraising: "fundraising",
            music: " music",
            friends: "friends",
        }
    },
    _callSubscriber() {
        console.log("no observers") // plug
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
        // pattern observe (наблюдатель отслеживает изменения стейта, если стейт меняется - запускаем рендер)
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.fundraisingPage = fundraisingReducer(this._state.fundraisingPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber() // уведомляем подписчиков об изменении стейта
    }
}

