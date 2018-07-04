import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fontName} from '../globalstyle/style';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

export class InPastOrder extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 1,
        }
    }
    toggleCount(operation){
        if(operation)
            this.setState({count: this.state.count + 1});
        else
            this.setState({count: this.state.count - 1});
    }
    render(){
        return(
            <View style={{flex: 1, marginTop: 10}}>
                <Text style={{fontFamily : fontName, textAlign: 'center'}}>RECENT SPENDINGS</Text>
                <ScrollView style={{flex: 1, marginHorizontal: 10}}>
                    <View style={{backgroundColor: 'white', marginTop: 10, padding: 10, borderRadius: 5}}>
                        <View style={{flexDirection: 'row'}}>
                            <Image style={{width: 64, height: 64, marginLeft: 10,flex: 0.2}} source={require('../resource/img/mcdelivery_new11.jpg')} />
                            <View style={{marginLeft: 10, marginTop: 5, flex:0.6}}>
                                <Text style={{color: 'black'}}>LOTTE COMBO</Text>
                                <Text style={{color: '#bdc3c7'}}>$100</Text>
                            </View>
                            <View style={{flex: 0.2, alignItems:'center'}}>
                                <Ionicons name='md-square' color='#fbc531' size={14} style={{}} />
                                <Text style={{fontSize: 8, color:'#fbc531'}}>Waiting</Text>
                                <Ionicons name='md-square' color='#4cd137' size={14} style={{}} />
                                <Text style={{fontSize: 8, color:'#4cd137'}}>Arrived</Text>
                                <Ionicons name='md-square' color='#e84118' size={14} style={{}} />
                                <Text style={{fontSize: 8, color:'#e84118'}}>Delayed</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

        )
    }

}
const styles = StyleSheet.create({
    plus:{
        borderWidth: 0.5,
        height: 30,
        width: 30,
        borderColor: '#bdc3c7',
        borderRadius: 30,
        backgroundColor: '#bdc3c7',
        alignItems: 'center',
        justifyContent: 'center'
    },
  
});