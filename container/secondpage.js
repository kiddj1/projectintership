import React, { Component } from 'react';
import {connect} from 'react-redux';
import { ActionCreators } from '../action/index';
import { bindActionCreators } from 'redux'; 
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export  class SecondPage extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <View>
                <Text>{this.props.count}</Text>
                <Button onPress={() => this.props.counterIncrement()} title='AAAA' />
            </View>
        )
    }

}

const mapStateToProps = state => ({
    count: state,
});
const mapDispatchToProps = (dispatch) => (
    bindActionCreators(ActionCreators, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(SecondPage);