import * as types from './types';

function shouldRequest(state) {
    console.log(state);
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

        if(newItem.length > 0){
            checkExist = newItem.some((e, i) =>{
                if(e.id == item.id){
                    newItem[i].amount++;
                    index = i;
                    return true;
                }
            })
        }
        if(checkExist == false)
            dispatch(orderCartUpdate(item));
        else
            dispatch(orderCartUpdate(newItem, checkExist, index));
        
    }
}

function orderCartRequest() {
    return {
      type: types.ORDERCART_REQUEST
    }
}
function orderCartUpdate(item, checkExist, index) {

    return {
      type: types.ORDERCART_UPDATE,
      data: item,
      checkExist: checkExist,
      index: index
    }
}