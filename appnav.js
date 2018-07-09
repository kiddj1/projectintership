import { createStackNavigator } from 'react-navigation';
import { Tab, TabOnMainPage ,TabOnSecondPage } from './apptab';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
  } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

export const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

export const mainStack = createStackNavigator(
    {
        Home: {
            screen: Tab,
        },

    },
    {
        headerMode: 'none'
        /* Same configuration as before */
    }

);
// const navReducer = createNavigationReducer(mainStack);


const App = reduxifyNavigator(mainStack, "root");

const mapStateToProps = (state) => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;