import {combineReducers} from 'redux';
import userReducer from './user-reducer';
import storiesReducer from './storiesReducer';

export default combineReducers({
    user:userReducer,
    stories:storiesReducer
});