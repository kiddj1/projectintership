import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import MainStack,{middleware} from './appnav';
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
        middleware
      ),
    );
    return createStore(rootReducer, initialState, enhancer);
}

const AppContainer = () => {
    return (
        <Provider store={configureStore({})}>
            <MainStack/>
        </Provider>
    )
}




AppRegistry.registerComponent('Delivery', () => AppContainer);
