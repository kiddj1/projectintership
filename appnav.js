import { createStackNavigator } from 'react-navigation';
import { Tab } from './apptab';

const mainStack = createStackNavigator(
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

export default mainStack;