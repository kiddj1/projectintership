import * as types from '../action/types';
 
export function fetchDataDelivery(){

    return (dispatch, getState) => {
        //isFetching
        dispatch(fetchDataRequest());

        fetch('http://www.mytkv.site/vu/testconnect.php')
        .then((response) => response.json() )
        .then((responsejson) => {
            // fetch ok
            dispatch(fetchDataSuccess(responsejson));
        })
        .catch((error) => {
            console.log(error);
            dispatch(fetchDataFailure());
        })
        
    }

}

function fetchDataRequest() {
    return {
      type: types.FETCHING_DATA_REQUEST
    }
}
function fetchDataSuccess(responsejson) {
    return {
      type: types.FETCHING_DATA_SUCCESS,
      data: responsejson
    }
}
function fetchDataFailure() {
    return {
      type: types.FETCHING_DATA_FAILURE
    }
}
