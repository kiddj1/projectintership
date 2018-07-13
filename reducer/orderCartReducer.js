import * as types from '../action/types';
import createReducer from '../globalstyle/createReducer';

const initialState = {
    data: [],
    isFetching: false,
    reloadCart: false,
}
  
export const orderCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ORDERCART_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.ORDERCART_UPDATE:
            // let newState = Object.assign({}, state);
            // newState.data =
            // newState.isFetching = false;
            return {
                ...state,
                data: action.data,
                isFetching: false,
                reloadCart: action.reloadCart != null ? action.reloadCart : state.reloadCart,
            }
        default:
            return state;
    }
}

