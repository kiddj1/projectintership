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

            let newState = Object.assign({}, state);
            if(action.checkExist)
                newState.data[action.index] == action.data;  
            else{
                newState.data.push(action.data);
            }
            newState.isFetching = false;
            return newState;
        default:
            return state;
    }
}