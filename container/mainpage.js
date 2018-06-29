import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {TabOnMainPage} from '../apptab'; 
export default class MainPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <TabOnMainPage/>
            </View>

        )
    }

}