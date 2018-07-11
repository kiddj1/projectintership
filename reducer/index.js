import { combineReducers } from 'redux';

import * as counterReducer from './counterReducer';
import * as getDataReducer from './getDataReducer';
import * as fetchDataReducer from './fetchDataReducer';
import * as orderCartReducer from './orderCartReducer';
export default combineReducers(Object.assign({},
    counterReducer,
    getDataReducer,
    fetchDataReducer,
    orderCartReducer
));