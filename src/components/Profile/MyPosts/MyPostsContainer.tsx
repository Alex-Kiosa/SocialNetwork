import React from "react";
import {MyPosts} from "./MyPosts";
import {addPostAC, updNewPostTextAC} from "../../../redux/profileReducer";
import {StoreType} from "../../../redux/redux-store";

type MyPostsPropsType = {
    store: StoreType
}

export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
    const state = props.store.getState().profilePage
    const dispatch = props.store.dispatch

    const updNewPostTextHandler = (text: string) => {
        dispatch(updNewPostTextAC(text))
    }

    const addPostHandler = () => {
        dispatch(addPostAC())
    }

    return <MyPosts
        posts={state.posts}
        newPostText={state.newPostText}
        updNewPostText={updNewPostTextHandler}
        addPost={addPostHandler}
    />
}