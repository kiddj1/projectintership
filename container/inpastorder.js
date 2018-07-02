import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export class InPastOrder extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{backgroundColor: 'white', marginHorizontal: 10, marginTop: 10, padding: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={{width: 64, height: 64, marginLeft: 10}} source={require('../resource/img/mcdelivery_new11.jpg')} />
                        <View style={{marginLeft: 10}}>
                            <Text>LOTTE COMBO</Text>
                            <Text>100$</Text>
                        </View>
                    </View>
                </View>
            </View>

        )
    }

}