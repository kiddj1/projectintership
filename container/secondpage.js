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
        console.log(this.props);
        return(
            <View style={{flex: 1}}>
                <TabOnSecondPage/>
            </View>
        )
    }

}
const styles = StyleSheet.create({

});
const mapStateToProps = state => ({
    count: state.countReducer,
    people: state.dataReducer,

});
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
    
};
export default connect(mapStateToProps, mapDispatchToProps)(SecondPage);