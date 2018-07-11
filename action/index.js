import * as counterAction from './counterAction';
import * as getDataAction from './getDataAction';
import * as orderCartAction from './orderCartAction';
import * as fetchDataAction from './fetchDataAction';
export const ActionCreators = Object.assign({},
    counterAction,
    getDataAction,
    orderCartAction,
    fetchDataAction

);