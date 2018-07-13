import * as types from './types';

function shouldRequest(state) {
    return !state.orderCartReducer.isFetching;
}

export function orderCart(item){
    return (dispatch, getState) => {
        let checkExist = false; 
        let index;
        let newItem = getState().orderCartReducer.data;
        if(!shouldRequest(getState()) ){
            return Promise.resolve();
        }
        dispatch(orderCartRequest());
        if(newItem.length > 0){
            checkExist = newItem.some((e, i) =>{
                if(e.id == item.id){
                    newItem[i].amount++;
                    index = i;
                    return true;
                }
            })
        }
        if(checkExist == false){
            newItem.push(item);
            dispatch(orderCartUpdate(newItem));
        }
        else
            dispatch(orderCartUpdate(newItem, !getState().orderCartReducer.reloadCart));
            
    }
}

function orderCartRequest() {
    return {
      type: types.ORDERCART_REQUEST
    }
}
function orderCartUpdate(item, reloadCart) {

    return {
      type: types.ORDERCART_UPDATE,
      data: item,
      reloadCart: reloadCart,
    }
}
