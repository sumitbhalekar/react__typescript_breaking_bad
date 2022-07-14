import { combineReducers } from 'redux';
import characterReducer from './characterReducer';

const rootReducer = combineReducers({
    breakingBadData: characterReducer
});

export default rootReducer;