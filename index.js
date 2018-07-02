import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import Home from './container/home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer/index';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

// const store = createStore(rootReducer,compose(applyMiddleware(thunkMiddleware),loggerMiddleware));

function configureStore(initialState){
    const enhancer = compose(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
      ),
    );
    return createStore(rootReducer, initialState, enhancer);
}

const AppContainer = () => {
    return (
        <Provider store={configureStore({})}>
            <Home/>
        </Provider>
    )
}




AppRegistry.registerComponent('Delivery', () => AppContainer);
