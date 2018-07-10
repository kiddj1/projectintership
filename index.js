import React,{Component} from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import AppNav from './appnav';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer/index';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

const store = createStore(rootReducer,(applyMiddleware(thunkMiddleware,loggerMiddleware)));

// function configureStore(initialState){
//     const enhancer = compose(
//       applyMiddleware(
//         thunkMiddleware,
//         loggerMiddleware,
//       ),
//     );
//     return createStore(rootReducer, initialState, enhancer);
// }

const AppContainer = () => {
    // console.log(configureStore({}));
    return (
        <Provider store={store}>
            <AppNav/>
        </Provider>
    )
}
AppRegistry.registerComponent('Delivery', () => AppContainer);
