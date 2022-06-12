import React from "react";
import style from "./Header.module.css";

export const Header = () => {
    return (
        <header className={style.wrap}>
            <img className={style.logo}
                 src={"https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=s256-rw"}/>
            <div className={style.menu}>
                <a href={"#"} className={style.link}>Item</a>
                <a href={"#"} className={style.link}>Item</a>
                <a href={"#"} className={style.link}>Item</a>
                <a href={"#"} className={style.link}>Item</a>
                <a href={"#"} className={style.link}>Item</a>
                <a href={"#"} className={style.link}>Item</a>
            </div>
        </header>
    )
}