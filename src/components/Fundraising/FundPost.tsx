import React from "react";
import style from "./FundPost.module.css"

type FundPostPropsType = {
    title: string
    donatedPeoples: number
}

export const FundPost: React.FC<FundPostPropsType> = (props) => {
    return (
        <div className={style.post}>
            <img
                className={style.postImg}
                src={"http://demo.foxthemes.net/socialitev2.2/assets/images/funding/funder-3.jpg"}
            ></img>
            <div className={style.postContent}>
                <div className={style.postTitle}>{props.title}</div>
                <div className={style.postFooter}>{props.donatedPeoples} Donated</div>
            </div>
        </div>
    )
}