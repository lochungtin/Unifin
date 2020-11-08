import { combineReducers } from 'redux';

import {
    ADD_RECORD,
    ADD_RECORDS,
    CLEAR_RECORDS,
} from './action';

const editRecords = (state = [], action) => {
    switch (action.type) {
        case ADD_RECORD:
            var prev = [...state];
            prev.push(action.payload);
            return prev;
        case ADD_RECORDS:
            return [...state, ...action.payload];
        case CLEAR_RECORDS:
            return [];
    }
    return state;
}

export default combineReducers({
    records: editRecords
});