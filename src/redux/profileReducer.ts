import {ActionsTypes, PostType, ProfilePageType} from "./store";
import {v1} from "uuid";

// Action creators
export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const updNewPostTextAC = (newPostText: string) => {
    return {
        type: "UPD-NEW-POST-TEXT",
        newPostText: newPostText
    } as const
}

const initialState = {
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
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: v1(),
                text: state.newPostText,
                likes: 0
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case "UPD-NEW-POST-TEXT":
            state.newPostText = action.newPostText
            return state
        default:
            return state
    }
}

export default profileReducer