import React from "react";
import {FundraisingType} from "../../redux/state";
import {FundPost} from "./FundPost";

type FundraisingPropsType = {
    fundPosts: Array<FundraisingType>
}

export const Fundraising: React.FC<FundraisingPropsType> = (props) => {
    console.log(props.fundPosts)
    return (
        <>
            {props.fundPosts.map(p => <FundPost title={p.title} donatedPeoples={p.donatedPeoples}/>)}
        </>
    )
}