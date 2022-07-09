import React from "react";

type FundPostPropsType = {
    img: any // need to fix
}

export const FundPost :React.FC<FundPostPropsType>= (props) => {
    return (
        <div>
            <div className="card">
                <img src={"http://demo.foxthemes.net/socialitev2.2/assets/images/funding/funder-3.jpg"} className="cardImg"></img>
                <div className="cardBody">
                    <div className="cardTitle"></div>
                    <div className="cardFooter"></div>
                </div>
            </div>
        </div>
    )
}