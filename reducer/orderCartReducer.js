import * as types from '../action/types';

const initialState = {
    data: [],
    isFetching: false,
}
  
export  const orderCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ORDERCART_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.ORDERCART_UPDATE:
            return {
                ...state,
                isFetching: false,
                data: state.data.concat('1'),
            }
        default:
            return state;
    }
}