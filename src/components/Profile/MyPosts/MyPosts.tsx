import React from "react";
import style from "../ProfileInfo/ProfileInfo.module.css";
import {Post} from "./Post/Post";
import {AddPost} from "../AddPost/AddPost";

type PropsType = {
    posts: Array<{text: string, likes: number}>
}

export const MyPosts = (props: PropsType) => {
    return (
        <div className={style.wrap}>
            <AddPost/>
            {props.posts.map(p =>  <Post text={p.text} likes={p.likes} />)}
        </div>
    )
}

