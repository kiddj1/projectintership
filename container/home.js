import React,{Component} from 'react';
import {Tab} from '../apptab';
import {View} from 'react-native';
import {connect} from 'react-redux';
import { ActionCreators } from '../action/index';
import { bindActionCreators } from 'redux'; 
export  class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props);
        return(
            <View style={{flex: 1}}>
                <Tab /> 
            </View>

        )
    }

}
