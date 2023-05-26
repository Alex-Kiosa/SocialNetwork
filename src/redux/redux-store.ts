import {combineReducers, createStore} from "redux";
import profileReducer, {addPostAC, updNewPostTextAC} from "./profileReducer";
import dialogsReducer, {sendMessageAC, updNewMessageTextAC} from "./dialogsReducer";
import fundraisingReducer from "./fundraisingReducer";
import sidebarReducer from "./sidebarReducer";

export type StoreType = typeof store

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

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    fundraisingPage: fundraisingReducer
})

const store = createStore(reducers)

export default store