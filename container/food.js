import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as font from '../globalstyle/style';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableHighlight
} from 'react-native';

export  class Food extends Component{
    constructor(props){
        super(props);
    }
    renderItem = ({item}) => {
     
        return(
            <TouchableHighlight style={{paddingVertical: 10, borderBottomWidth: 0.5, borderBottomColor: '#7f8c8d30'}} underlayColor='#2c3e5030' onPress={() => console.log('VUVU')}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={{width: 64, height: 64, marginLeft: 10}} source={require('../resource/img/mcdelivery_new11.jpg')} />
                        <View style={{flex: 1}}>
                            <Text style={styles.textname}>Gà khoai tây - nước ngọt - pepsi</Text>
                            <Text style={styles.textaddress}>37 Bình Giã, P.13, Q.Tân Bình</Text>
                            <View style={{flexDirection: 'row', marginLeft: 10, alignItems: 'center', marginTop: 5 }}>
                                <Ionicons style={{marginRight: 3}} name='ios-pricetags-outline' size={12} />
                                <Text style={styles.textprice}>Price: 60k </Text>
                            </View>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <View style={{flex: 0.8}}>
                                    <Text style={styles.textshop}>ABC FOOD</Text>
                                </View>
                                <View style={{flex: 0.2, marginRight: 10 , borderWidth: 0.1 , borderRadius: 5, borderColor: 'transparent' ,backgroundColor: '#4cd137' }}>
                                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
                                        <Text style={{ fontFamily: font.motivaSanBold, color: 'white'}}>+</Text>
                                        <Text style={{ fontFamily: font.motivaSan, color: 'white'}}>ADD</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
            </TouchableHighlight>
        )
    }
    render(){
        return(
            <View style={{flex: 1}}>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}, {key: 'c'},{key: 'd'},{key: 'e'} , {key: 'f'}]}
                    renderItem={this.renderItem}
                />   
            </View>

        )
    }

}

const styles = StyleSheet.create({
    textname:{
        marginLeft: 10,
        fontFamily: font.motivaSanBold,
        color: 'black',
        fontSize: 12,
    },
    textaddress:{
        fontFamily: font.motivaLight,
        fontSize: 9,
        marginLeft: 10,
        
    },
    textprice:{
        fontSize: 8,
        color:'#2d3436',
        fontFamily: font.motivaSan, 
    },
    textshop:{
        marginLeft: 10,
        marginTop: 5,
        fontSize: 8,
        color: '#2d3436',
        fontFamily: font.motivaSan, 
    },


});