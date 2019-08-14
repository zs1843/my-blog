import { combineReducers } from "redux";
import homeReducer from './R/homeR';
import layoutReducer from './R/layoutR';

const reducers = combineReducers({
    homeReducer,
    layoutReducer
});

export default reducers;