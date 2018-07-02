import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from 'react-native';

export default class Food extends Component{
    constructor(props){
        super(props);
    }
    renderItem = ({item}) => {
     
        return(
            <View style={{marginTop: 10}}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={{width: 64, height: 64, marginLeft: 10}} source={require('../resource/img/mcdelivery_new11.jpg')} />
                    <View>
                        <Text style={styles.textname}>Gà khoai tây - nước ngọt - pepsi</Text>
                        <Text style={styles.textaddress}>37 Bình Giã,P.13,Q.Tân Bình</Text>
                        <View style={{flexDirection: 'row', marginLeft: 10, alignItems: 'center', marginTop: 5,}}>
                            <Ionicons style={{marginRight: 3}} name='ios-pricetags-outline' size={12} />
                            <Text style={styles.textprice}>Price: 60k </Text>
                        </View>
                        <Text style={styles.textshop}>ABC FOOD</Text>
                    </View>
                </View>
                <View style={{borderBottomWidth: 0.5, marginTop: 10,borderBottomColor:'#F1A9A0'}} />
            </View>
        )
    }
    render(){
        return(
            <View style={{flex: 1}}>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}, {key: 'c'}]}
                    renderItem={this.renderItem}
                />   
            </View>

        )
    }

}

const styles = StyleSheet.create({
    textname:{
        marginLeft: 10,
        color: 'black',
        fontFamily: "FallingSky", 
        fontSize: 12,
    },
    textaddress:{
        fontFamily: "LiberationSans-Regular",
        fontSize: 9,
        marginLeft: 10,
        
    },
    textprice:{
        fontSize: 8,
        color:'#2d3436',
        fontFamily: "LiberationSans-Regular", 
    },
    textshop:{
        marginLeft: 10,
        marginTop: 5,
        fontSize: 8,
        color: '#2d3436',
        fontFamily: "LiberationSans-Regular", 
    },


});