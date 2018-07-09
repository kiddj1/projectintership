

import { mainStack } from '../appnav';
import { Tab , TabOnMainPage ,TabOnSecondPage } from '../apptab';
const initialState = mainStack.router.getStateForAction(mainStack.router.getActionForPathAndParams('Home'));
export const navReducer = (state = initialState, action) => {
    console.log(mainStack);
    const nextState = mainStack.router.getStateForAction(action, state);

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};