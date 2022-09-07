import React from "react";
import style from "../ProfileInfo/ProfileInfo.module.css";
import {Post} from "./Post/Post";
import {AddPost} from "../AddPost/AddPost";
import {PostType} from "../../../redux/store";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    updNewPostText: (text: string) => void
    addPost: () => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const postsElements = props.posts.map(p => <Post key={p.id} text={p.text} likes={p.likes}/>)

    return (
        <div className={style.wrap}>
            <AddPost
                newPostText={props.newPostText}
                updNewPostText={props.updNewPostText}
                addPost={props.addPost}
            />
            {postsElements}
        </div>
    )
}

