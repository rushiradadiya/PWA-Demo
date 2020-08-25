import {GET_FRIENDS_DATA} from "../actions/type"

const Initial_state = {
    friend_data: []
};
export default (state= Initial_state,action)=>{
    switch (action.type) {
        case GET_FRIENDS_DATA:{
            return{
                ...state,
                friend_data: action.payload
            };
        }
        default:
            return state;

    }
}
