import { combineReducers } from 'redux';

import {
    PLACEHOLDER
} from './action';

const placeholder = (state = {}, action) => {
    return state;
}

export default combineReducers({
    placeholder: placeholder
});