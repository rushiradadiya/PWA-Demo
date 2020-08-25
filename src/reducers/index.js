import { combineReducers } from 'redux';
import HomeReducer from './home'
import FriendReducer from './friend'

export default combineReducers({ home:HomeReducer,friend:FriendReducer})
