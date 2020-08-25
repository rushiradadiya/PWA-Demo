import {GET_ARTICAL_DATA} from "./type";

const Articles = require("../data/articles")

export const getArticleData = () => {
    return ({
        type: GET_ARTICAL_DATA,
        payload: Articles,
    });
};
