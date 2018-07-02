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
                        <Image style={{width: 64, height: 64, marginLeft: 10,flex: 0.2}} source={require('../resource/img/mcdelivery_new11.jpg')} />
                        <View style={{marginLeft: 10, marginTop: 5, flex:0.7}}>
                            <Text>LOTTE COMBO</Text>
                            <Text>100$</Text>
                        </View>
                        <View style={{flex: 0.1,flexDirection: 'row', alignItems:'center'}}>
                            <Text>+</Text>
                            <Text>ô</Text>
                            <Text>+</Text>
                        </View>
                    </View>
                </View>
            </View>

        )
    }

}