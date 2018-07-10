import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';
// import {TabOnSecondPage} from '../apptab'; 
export class SecondPage extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        console.log(this.props.people);
        return(
            <View style={{flex: 1}}>
                {/* <TabOnSecondPage/> */}
            </View>
        )
    }

}
const styles = StyleSheet.create({

});