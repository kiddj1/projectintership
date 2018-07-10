import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider,connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer/index';
import { createLogger } from 'redux-logger';
import * as Container from './container/index'; 
import {
    Router,
    Scene,
    Actions,
} from 'react-native-router-flux';
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

// const store = createStore(rootReducer,compose(applyMiddleware(thunkMiddleware),loggerMiddleware));
const RouterWithRedux = connect()(Router);
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
            <RouterWithRedux>
                <Scene
                    key="rootTabBar"
                    tabs={true}
                    tabBarStyle={{backgroundColor: '#ffffff'}}
                    tabBarPosition={'bottom'}
                >
                    <Scene key="home" component={Container.MainPage} title="Home" icon={''} hideNavBar/>
                    <Scene key="search" component={Container.SecondPage} title="Search" icon={''} hideNavBar/>
                </Scene>
            </RouterWithRedux>
        </Provider>
    )
}




AppRegistry.registerComponent('Delivery', () => AppContainer);
