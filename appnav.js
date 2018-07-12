import React,{Component} from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Tab } from './apptab';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    Image,View,Dimensions,Text,TouchableOpacity,StyleSheet,
} from 'react-native';

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
        return <MainStack/>
    }
}
const mapStateToProps = (state) => ({
    count: state.countReducer,
});
export default connect(mapStateToProps)(MainStack);