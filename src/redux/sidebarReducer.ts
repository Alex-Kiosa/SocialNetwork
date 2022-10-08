import {ActionsTypes, SidebarType} from "./redux-store";

const initialState = {
    profile: "profile",
    messages: "messages",
    fundraising: "fundraising",
    music: " music",
    friends: "friends",
}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionsTypes) => {
    return state
}

export default sidebarReducer