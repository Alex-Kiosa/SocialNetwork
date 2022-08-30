import {ActionsTypes, PostType, ProfilePageType} from "./state";
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

const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
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