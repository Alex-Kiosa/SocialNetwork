import React from "react";
import style from "./Profile.module.css";
import {MyPosts} from "../MyPosts/MyPosts";

export const Profile = () => {
    return (
        <main className={style.wrap}>
            <div className={style.info}>
                <div className={style.avatar}></div>
                <div className={style.desc}>
                    <div className={style.userName}><span>Name:</span> Alex</div>
                    <div className={style.userCity}><span>City:</span> Alex</div>
                    <div className={style.userAge}><span>Age:</span> 33</div>
                </div>
            </div>
            <MyPosts />
        </main>
    )
}