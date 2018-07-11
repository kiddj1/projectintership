import * as types from './types';

function shouldRequest(state) {
    console.log(state);
    return !state.orderCartReducer.isFetching;
}

export  function orderCartUpdate(item){
    return (dispatch, getState) => {
        if(!shouldRequest(getState()) ){
            return Promise.resolve();
        }
        dispatch(orderCartRequest());

        //dispatch(orderCartUpdate(item));
    }
}

function orderCartRequest() {
    return {
      type: types.ORDERCART_REQUEST
    }
}
function orderCartUpdate(item) {
    return {
      type: types.ORDERCART_UPDATE,
      data: item
    }
}