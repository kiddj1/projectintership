import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {TabOnMainPage} from '../apptab'; 
export class MainPage extends Component{
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