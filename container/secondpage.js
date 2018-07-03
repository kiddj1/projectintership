import React, { Component } from 'react';
import {connect} from 'react-redux';
import { ActionCreators } from '../action/index';
import { bindActionCreators } from 'redux'; 
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';
import {TabOnSecondPage} from '../apptab'; 
export class SecondPage extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        console.log(this.props.people);
        return(
            <View style={{flex: 1}}>
                <View style={{backgroundColor:'white', marginTop: 10 }}>
                    <View style={{marginHorizontal: 20}}>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTotal}>Subtotal:</Text>
                            <Text>0$</Text>
                        </View>
                        <View style={styles.line}/>
                        <View style={styles.textStyle}>
                            <Text style={styles.textTotal}>Ship:</Text>
                            <Text>0$</Text>
                        </View>
                        <View style={styles.line}/>
                        <View style={styles.textStyle}>
                            <Text style={[styles.textTotal,{fontWeight: 'bold'}]}>Total:</Text>
                            <Text>0$</Text>
                        </View>
                    </View>
                </View>
  
                <TabOnSecondPage/>

            </View>
        )
    }

}
const styles = StyleSheet.create({
    textTotal:{
        color:'black',  
    },
    textStyle:{
        flexDirection: 'row', 
        marginVertical: 10,
        justifyContent: 'space-between',
    },
    line:{
        borderWidth: 0.5,
        marginTop: 5,
        borderColor:'#bdc3c7',
    }
});
const mapStateToProps = state => ({
    count: state.countReducer,
    people: state.dataReducer,

});
const mapDispatchToProps = (dispatch) => (
    bindActionCreators(ActionCreators, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(SecondPage);