import { combineReducers } from 'redux';

import {
    ADD_RECORDS,
} from './action';

const editRecords = (state = [], action) => {
    switch (action.type) {
        case ADD_RECORDS:
            return [...state, ...action.payload];
    }
    return state;
}

export default combineReducers({
    records: editRecords
});