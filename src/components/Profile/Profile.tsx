import React from "react";
import style from "./ProfileInfo/ProfileInfo.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType, updateTextForNewPost} from "../../redux/state";

type ProfilePropsType = {
    posts: Array<PostType>
    addPost: () => void
    textForNewPost: string
    updateTextForNewPost: (text: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <main className={style.wrap}>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                addPost={props.addPost}
                textForNewPost={props.textForNewPost}
                updateTextForNewPost={props.updateTextForNewPost}
            />
        </main>
    )
}

