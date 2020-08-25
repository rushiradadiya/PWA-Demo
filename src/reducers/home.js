import {GET_ARTICAL_DATA} from "../actions/type"

const Initial_state = {
    article_data: []
};
export default (state= Initial_state,action)=>{
    switch (action.type) {
        case GET_ARTICAL_DATA:{
            return{
                ...state,
                article_data: action.payload
            };
        }
        default:
            return state;

    }
}
