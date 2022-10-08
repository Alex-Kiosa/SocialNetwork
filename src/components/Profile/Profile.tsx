import React from "react";
import style from "./ProfileInfo/ProfileInfo.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/redux-store";

type ProfilePropsType = {
    store: StoreType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <main className={style.wrap}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </main>
    )
}

