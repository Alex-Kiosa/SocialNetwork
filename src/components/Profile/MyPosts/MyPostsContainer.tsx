import React from "react";
import {MyPosts} from "./MyPosts";
import {addPostAC, updNewPostTextAC} from "../../../redux/profileReducer";
import {StoreType} from "../../../redux/redux-store";
import {StoreContext} from "../../../store-context";

type MyPostsPropsType = {
    // store: StoreType
}

export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
    // const state = props.store.getState().profilePage
    // const dispatch = props.store.dispatch

    /*const updNewPostTextHandler = (text: string) => {
        dispatch(updNewPostTextAC(text))
    }

    const addPostHandler = () => {
        dispatch(addPostAC())
    }*/

    /*return (
        <MyPosts
            posts={state.posts}
            newPostText={state.newPostText}
            updNewPostText={updNewPostTextHandler}
            addPost={addPostHandler}
        />
    )*/

    return (
        <StoreContext.Consumer>
            {
                store => {
                    const dispatch = store.dispatch

                    const updNewPostTextHandler = (text: string) => {
                        dispatch(updNewPostTextAC(text))
                    }

                    const addPostHandler = () => {
                        dispatch(addPostAC())
                    }
                    return <MyPosts
                        posts={store.getState().profilePage.posts}
                        newPostText={store.getState().profilePage.newPostText}
                        updNewPostText={updNewPostTextHandler}
                        addPost={addPostHandler}
                    />
                }}
        </StoreContext.Consumer>
    )
}