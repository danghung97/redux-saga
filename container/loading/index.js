import React, { Component } from 'react';
import{
    View,
    Image
}from 'react-native';
import {connect} from 'react-redux';

class Loading extends Component{
    render(){
        return(
            <View>
                {this.props.loading.loading ?
                <Image resizeMode="cover" source={require('../../image/loading.gif')} />
                : null
                }
            </View>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        loading: state.MovieReducer
    }
}

export default connect(mapStateToProps)(Loading)