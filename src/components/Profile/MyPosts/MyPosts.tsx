import React from "react";
import style from "../ProfileInfo/ProfileInfo.module.css";
import {Post} from "./Post/Post";
import {AddPost} from "../AddPost/AddPost";
import {updateTextForNewPost} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<{ id: string, text: string, likes: number }>
    addPost: () => void
    textForNewPost: string
    updateTextForNewPost: (string: string) => void
}

export const MyPosts : React.FC<MyPostsPropsType>= (props) => {
    return (
        <div className={style.wrap}>
            <AddPost
                addPost={props.addPost}
                textForNewPost={props.textForNewPost}
                updateTextForNewPost={props.updateTextForNewPost}
            />
            {props.posts.map(p => <Post key={p.id} text={p.text} likes={p.likes}/>)}
        </div>
    )
}

