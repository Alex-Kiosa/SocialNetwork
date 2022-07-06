import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/img/logo.png";

export const Header = () => {
    return (
        <header className={style.wrap}>
            <a href="/"><img className={style.logo} src={logo}/></a>
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