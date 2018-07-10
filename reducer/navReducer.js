

import { mainStack } from '../appnav';
import { Tab , TabOnMainPage ,TabOnSecondPage } from '../apptab';
// const initialState = mainStack.childRouters.getStateForAction(mainStack.childRouters.getActionForPathAndParams('Home'));
const initialState = mainStack.router.getStateForAction(mainStack.router.getActionForPathAndParams('Main'));
const initialTabState = Tab.router.getStateForAction(Tab.router.getActionForPathAndParams('Home'));
export const navReducer = (state = initialState, action) => {
    console.log('a');
    const nextState = mainStack.router.getStateForAction(action, state);
    // console.log(nextState);
    // console.log(nextState);
    // Simply return the original `state` if `nextState` is null or undefined.
    return  nextState || state;
};
export const tabReducer = (state = initialTabState, action) => {
    console.log('b');
    const nextState = Tab.router.getStateForAction(action, state);

    // console.log(nextState);
    // console.log(nextState);
    // Simply return the original `state` if `nextState` is null or undefined.
    return  nextState || state;
};
