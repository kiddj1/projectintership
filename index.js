import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import Home from './container/home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {countReducer} from './reducer/counterReducer';
import {dataReducer}  from './reducer/getDataReducer';
const rootReducer = combineReducers({
    countReducer,
    dataReducer

})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const AppContainer = () => {
    return (
        <Provider store={store}>
            <Home/>
        </Provider>
    )
}




AppRegistry.registerComponent('Delivery', () => AppContainer);
