import React,{Component} from 'react';
import MainStack from '../appnav';
import {View} from 'react-native';

export default class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <MainStack /> 
            </View>

        )
    }

}