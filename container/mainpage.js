import React, { Component } from 'react';
import PopupDialog from 'react-native-popup-dialog';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TabOnMainPage} from '../apptab'; 
import LinearGradient from 'react-native-linear-gradient';
import Firebase from 'react-native-firebase';
import {connect} from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
  Button
} from 'react-native';

class MainPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            refreshScreen: false,
        }
    }
    toggleCount(operation){
        if(operation)
            this.setState({count: this.state.count + 1});
        else
            this.setState({count: this.state.count - 1});
    }  
    refreshScreen(){
        this.setState({refreshScreen: !this.state.refreshScreen});
    }
    renderItemCart = ({item}) =>{
    return(
        <View style={{flex: 1}}> 
            <View style={{borderWidth: 0.5, marginHorizontal: 10, marginTop: 5, borderColor:'#bdc3c7'}}></View>
            <View>
                <View style={{flexDirection: 'row', marginTop:10, justifyContent:'space-around'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={{width: 32, height: 32}} source={{uri: item.image}} />
                        <Text style={{fontSize: 12}}> {item.name}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={styles.plus} onPress={() => this.toggleCount(false) } >
                            <Ionicons name='ios-remove' size={18} color='#2980b9' />
                        </TouchableOpacity>
                        <Text style={{marginHorizontal: 10}}>{item.amount}</Text>
                        <TouchableOpacity style={styles.plus} onPress={() => this.toggleCount(true) } >
                            <Ionicons name='ios-add' size={18} color='#e74c3c' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
    }
    _keyExtractor = (item, index) => index.toString();

    render(){
        console.log(this.props);
        return(
            <View style={{flex: 1, backgroundColor: 'white'}}>
                {/* <Text>{this.props.dataCart.length > 0 && this.props.dataCart[0].name}</Text> */}
                <TabOnMainPage />

                <TouchableOpacity style={styles.bottomOrder} onPress={() =>{this.refreshScreen(); this.popupDialog.show()} }>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name='md-cart' color='#0097e6' size={14} />
                        <Text style={{marginLeft: 10, color:'#0097e6', fontSize: 12}}>{this.props.dataCart.length} Items - 0$</Text>
                    </View>
                </TouchableOpacity>
                <PopupDialog
                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                    width={Dimensions.get('window').width * 0.7}
                    height={Dimensions.get('window').height * 0.7}
                >
                    <View style={{flex: 1}}>
                        <Text style={styles.textPopupOrder}>Order Summary</Text>
                        <FlatList
                            data={this.props.dataCart}
                            renderItem={this.renderItemCart}
                            keyExtractor={this._keyExtractor}
                            extraData={this.state.refreshScreen}
                        />   
                         <TouchableOpacity style={{ width: '50%', position:'absolute', bottom: 10, right: 5,borderRadius: 20 }}>
                            <LinearGradient  start={{x: 0.1, y: 0.25}} end={{x: 0.4, y: 1.0}} locations={[0.25,1]} colors={['#FBAB7E','#F7CE68']}  >
                                    <Text style={{color: 'white',textAlign: 'center', color:'white'}}>Check out</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </PopupDialog>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    bottomOrder:{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        position: 'absolute',
        bottom: 0, 
        width: '100%', 
        height: 20,
    },
    textPopupOrder:{
        marginTop: 10,
        textAlign: 'center',
    },
    plus:{
        borderWidth: 0.5,
        height: 20,
        width: 20,
        borderColor: '#bdc3c7',
        borderRadius: 20,
        backgroundColor: '#bdc3c7',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const mapStateToProps = (state) => ({
    dataCart: state.orderCartReducer.data,
    reloadCart: state.orderCartReducer.reloadCart,
    count: state.countReducer,
    isFetching: state.orderCartReducer.isFetching
});
export default connect(mapStateToProps)(MainPage);