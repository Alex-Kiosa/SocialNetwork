import React from "react";
import style from "../Profile/Profile.module.css";
import {Post} from "./Post";
import {AddPost} from "../AddPost/AddPost";

export const MyPosts = () => {
    return (
        <div className={style.wrap}>
            <AddPost/>
            <Post text="React - это JS библиотека, для эфективной отрисовки (рендеринга) SPA или другрими словами одностраничных вебприложений. Что это значит? Реакт подгружает один html документ, в котором мало html и много js. Далее он отслеживает изменение конкретного узла, элемента, и при необходимости рендерит только его, а не всю все страницу, в отличие от класической работы вебсайтов." />
            <Post text="Установка приложения на TS: yarn create react-app my-app --template typescript" />
        </div>
    )
}

