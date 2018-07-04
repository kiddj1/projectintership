import React, { Component } from 'react';
import * as font from '../globalstyle/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Icon = Animatable.createAnimatableComponent(Ionicons);
import * as Animatable from 'react-native-animatable';
import Firebase from 'react-native-firebase';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

export class InProcess extends Component{
    constructor(props){
        super(props);
        var config = {
            apiKey: "AIzaSyAuJqyuJxj1HFrUI7A-xAlCkvOosTWFTYk",
            authDomain: "deliverytest.firebaseapp.com",
            databaseURL: "https://deliverytest-49d23.firebaseio.com/",
            projectId: "deliverytest-49d23",
            storageBucket: "deliverytest-49d23.appspot.com"
        };
        Firebase.initializeApp(config);
        var database = Firebase.database().ref().set({
            id: 'VUVUT',

        }).then(() => {
            console.log('INSTALL')
        });
        var database = Firebase.database().ref();
        console.log(database);
    }
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{flex: 1, marginTop: 10}}>
                    <Text style={{fontFamily : font.fontName, textAlign: 'center'}}>RECENT CURRENTs</Text>
                    <ScrollView style={{flex: 1, marginHorizontal: 10}}>
                        <View style={{backgroundColor: 'white', marginTop: 10, padding: 10, borderRadius: 5}}>
                            <View style={{flexDirection: 'row'}}>
                                <Image style={{width: 64, height: 64, marginLeft: 10,flex: 0.2}} source={require('../resource/img/mcdelivery_new11.jpg')} />
                                <View style={{marginLeft: 10, marginTop: 5, flex:0.6}}>
                                    <Text style={styles.textName}>LOTTE COMBO</Text>
                                    <Text style={styles.textValue}>$100</Text>
                                    <Text style={styles.textDay}>Jul 4,2017</Text>
                                </View>
                                <View  style={{flex: 0.2, alignItems:'center'}}>
                                    <Icon animation="fadeIn" duration={2000} iterationCount={'infinite'} name='md-square' color='#fbc531' size={14} style={{}} />
                                    <Text style={{fontSize: 8, color:'#fbc531'}}>Waiting</Text>
                                </View>
                                
                            </View>
                        </View>
                    </ScrollView>
                </View>
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
    textName:{
        fontFamily: font.fontNameRegular,
        color: 'black',
    },
    textValue:{
        color: '#bdc3c7',
        fontFamily: font.fontNameRegular
    },
    textDay:{
        color: '#bdc3c7',
        fontFamily: font.fontNameRegular,
        fontSize: 12
    }
  
});