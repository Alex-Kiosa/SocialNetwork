import React from "react";
import {FundraisingType} from "../../index";
import {FundPost} from "./FundPost";

type FundraisingPropsType = {
    fundPosts: Array<FundraisingType>
}

export const Fundraising = ({fundPosts, ...props} : FundraisingPropsType) => {
    return (
        <>
            {fundPosts.map(p => <FundPost img={p.image}/>)}
        </>
    )
}