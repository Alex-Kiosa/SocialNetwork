import style from "./ProfileInfo.module.css";
import React from "react";

export const ProfileInfo = () => {
    return (
        <div className={style.info}>
            <div className={style.avatar}></div>
            <div className={style.desc}>
                <div className={style.userName}><span>Name:</span> Alex</div>
                <div className={style.userCity}><span>City:</span> Izhevsk</div>
                <div className={style.userAge}><span>Age:</span> 33</div>
            </div>
        </div>
    )
}