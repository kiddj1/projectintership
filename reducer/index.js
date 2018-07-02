import { combineReducers } from 'redux';

import * as counterReducer from './counterReducer';
import * as getDataReducer from './getDataReducer';


export default combineReducers(Object.assign({},
    counterReducer,
    getDataReducer
));