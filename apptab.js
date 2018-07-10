import React from 'react';
import * as Container from './container/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator,createMaterialTopTabNavigator } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import {
    Image,View,Dimensions,Text,TouchableOpacity,StyleSheet,
} from 'react-native';

export const Tab = createBottomTabNavigator(
    {
        Home: Container.MainPage,
        Cart: Container.SecondPage,
    },{
        initialRouteName: 'Home',
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: '#eb4d4b',
            style: {
                height: Dimensions.get('window').height * 0.07,
            },
            tabStyle: {  
            }
        },
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({focused, tintColor}) =>{
                const { routeName } = navigation.state;
                let iconName;
                if(routeName === 'Home'){
                    iconName = `ios-home${focused ? '' : '-outline' }`;
                } else if (routeName === 'Cart'){
                    iconName = `ios-paper${focused ? '' : '-outline' }`;
                }   
                return(
                    <Ionicons name={iconName} size={16} color={tintColor} style={{justifyContent:'center'}} />
                )
            }
        }),

        
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
const TabOnSecondPageCustom = (props) => {
    const tabActive = props.navigationState.routes[props.navigationState.index].routeName;
    return (
        <LinearGradient style={{flex: 0.3}} start={{x: 0, y: 1}} end={{x: 0, y: 0}} locations={[0,0.6]} colors={['#fbc2eb','#a6c1ee']}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', flex:0.5, marginTop: 10 }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('CURRENTORDER')}>
                        <Text style={tabActive == 'CURRENTORDER' ? styles.textActive : styles.textInActive}>Current</Text>
                        {tabActive == 'CURRENTORDER' && <View style={{borderBottomWidth: 3,borderRadius: 30,borderBottomColor:'white',}}></View>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('ORDERHISTORY')}>
                        <Text style={tabActive == 'ORDERHISTORY' ? styles.textActive : styles.textInActive}>History</Text>
                        {tabActive == 'ORDERHISTORY' && <View style={{borderBottomWidth: 3,borderRadius: 30,borderBottomColor:'white',}}></View>}
                    </TouchableOpacity>
            </View>
            <View style={{flex:0.5, alignItems: 'center', marginBottom: 10}}>
                <View style={{}}>
                    <Text style={{color: 'white', fontFamily: 'Motiva-Sans-Light',fontSize: 16}}>TOTAL SPENDINGS</Text>
                    <Text style={styles.textBold}>$ 1,000.00</Text>
                </View>
            </View>
        </LinearGradient>
    )


};
const styles = StyleSheet.create({
    textBold:{
        color:'white',
        fontSize: 18,
        fontFamily: 'Motiva-Sans-Light',
        textAlign: 'center'
    },
    textActive:{
        color:'white',
        fontFamily: 'Motiva-Sans-Bold',
        opacity: 1,
    },
    textInActive:{
        color:'white',
        fontFamily: 'Motiva-Sans-Bold',
        opacity: 0.5,
    },
    bottomLine:{
        borderBottomWidth: 2,
        borderBottomColor:'white',
        borderRadius: 10,
    },
    
});
export const TabOnSecondPage = createMaterialTopTabNavigator(
    {
        CURRENTORDER: Container.InProcess,
        ORDERHISTORY: Container.InPastOrder,
    },{
        tabBarComponent: props =>  TabOnSecondPageCustom(props),
        tabBarOptions: {
            indicatorStyle  :{
                backgroundColor: '#00a8ff',  
                width: 50,
                alignSelf:'flex-end'
            },
        },
    } 
);
