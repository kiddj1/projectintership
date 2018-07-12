import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as font from '../globalstyle/style';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../action/index';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

export  class Food extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    orderCartUpdate(item){
        this.props.orderCart(item);
    }
    renderItem = ({item}) => { 
        return(
            <TouchableHighlight style={{paddingVertical: 10, borderBottomWidth: 0.5, borderBottomColor: '#7f8c8d30'}} underlayColor='#2c3e5030' onPress={() => this.orderCartUpdate(item)}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={{width: 64, height: 64, marginLeft: 10}} source={{uri: 'http://mytkv.site/vu/' + item.image}} />
                    <View style={{flex: 1}}>
                        <Text style={styles.textname}>{item.name}</Text>
                        <Text style={styles.textaddress}>{item.address}</Text>
                        <View style={{flexDirection: 'row', marginLeft: 10, alignItems: 'center', marginTop: 5 }}>
                            <Ionicons style={{marginRight: 3}} name='ios-pricetags-outline' size={12} />
                            <Text style={styles.textprice}>Price: {item.price} </Text>
                        </View>
                        <View style={{flexDirection: 'row', flex: 1}}>
                            <View style={{flex: 0.8}}>
                                <Text style={styles.textshop}>{item.shop}</Text>
                            </View>
                            <TouchableOpacity style={styles.btnadd}>
                                <Text style={{ fontFamily: font.motivaSanBold, color: 'white', textAlign: 'center', marginTop: 3}}>+ADD</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
    _keyExtractor = (item, index) => index.toString();
    render(){
        console.log(this.props);
        return(
            <View style={{flex: 1}}>
                {this.props.data != null && this.props.data.length > 0 && !this.props.isFetching &&
                    <FlatList
                        data={this.props.data}
                        renderItem={this.renderItem}
                        keyExtractor={this._keyExtractor}
                    />   
                }
                {this.props.isFetching &&
                    <ActivityIndicator size="large" color="#0000ff" />
                }
            </View>

        )
    }
    componentWillReceiveProps(np){
    }
    componentDidMount(){
        this.props.fetchDataDelivery();
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
        fontSize: 10,
        color:'#2d3436',
        fontFamily: font.motivaSan, 
    },
    textshop:{
        marginLeft: 10,
        marginTop: 5,
        fontSize: 10,
        color: '#2d3436',
        fontFamily: font.motivaSan, 
    },
    btnadd:{
        flex: 0.2,
        width: 60,
        height: 30,
        marginRight: 10 ,
        backgroundColor: '#4cd137',
        borderWidth: 0.1,
        borderRadius: 5, 
        borderColor: 'transparent',
        justifyContent: 'center'
    }


});
const mapStateToProps = (state) => ({
    count: state.countReducer,
    data: state.dataDelivery.data,
    isFetching: state.dataDelivery.isFetching,
});
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Food);