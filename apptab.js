import React from 'react';
import Cake from './container/cake';
import Drink from './container/drink';
import Food from './container/food';
import Fruit from './container/fruit';
import MainPage from './container/mainpage';
import SecondPage from './container/secondpage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator,createMaterialTopTabNavigator } from 'react-navigation';
import {
    Image,View,Dimensions
} from 'react-native';

export const Tab = createBottomTabNavigator(
    {
        Home: MainPage,
        History: SecondPage,
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
        Cake: Cake,
        Drink: Drink,
        Food: Food,
        Fruit: Fruit,
    
    },{
        swipeEnabled: false,
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
                console.log(focused);
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
