import React from "react";
import {FundraisingType} from "../../redux/state";
import {FundPost} from "./FundPost";

type FundraisingPropsType = {
    fundPosts: Array<FundraisingType>
}

export const Fundraising: React.FC<FundraisingPropsType> = (props) => {
    return (
        <>
            {props.fundPosts.map(p => <FundPost img={p.image}/>)}
        </>
    )
}