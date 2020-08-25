import {GET_FRIENDS_DATA} from "./type";

const friends = require("../data/users")

export const getFriendsData = () => {
    return ({
        type: GET_FRIENDS_DATA,
        payload: friends,
    });
};
