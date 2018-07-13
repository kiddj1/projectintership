import * as types from '../action/types';

const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false,
    [types.FETCHING_DATA_REQUEST](state, action){
        let newState;
    },
}
  
export  const dataDelivery = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCHING_DATA_REQUEST:
        return {
            ...state,
            isFetching: true
        }
        case types.FETCHING_DATA:
            return {
            ...state,
            data: [],
            isFetching: false
            }
        case types.FETCHING_DATA_SUCCESS:
            return {
            ...state,
            isFetching: false,
            data: action.data
            }
        case types.FETCHING_DATA_FAILURE:
            return {
            ...state,
            isFetching: false,
            error: true
            }
        default:
            return state
    }
}