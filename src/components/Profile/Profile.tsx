import React from "react";
import style from "./ProfileInfo/ProfileInfo.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostType} from "../../redux/state";

type ProfilePropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <main className={style.wrap}>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                dispatch={props.dispatch}
                newPostText={props.newPostText}
            />
        </main>
    )
}

