import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import fundraisingReducer from "./fundraisingReducer";
import sidebarReducer from "./sidebarReducer";

export type StoreType = typeof store

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    fundraisingPage: fundraisingReducer
})

const store = createStore(reducers)

export default store