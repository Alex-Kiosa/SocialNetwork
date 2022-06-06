import React from "react";
import s from "./Header.module.css";

export const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo}
                 src={"https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=s256-rw"}/>
            <div className={s.menu}>
                <a href={"#"} className={s.item}>Item</a>
                <a href={"#"} className={s.item}>Item</a>
                <a href={"#"} className={s.item}>Item</a>
                <a href={"#"} className={s.item}>Item</a>
                <a href={"#"} className={s.item}>Item</a>
                <a href={"#"} className={s.item}>Item</a>
            </div>
        </header>
    )
}