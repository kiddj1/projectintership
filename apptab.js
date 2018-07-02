import React from 'react';
import * as Container from './container/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator,createMaterialTopTabNavigator } from 'react-navigation';
import {
    Image,View,Dimensions
} from 'react-native';

export const Tab = createBottomTabNavigator(
    {
        Home: Container.MainPage,
        History: Container.SecondPage,
    },{
        swipeEnabled: false,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({focused, tintColor}) =>{
                const { routeName } = navigation.state;
                let iconName;
                if(routeName === 'Home'){
                    iconName = `ios-home${focused ? '' : '-outline' }`;
                } else if (routeName === 'History'){
                    iconName = `ios-paper${focused ? '' : '-outline' }`;
                }   
                return(
                    <Ionicons name={iconName} size={25} color={tintColor} />
                )
            }
        }),
        tabBarOptions: {
            activeTintColor: '#eb4d4b',
        }
    }
);

export const TabOnMainPage = createMaterialTopTabNavigator(
    {
        Cake: Container.Cake,
        Drink: Container.Drink,
        Food: Container.Food,
        Fruit: Container.Fruit,
    
    },{
        swipeEnabled: false,
        animationEnabled: false,
        order: ['Food', 'Drink', 'Cake', 'Fruit'],
        tabBarOptions: {
            indicatorStyle  :{
                backgroundColor: '#00a8ff'
            },
            showLabel: false,
            showIcon: true,
            style: {
                backgroundColor: 'transparent',
            },
            tabStyle: {
                height: Dimensions.get('window').height * 0.07,
            },
        },
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({focused, tintColor}) =>{
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Cake') {
                    !focused ? iconName = require('./resource/img/cake.png') : iconName = require('./resource/img/cake_active.png');
                } else if (routeName === 'Drink') {
                    !focused ? iconName = require('./resource/img/can.png') : iconName = require('./resource/img/can_active.png');
                } else if (routeName === 'Food') {
                    !focused ? iconName = require('./resource/img/dish.png') : iconName = require('./resource/img/dish_active.png');
                } else if (routeName === 'Fruit') {
                    !focused ? iconName = require('./resource/img/fruit.png') : iconName = require('./resource/img/fruit_active.png');
                }
                return(   
                    <Image
                        style={{width: 20, height: 20}}
                        source={iconName}
                    />
                )
            }
        })
        
    }
    
);
export const TabOnSecondPage = createMaterialTopTabNavigator(
    {
        InPastOrder: Container.InPastOrder,
        InProcess: Container.InProcess,
    },{
        tabBarOptions: {
            indicatorStyle  :{
                backgroundColor: '#00a8ff'
            },
            style: {
                backgroundColor: 'white',
            },
            tabStyle: {
                height: Dimensions.get('window').height * 0.07,
            },
            labelStyle: {
                color: 'black',
            }
        },
    } 
);
