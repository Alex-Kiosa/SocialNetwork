import React from "react";
import style from "./ProfileInfo/ProfileInfo.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    const posts = [
        {text: "React - это JS библиотека, для эфективной отрисовки (рендеринга) SPA или другрими словами одностраничных вебприложений. Что это значит? Реакт подгружает один html документ, в котором мало html и много js. Далее он отслеживает изменение конкретного узла, элемента, и при необходимости рендерит только его, а не всю все страницу, в отличие от класической работы вебсайтов.", likes: 13},
        {text: "Установка приложения на TS: yarn create react-app my-app --template typescript", likes: 4}
    ]

    return (
        <main className={style.wrap}>
            <ProfileInfo />
            <MyPosts posts={posts} />
        </main>
    )
}

