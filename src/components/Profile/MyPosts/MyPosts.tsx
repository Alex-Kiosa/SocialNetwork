import React from "react";
import style from "../ProfileInfo/ProfileInfo.module.css";
import {Post} from "./Post/Post";
import {AddPost} from "../AddPost/AddPost";
import {ActionsTypes, PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const postsElements = props.posts.map(p => <Post key={p.id} text={p.text} likes={p.likes}/>)

    return (
        <div className={style.wrap}>
            <AddPost
                dispatch={props.dispatch}
                newPostText={props.newPostText}
            />
            {postsElements}
        </div>
    )
}

