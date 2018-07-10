import * as types from './types';

export function orderCartUpdate(){
    return (dispatch, getState) => {
        dispatch({
            type: types.FETCHING_DATA
        });
    }
}