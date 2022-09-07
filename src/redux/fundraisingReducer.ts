import {ActionsTypes, FundRaisingPageType, ProfilePageType} from "./store";
import {v1} from "uuid";
import funder1 from "../assets/img/fundraising/funder-1.jpg";
import funder2 from "../assets/img/fundraising/funder-2.jpg";
import funder3 from "../assets/img/fundraising/funder-3.jpg";

const initialState = {
        fundPosts: [
            {
                id: v1(),
                image: {funder1},
                title: "один",
                donatedPeoples: 33
            },
            {
                id: v1(),
                image: {funder2},
                title: "два",
                donatedPeoples: 64
            },
            {
                id: v1(),
                image: {funder3},
                title: "три",
                donatedPeoples: 59
            },
        ]
    }

const fundraisingReducer = (state: FundRaisingPageType = initialState, action: ActionsTypes) => {

    return state
}

export default fundraisingReducer