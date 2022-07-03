import React from "react";
import style from "./ProfileInfo/ProfileInfo.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../index";

type ProfilePropsType = {
    posts: Array<PostType>
}

export const Profile = ({posts, ...props} : ProfilePropsType) => {
    return (
        <main className={style.wrap}>
            <ProfileInfo />
            <MyPosts posts={posts} />
        </main>
    )
}

