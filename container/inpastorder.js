import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export class InPastOrder extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 1,
        }
    }
    plusCount(){
        this.setState({count: this.state.count + 1});
    }
    minusCount(){
        this.setState({count: this.state.count - 1});
    }
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{backgroundColor: 'white', marginHorizontal: 10, marginTop: 10, padding: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={{width: 64, height: 64, marginLeft: 10,flex: 0.2}} source={require('../resource/img/mcdelivery_new11.jpg')} />
                        <View style={{marginLeft: 10, marginTop: 5, flex:0.5}}>
                            <Text>LOTTE COMBO</Text>
                            <Text style={{color: '#bdc3c7'}}>$100</Text>
                        </View>
                        <View style={{flex: 0.3,flexDirection: 'row', alignItems:'center',justifyContent:'space-around'}}>
                            <TouchableOpacity style={styles.plus} onPress={() => this.minusCount() } >
                                <Text style={{fontSize: 20}}>-</Text>
                            </TouchableOpacity>
                            <Text>{this.state.count}</Text>
                            <TouchableOpacity style={styles.plus} onPress={() => this.plusCount() } >
                                <Text style={{fontSize: 20, color: 'red'}}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
    }
});