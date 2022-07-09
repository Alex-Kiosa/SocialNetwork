import React from "react";
import style from "./ProfileInfo/ProfileInfo.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

type ProfilePropsType = {
    posts: Array<PostType>
    addPost: (text: string) => void
    textForNewPost: string
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <main className={style.wrap}>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                addPost={props.addPost}
                textForNewPost={props.textForNewPost}/>
        </main>
    )
}

