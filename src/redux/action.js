export const ADD_RECORDS = 'ADD_RECORDS';
export const addRecords = payload => ({
    type: ADD_RECORDS,
    payload: payload,
});

export const CLEAR_RECORDS = 'CLEAR_RECORDS';
export const clearRecords = () => ({
    type: CLEAR_RECORDS,
});