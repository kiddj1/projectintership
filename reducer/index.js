import { combineReducers } from 'redux';

import * as counterReducer from './counterReducer';
import * as getDataReducer from './getDataReducer';
import * as navReducer from './navReducer';

export default combineReducers(Object.assign({},
    counterReducer,
    getDataReducer,
    navReducer
));