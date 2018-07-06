import * as counterAction from './counterAction';
import * as getDataAction from './getDataAction';
import * as orderCartAction from './orderCartAction';
export const ActionCreators = Object.assign({},
    counterAction,
    getDataAction,
    orderCartAction
);