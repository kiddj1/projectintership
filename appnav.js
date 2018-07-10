import {
    Router,
    Scene,
    Actions,
} from 'react-native-router-flux';

import {tab} from './apptab';

// --- child component can connect and listen to props they want.
const myConnectedMainConponent = connect()(myMainConponent);
const myConnectedLoginConponent = connect()(myLoginConponent);

// --- Create it via Actions.create(), or it will be re-created for each render of your Router
const scenes = Actions.create(
    <Scene key="root">
        <Scene key="main" component={myMainConponent} />
    </Scene>
);

// --- Create connected Router if you want dispatch() method.
// --- Or you can just use vanilla Router
export const myConnectedRouter = connect()(Router);
