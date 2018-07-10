import React,{Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import { Tab } from './apptab';
import { connect } from 'react-redux';
export const MainStack = createStackNavigator(
    {
        Main: {
            screen: Tab,
        },

    },
    {
        headerMode: 'none',
        initialRouteName: 'Main',
        /* Same configuration as before */
    },
    

);
export class AppNav extends Component {
    
    render() {
        console.log(this.props);
        return <MainStack/>
    }
}
const mapStateToProps = (state) => ({
    count: state.countReducer,
});
export default connect(mapStateToProps)(AppNav);